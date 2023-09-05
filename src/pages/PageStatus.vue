<template>
  <div>
    <ViewStatus :listItems="searchItems" @set-search-method="setSearchMethod" />
  </div>
</template>

<script>
import { searchMethod } from './../helpers/searchMethod'

import ViewStatus from './../views/ViewStatus.vue'

export default {
  components: {
    ViewStatus
  },
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    listItems() {
      return this.$store.getters.order
    },
    searchItems() {
      //console.log('pre Search items = ', this.filterItems)
      return searchMethod(
        this.listItems,
        this.$route.params.type,
        this.searchValue
      )
    }
  },
  methods: {
    setSearchMethod({ searchValue }) {
      this.searchValue = searchValue
    }
  }
}
</script>