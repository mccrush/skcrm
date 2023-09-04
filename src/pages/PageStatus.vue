<template>
  <div>
    <ViewStatus @set-search-method="setSearchMethod" />
  </div>
</template>

<script>
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
  methods: {
    setSearchMethod({ searchValue }) {
      this.searchValue = searchValue
    }
  }
}
</script>