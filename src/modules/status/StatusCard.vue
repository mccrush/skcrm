<template>
  <div class="bg-white rounded small lh-sm p-2 mt-2">
    <div class="d-flex justify-content-between">
      <span class="m-0"
        >№ <strong>{{ item.serialNumber || 0 }}</strong>
      </span>
      <span
        >{{ getClient(item.clientId).phone.substr(0, 7) }}-{{
          getClient(item.clientId).phone.substr(7)
        }}</span
      >
    </div>
    <span>
      {{
        getClient(item.clientId).city +
        ' ' +
        getKotel(item.kotelId).typek +
        '-' +
        getKotel(item.kotelId).power +
        ', ' +
        getClient(item.clientId).name
      }}</span
    >
    <hr class="m-0 mt-1 mb-1" />
    <span class="d-block small"
      >от {{ getLocaleDateFromDateDigit(item.dateCreate) }}</span
    >
  </div>
</template>

<script>
import { getLocaleDateFromDateDigit } from './../../helpers/getDateFormat'
export default {
  props: {
    item: Object
  },
  computed: {
    clients() {
      return this.$store.getters.client
    },
    kotels() {
      return this.$store.getters.kotel
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