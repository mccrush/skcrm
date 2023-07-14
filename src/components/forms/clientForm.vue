<template>
  <div class="row">
    <!-- город клиента -->
    <div class="col-12 col-md-4 pe-md-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputCity"
          v-model.trim="item.city"
          @change="$emit('save-item')"
        />
        <label for="inputCity">Город</label>
      </div>
    </div>

    <!-- имя клиента -->
    <div class="col-12 col-md-8 mt-2 mt-md-0 ps-md-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputName"
          v-model.trim="item.name"
          @change="$emit('save-item')"
        />
        <label for="inputName">Имя</label>
      </div>
    </div>

    <!-- адрес -->
    <div class="col-12 mt-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputAdres"
          v-model.trim="item.adres"
          @change="$emit('save-item')"
        />
        <label for="inputAdres">Адрес</label>
      </div>
    </div>

    <!-- телефон клиента -->
    <div class="col-12 col-md-4 mt-2 pe-md-1">
      <div class="input-group">
        <div class="form-floating">
          <input
            type="text"
            class="form-control form-control-sm"
            id="inputPhone"
            v-model.trim="item.phone"
            @change="$emit('save-item')"
          />
          <label for="inputPhone">Телефон</label>
        </div>
        <a
          class="btn btn-white d-md-none ps-3 pe-3 pt-3"
          :href="'tel:+' + item.phone"
          >↗</a
        >
      </div>
    </div>

    <!-- Дата общения -->
    <div class="col-12 col-md-4 mt-2 ps-md-2 pe-md-1">
      <div class="form-floating">
        <input
          type="datetime-local"
          id="dateCreate"
          class="form-control form-control-sm"
          v-model="item.dateCreate"
          @change="$emit('save-item')"
        />
        <label for="dateCreate">Дата общения</label>
      </div>
    </div>

    <!-- Заказы -->
    <div class="col-4 mt-2 ps-md-1">
      <div v-if="clientOrders.length" class="dropdown">
        <button
          class="btn btn-light dropdown-toggle w-100"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Заказы
        </button>
        <ul class="dropdown-menu border-0">
          <li v-for="order in clientOrders" :key="order.id">
            <button
              class="dropdown-item"
              @click="
                $emit('show-modal', {
                  type: 'order',
                  item: order,
                  mod: 'edit'
                })
              "
            >
              {{ getLocaleDateFromDateDigit(order.dateCreate) }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- Тип котла -->
    <div class="col-4 mt-2 pe-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputKotelType"
          v-model="item.typek"
          @change="$emit('save-item')"
        >
          <option v-for="typek in dataKotelType" :key="typek" :value="typek">
            {{ typek }}
          </option>
        </select>
        <label for="inputKotelType">Тип котла</label>
      </div>
    </div>

    <!-- Мощность котла -->
    <div class="col-4 mt-2 ps-1 pe-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputPower"
          v-model="item.power"
          @change="$emit('save-item')"
        >
          <option v-for="power in dataPower" :key="power" :value="power">
            {{ power }}
          </option>
        </select>
        <label for="inputPower">Мощность</label>
      </div>
    </div>

    <!-- источник контакта -->
    <div class="col-4 mt-2 ps-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputSours"
          v-model="item.sours"
          @change="$emit('save-item')"
        >
          <option v-for="sours in dataSourses" :key="sours" :value="sours">
            {{ sours }}
          </option>
        </select>
        <label for="inputSours">Источник</label>
      </div>
    </div>

    <!-- Комментарий -->
    <div class="col-12 mt-2">
      <div class="form-floating">
        <textarea
          class="form-control form-control-sm border-0 h-auto"
          id="inputDescription"
          rows="4"
          v-model.trim="item.description"
          @change="$emit('save-item')"
        ></textarea>
        <label for="inputDescription">Комментарий</label>
      </div>
    </div>
  </div>
</template>

<script>
import {
  dataSourses,
  dataKotelType,
  dataPower
} from './../../data/dataForClient'
import { getLocaleDateFromDateDigit } from './../../helpers/getDateFormat'

export default {
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  emits: ['save-item', 'show-modal'],
  data() {
    return {
      dataSourses,
      dataKotelType,
      dataPower
    }
  },
  computed: {
    orders() {
      return this.$store.getters.order
    },
    clientOrders() {
      return this.orders.filter(item => item.clientId === this.item.id)
    }
  },
  methods: {
    getLocaleDateFromDateDigit
  }
}
</script>