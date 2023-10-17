<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-between">
      <span class="m-0"
        >№ <strong>{{ item.serialNumber || 0 }}</strong></span
      >
      <span v-if="getClient(item.clientId)"
        >{{ getClient(item.clientId).phone.substr(0, 7) }}-{{
          getClient(item.clientId).phone.substr(7)
        }}</span
      >
    </div>
    <!-- Клиент -->
    <div v-if="user.access < 3" class="col-9 col-md-10 pe-md-1">
      <select
        class="form-select"
        id="inputClientId"
        v-model="item.clientId"
        @change="$emit('save-item')"
      >
        <option v-for="client in clients" :key="client.id" :value="client.id">
          {{ client.city + ' - ' + client.name + ' - ' + client.phone }}
        </option>
      </select>
    </div>

    <div v-if="user.access < 3" class="col-3 col-md-2 ps-0 ps-md-1">
      <BtnOpenClient
        class="btn btn-light text-secondary lh-1 p-2 w-100"
        @click="
          $emit('show-modal', {
            type: 'client',
            item: getClient(item.clientId),
            mod: 'edit'
          })
        "
        :disabled="!item.clientId"
      />
    </div>

    <!-- Сварщик -->
    <div class="col-12 mt-2">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputUserId"
          :disabled="user.access === 3"
          v-model="item.userId"
          @change="$emit('save-item')"
        >
          <option value="">Не выбран</option>
          <option v-for="user in usersFilter" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
        <label for="inputUserId">Сварщик</label>
      </div>
    </div>

    <!-- Котел -->
    <div class="col-12 col-md-4 mt-2 pe-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputKotelId"
          :disabled="user.access === 3"
          v-model="item.kotelId"
          @change="setPrice(item.kotelId)"
        >
          <option v-for="kotel in kotels" :key="kotel.id" :value="kotel.id">
            {{ kotel.typek + ' - ' + kotel.power + ' - ' + kotel.metall }}
          </option>
        </select>
        <label for="inputKotelId">Котел</label>
      </div>
    </div>

    <!-- Петли -->
    <div class="col-12 col-md-4 mt-2 ps-md-1 pe-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputPetliPos"
          :disabled="user.access === 3"
          v-model="item.petliPos"
          @change="$emit('save-item')"
        >
          <option value="left">Слева</option>
          <option value="right">Справа</option>
        </select>
        <label for="inputPetliPos">Петли л/п</label>
      </div>
    </div>

    <!-- Бункер -->
    <div class="col-12 col-md-4 mt-2 ps-md-1">
      <div
        v-if="
          item.kotelId &&
          (getKotel(item.kotelId).typek === 'А' ||
            getKotel(item.kotelId).typek === 'АМ')
        "
        class="form-floating"
      >
        <select
          class="form-select"
          id="inputBunkerPos"
          :disabled="user.access === 3"
          v-model="item.bunkerPos"
          @change="$emit('save-item')"
        >
          <option value="left">Слева</option>
          <option value="right">Справа</option>
          <option value="around">Собеих</option>
        </select>
        <label for="inputBunkerPos">Бункер л/п</label>
      </div>
    </div>

    <!-- Наддув позиция -->
    <!-- Пока не используем -->
    <!-- <div class="col-12 col-md-4 mt-2 ps-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputNadduvPos"
          v-model="item.nadduvPos"
          @change="$emit('save-item')"
        >
          <option value="left">Слева</option>
          <option value="right">Справа</option>
        </select>
        <label for="inputNadduvPos">Наддув л/п</label>
      </div>
    </div> -->

    <!-- Стоимость новая -->
    <div v-if="user.access < 3" class="col-12 col-md-4 mt-2 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputPrice"
          v-model.number="item.price"
          @change="$emit('save-item')"
        />
        <label for="inputPrice">Стоимость тыс.</label>
      </div>
    </div>

    <!-- Стоимость -->
    <!-- <div class="col-12 col-md-4 mt-2 pe-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputPrice"
          v-model="item.price"
          @change="$emit('save-item')"
        >
          <option v-for="price in prices" :key="price" :value="price">
            {{ price }}
          </option>
        </select>
        <label for="inputPrice">Стоимость</label>
      </div>
    </div> -->

    <!-- Предоплата -->
    <div v-if="user.access < 3" class="col-12 col-md-4 mt-2 ps-md-1 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputPrePrice"
          v-model.number="item.prePrice"
          @change="setPrePrice"
        />
        <label for="inputPrePrice">Предоплата тыс.</label>
      </div>
    </div>

    <!-- Остаток -->
    <div v-if="user.access < 3" class="col-12 col-md-4 mt-2 ps-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputOstatok"
          v-model.number="item.ostPrice"
          disabled
        />
        <label for="inputOstatok">Остаток тыс.</label>
      </div>
    </div>

    <!-- Дата Заказа -->
    <div v-if="user.access < 3" class="col-12 col-md-4 mt-2 pe-md-1">
      <div class="form-floating">
        <input
          type="datetime-local"
          id="dateCreate"
          class="form-control form-control-sm"
          v-model="item.dateCreate"
          @change="setDate"
        />
        <label for="dateCreate">Дата заказа</label>
      </div>
    </div>

    <!-- Дедлайн -->
    <div v-if="user.access < 3" class="col-12 col-md-4 mt-2 ps-md-1 pe-md-1">
      <div class="form-floating">
        <input
          type="datetime-local"
          id="dateDue"
          class="form-control form-control-sm"
          v-model="item.dateDue"
          @change="$emit('save-item')"
        />
        <label for="dateDue">Дедлайн</label>
      </div>
    </div>

    <!-- Дата отгрузки -->
    <div v-if="user.access < 3" class="col-12 col-md-4 mt-2 ps-md-1">
      <div class="form-floating">
        <input
          type="datetime-local"
          id="dateFinish"
          class="form-control form-control-sm"
          v-model="item.dateFinish"
          @change="$emit('save-item')"
        />
        <label for="dateFinish">Дата отгрузки</label>
      </div>
    </div>

    <!-- Комментарий -->
    <div v-if="user.access < 3" class="col-12 col-md-8 mt-2 mb-md-3 pe-md-1">
      <div class="form-floating">
        <textarea
          class="form-control form-control-sm border-0 h-auto"
          id="inputDescription"
          rows="3"
          :disabled="user.access === 3"
          v-model.trim="item.description"
          @change="$emit('save-item')"
        ></textarea>
        <label for="inputDescription">Комментарий</label>
      </div>
    </div>

    <!-- Этап -->
    <div class="col-12 col-md-4 mt-2 mb-3 ps-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputStageId"
          :disabled="user.access === 3"
          v-model="item.stageId"
          @change="setStage"
        >
          <option
            v-for="stage in stageSorted"
            :key="stage.id"
            :value="stage.id"
          >
            {{ stage.title }}
          </option>
        </select>
        <label for="inputStageId">Этап</label>
      </div>
    </div>

    <!-- Кнопки управления -->
    <div class="col-12 d-flex justify-content-between mb-3">
      <button
        v-if="!item.inwork"
        class="btn btn-warning w-50 text-white"
        @click="setStatusInWork"
      >
        Взять в работу
      </button>
      <button
        v-if="item.inwork"
        class="btn btn-secondary w-50 text-white"
        @click="setStatusAbortWork"
      >
        Отменить работу
      </button>
      <button
        class="btn btn-success w-50 ms-2"
        data-bs-dismiss="modal"
        :disabled="!item.inwork"
        @click="setStatusFinishWork"
      >
        Завершить
      </button>
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'
import { getDueDate } from './../../helpers/getDueDate'
import { getFormateInputDate } from './../../helpers/getFormateInputDate'
import BtnOpenClient from './../buttons/BtnOpenClient.vue'

