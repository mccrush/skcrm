<template>
  <div class="list mt-3 ps-1 pe-1">
    <div
      v-for="item in items"
      :key="item.id"
      class="list-item cursor-pointer small rounded bg-white shadow-sm mt-2 p-2"
      :class="{ 'border border-danger': !item.userId }"
      data-bs-toggle="modal"
      data-bs-target="#modalWindow"
      @click="$emit('show-modal', { type: item.type, item, mod: 'edit' })"
    >
      <div class="d-flex justify-content-between">
        <span class="m-0"
          >№ <strong>{{ item.serialNumber || 0 }}</strong>
          <span
            v-if="
              ($route.params.type === 'production' &&
                stagePosition !== stageLength) ||
              ($route.params.type === 'order' && stagePosition !== 4)
            "
          >
            <span
              v-if="item.inwork"
              class="badge border text-success rounded-1 ms-2"
              >В работе</span
            >
            <span v-else class="badge border text-warning rounded-1 ms-2"
              >В очереди</span
            >
          </span>
          <!-- <span
            v-if="item.userId"
            class="badge text-secondary border border-secondary rounded-pill ms-1"
            >©</span
          > -->
        </span>
        <span
          >{{ getClient(item.clientId).phone.substr(0, 7) }}-{{
            getClient(item.clientId).phone.substr(7)
          }}</span
        >
      </div>

      <div>
        {{
          getKotel(item.kotelId).typek +
          '-' +
          getKotel(item.kotelId).power +
          ', ' +
          getKotel(item.kotelId).metall +
          ' мм, ' +
          getNavesy(item.petliPos) +
          ', ' +
          getBunker(item.bunkerPos)
        }}
      </div>
      <div>
        <strong>{{ getClient(item.clientId).city }}</strong>
        {{ ', ' + getClient(item.clientId).name + ' ' }}
      </div>
      <hr class="m-0 mt-1 mb-1" />
      <div class="d-flex justify-content-between">
        <span class="d-block text-end">{{
          getLocaleDateFromDateDigit(item.dateCreate)
        }}</span>
        <span>
          <span>{{ getLocaleDateFromDateDigit(item.dateDue) }} </span
          ><span
            title="- дней на производство / просрочено"
            :class="{
              'text-warning fw-bold':
                getCountLastDays(item.dateCreate, item.dateFinish) >= 28 &&
                !item.dateFinish,
              'text-danger fw-bold':
                getCountLastDays(item.dateCreate, item.dateFinish) > 35 &&
                !item.dateFinish
            }"
          >
            ({{ getCountLastDays(item.dateDue, item.dateFinish) }})</span
          ></span
        >
        <span class="d-block text-end" title="Всего дней выполнялся заказ"
          >{{ getLocaleDateFromDateDigit(item.dateFinish) }} ({{
            getCountLastDays(item.dateCreate, item.dateFinish)
          }})</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getCountLastDays } from './../../helpers/getCountLastDays'
import { getLocaleDateFromDateDigit } from './../../helpers/getDateFormat'

export default {
  props: {
    items: Array,
    user: Object,
    stagePosition: Number,
    stageLength: Number
  },
  emits: ['show-modal'],
  computed: {
    clients() {
      return this.$store.getters.client
    },
    kotels() {
      return this.$store.getters.kotel
    }
    // stages() {
    //   return this.$store.getters.stage
    // }
  },
  methods: {
    getCountLastDays,
    getLocaleDateFromDateDigit,
    getClient(clientId) {
      const client = this.clients.find(item => item.id === clientId)
      return client
    },
    getKotel(kotelId) {
      const kotel = this.kotels.find(item => item.id === kotelId)
      return kotel
    },
    getNavesy(petliPos) {
      if (petliPos === 'left') {
        return 'навесы левые'
      } else if (petliPos === 'right') {
        return 'навесы правые'
      }
      return ''
    },
    getBunker(bunkerPos) {
      if (bunkerPos === 'left') {
        return 'бункер слева'
      } else if (bunkerPos === 'right') {
        return 'бункер справа'
      } else if (bunkerPos === 'around') {
        return 'бункер с обеих'
      }
      return ''
    }
  }
}
</script>