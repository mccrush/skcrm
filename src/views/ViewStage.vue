<template>
  <div class="view">
    <!-- <KotelFilter :listItems="listItems" /> -->
    <StageTable :listItems="listItems" />
  </div>
</template>

<script>
//import KotelFilter from './../modules/kotel/KotelFilter.vue'
import StageTable from './../modules/stage/StageTable.vue'

export default {
  components: {
    StageTable
  },
  props: {
    listItems: Array
  }
}
</script>