export default {
  components: {
    BtnOpenClient
  },
  props: {
    item: {
      type: Object,
      require: true
    },
    mod: String,
    user: Object
  },
  emits: ['save-item', 'show-modal'],
  mounted() {
    if (!this.item.dateDue) this.setDate()
  },
  computed: {
    clients() {
      return this.$store.getters.client
    },
    users() {
      return this.$store.getters.user
    },
    usersFilter() {
      return this.users.filter(item => item.stages && item.stages.length)
    },
    kotels() {
      return this.$store.getters.kotel
    },
    // stages() {
    //   return this.$store.getters.stage
    // },
    stageProduction() {
      return this.$store.getters.stageProduction
    },
    stageSorted() {
      return sortMethod(this.stageProduction, 'asc', 'position')
    },
    prices() {
      if (this.item.kotelId) {
        const kotel = this.kotels.find(item => item.id === this.item.kotelId)
        const prices = [kotel.price3, kotel.price4, kotel.price5]
        return prices
      }
      return [0]
    }
  },
  methods: {
    setStatusInWork() {
      this.item.inwork = true
      this.$emit('save-item')
    },
    setStatusAbortWork() {
      this.item.inwork = false
      this.$emit('save-item')
    },
    setStatusFinishWork() {
      this.item.inwork = false
      // Изменить глабальный статускарточки stageId
      this.setNextStage(this.item.stageId)
      // Назначить нового исполнителя?
      this.$emit('save-item')
    },
    setPrePrice() {
      this.item.ostPrice = this.item.price - this.item.prePrice
      this.$emit('save-item')
    },
    setPrice(kotelId) {
      const kotel = this.getKotel(kotelId)

      if (kotel.typek === 'П') {
        this.item.bunkerPos = ''
      }
      this.item.price = kotel.price
      this.$emit('save-item')
    },
    setDate() {
      this.item.dateDue = getDueDate(this.item.dateCreate)
      this.$emit('save-item')
    },

    setStage() {
      if (
        this.item.stageId ===
        this.stageProduction[this.stageProduction.length - 1].id
      ) {
        this.item.dateFinish = getFormateInputDate(new Date())
      }
      this.$emit('save-item')
    },

    setNextStage(stageId) {
      const stageIndex = this.stageProduction.findIndex(
        item => item.id === stageId
      )
      this.item.stageId = this.stageProduction[stageIndex + 1].id
      //this.$emit('save-item')
    },

    getClient(clientId) {
      const client = this.clients.find(item => item.id === clientId)
      return client
    },
    getKotel(kotelId) {
      const kotel = this.kotels.find(item => item.id === kotelId)
      return kotel
    }
  },
  watch: {
    item() {
      if (!this.item.dateDue) this.setDate()
    }
  }
}
</script>