<template>
  <div class="row">
    <!-- Клиент -->
    <div class="col-12 col-md-6 pe-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputClientId"
          v-model="item.clientId"
          @change="$emit('save-item')"
        >
          <option v-for="client in clients" :key="client.id" :value="client.id">
            {{ client.city + ' - ' + client.name }}
          </option>
        </select>
        <label for="inputClientId">Клиент</label>
      </div>
    </div>

    <!-- Котел -->
    <div class="col-12 col-md-6 mt-2 mt-md-0 ps-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputKotelId"
          v-model="item.kotelId"
          @change="$emit('save-item')"
        >
          <option v-for="kotel in kotels" :key="kotel.id" :value="kotel.id">
            {{ kotel.typek + ' - ' + kotel.power + ' - ' + kotel.square }}
          </option>
        </select>
        <label for="inputKotelId">Котел</label>
      </div>
    </div>

    <!-- Стоимость -->
    <div class="col-12 col-md-4 mt-2 pe-md-1">
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
    </div>

    <!-- Предоплата -->
    <div class="col-12 col-md-4 mt-2 ps-md-1 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputPrePrice"
          v-model.number="item.prePrice"
          @change="$emit('save-item')"
        />
        <label for="inputPrePrice">Предоплата</label>
      </div>
    </div>

    <!-- Остаток -->
    <div class="col-12 col-md-4 mt-2 ps-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputOstatok"
          :value="item.price - item.prePrice"
        />
        <label for="inputOstatok">Остаток</label>
      </div>
    </div>

    <!-- Дата Заказа -->
    <div class="col-12 col-md-4 mt-2 pe-md-1">
      <div class="form-floating">
        <input
          type="datetime-local"
          id="dateCreate"
          class="form-control form-control-sm"
          v-model="item.dateCreate"
          @change="$emit('save-item')"
        />
        <label for="dateCreate">Дата заказа</label>
      </div>
    </div>

    <!-- Срок отправки -->
    <div class="col-12 col-md-4 mt-2 ps-md-1 pe-md-1">
      <div class="form-floating">
        <input
          type="datetime-local"
          id="dateFinish"
          class="form-control form-control-sm"
          v-model="item.dateFinish"
          @change="$emit('save-item')"
        />
        <label for="dateFinish">Срок отправки</label>
      </div>
    </div>

    <!-- Этап -->
    <div class="col-12 col-md-4 mt-2 ps-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputStageId"
          v-model="item.stageId"
          @change="$emit('save-item')"
        >
          <option v-for="stage in stages" :key="stage.id" :value="stage.id">
            {{ stage.title }}
          </option>
        </select>
        <label for="inputStageId">Этап</label>
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
export default {
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  emits: ['save-item'],
  computed: {
    clients() {
      return this.$store.getters.client
    },
    kotels() {
      return this.$store.getters.kotel
    },
    stages() {
      return this.$store.getters.stage
    },
    prices() {
      if (this.item.kotelId) {
        const kotel = this.kotels.find(item => item.id === this.item.kotelId)
        const prices = [kotel.price3, kotel.price4, kotel.price5]
        return prices
      }
      return [0]
    }
  }
}
</script>