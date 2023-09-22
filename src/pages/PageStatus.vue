<template>
  <div>
    <ViewStatus
      :listItems="searchItems"
      :user="user"
      @set-search-method="setSearchMethod"
    />
  </div>
</template>

<script>
import { searchMethod } from './../helpers/searchMethod'

import ViewStatus from './../views/ViewStatus.vue'

export default {
  components: {
    ViewStatus
  },
  props: {
    user: Object
  },
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    clients() {
      return this.$store.getters.client
    },
    listItems() {
      return this.$store.getters.order
    },
    searchItems() {
      if (this.searchValue) {
        // Сначала находим массив клиентов по полному совпадению
        const clientId =
          searchMethod(this.clients, 'clientStatus', this.searchValue) || []

        if (clientId.length) {
          return searchMethod(this.listItems, 'status', clientId[0].id)
        }
      }
      return []
    }
  },
  methods: {
    // getClient(clientId) {
    //   const client = this.clients.find(item => item.id === clientId)
    //   return client
    // },
    setSearchMethod({ searchValue }) {
      this.searchValue = searchValue
    }
  }
}
</script>