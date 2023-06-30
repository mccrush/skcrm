<template>
  <div class="row">
    <div class="col-12 bg-white p-3">
      {{ $route.name }} - {{ $route.params.type }}
    </div>

    <div class="col-12 p-3">
      <ListTable v-if="listItems.length" :listItems="listItems" />
    </div>
  </div>
</template>

<script>
import ListTable from './../modules/list/ListTable.vue'

export default {
  components: {
    ListTable
  },
  computed: {
    listItems() {
      return this.$store.getters[this.$route.params.type]
    }
  }
}
</script>