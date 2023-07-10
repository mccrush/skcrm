<template>
  <div class="list mt-3">
    <div
      v-for="item in items"
      :key="item.id"
      class="list-item cursor-pointer rounded bg-white shadow-sm mt-2 p-2"
      data-bs-toggle="modal"
      data-bs-target="#modalWindow"
      @click="$emit('show-modal', { type: item.type, item, mod: 'edit' })"
    >
      {{
        getClient(item.clientId) +
        ' - ' +
        getKotel(item.kotelId).typek +
        ' - ' +
        getKotel(item.kotelId).power
      }}
    </div>
  </div>
</template>

<script>
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
    getClient(clientId) {
      const client = this.clients.find(item => item.id === clientId)
      return client.city
    },
    getKotel(kotelId) {
      const kotel = this.kotels.find(item => item.id === kotelId)
      return kotel
    }
  }
}
</script>