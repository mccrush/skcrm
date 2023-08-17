<template>
  <div class="view">
    <KotelFilter :listItems="listItems" />
    <KotelTable :listItems="listItems" />
  </div>
</template>

<script>
import KotelFilter from './../modules/kotel/KotelFilter.vue'
import KotelTable from './../modules/kotel/KotelTable.vue'

export default {
  components: {
    KotelFilter,
    KotelTable
  },
  props: {
    listItems: Array
  }
}
</script>