<template>
  <div class="list mt-3 ps-1 pe-2">
    <div
      v-for="item in items"
      :key="item.id"
      class="list-item cursor-pointer small rounded bg-white shadow-sm mt-2 p-2"
      data-bs-toggle="modal"
      data-bs-target="#modalWindow"
      @click="$emit('show-modal', { type: item.type, item, mod: 'edit' })"
    >
      <span>№ {{ getClient(item.clientId).phone.substr(0, 7) }}-</span>
      <strong>{{ getClient(item.clientId).phone.substr(7) }}</strong
      ><br />
      <span>
        {{
          getClient(item.clientId).city +
          ' ' +
          getKotel(item.kotelId).typek +
          '-' +
          getKotel(item.kotelId).power
        }}</span
      >
      <hr class="m-0 mt-1 mb-1" />
      <div class="d-flex justify-content-between">
        <span class="d-block text-end">{{
          getLocaleDateFromDateDigit(item.dateCreate)
        }}</span>
        <span class="d-block fw-bold text-end">{{
          getLocaleDateFromDateDigit(item.dateFinish)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getLocaleDateFromDateDigit } from './../../helpers/getDateFormat'

export default {
  props: {
    items: Array
  },
  emits: ['show-modal'],
  computed: {
    clients() {
      return this.$store.getters.client
    },
    kotels() {
      return this.$store.getters.kotel
    },
    stages() {
      return this.$store.getters.stage
    }
  },
  methods: {
    getLocaleDateFromDateDigit,
    getClient(clientId) {
      const client = this.clients.find(item => item.id === clientId)
      return client
    },
    getKotel(kotelId) {
      const kotel = this.kotels.find(item => item.id === kotelId)
      return kotel
    }
  }
}
</script>