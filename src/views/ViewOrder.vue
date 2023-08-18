<template>
  <div class="view">
    <!-- <KotelFilter :listItems="listItems" /> -->
    <OrderKanban :listItems="listItems" />
  </div>
</template>

<script>
//import KotelFilter from './../modules/kotel/KotelFilter.vue'
import OrderKanban from './../modules/order/OrderKanban.vue'

export default {
  components: {
    OrderKanban
  },
  props: {
    listItems: Array
  }
}
</script>