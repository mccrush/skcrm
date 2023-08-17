<template>
  <div>
    <component
      v-if="listItems.length"
      :is="viewComponent"
      :listItems="sortItems"
      :sortUp="sortUp"
      @set-filter-method="setFilterMethod"
      @set-sort-method="setSortMethod"
    />
  </div>
</template>

<script>
import ViewKotel from './../views/ViewKotel.vue'

export default {
  components: {
    ViewKotel
  },
  computed: {
    viewComponent() {
      const component =
        'View' +
        this.$route.params.type.substr(0, 1).toUpperCase() +
        this.$route.params.type.slice(1)
      //console.log('component View = ', component)
      return component
    },
    listItems() {
      return this.$store.getters[this.$route.params.type]
    }
  }
}
</script>