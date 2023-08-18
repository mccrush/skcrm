<template>
  <div class="view">
    <!-- <KotelFilter :listItems="listItems" /> -->
    <ClientTable :listItems="listItems" />
  </div>
</template>

<script>
//import KotelFilter from './../modules/kotel/KotelFilter.vue'
import ClientTable from './../modules/client/ClientTable.vue'

export default {
  components: {
    ClientTable
  },
  props: {
    listItems: Array
  }
}
</script>