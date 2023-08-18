<template>
  <div class="view">
    <TheNavbar>
      <OrderFilter />
    </TheNavbar>

    <OrderKanban :listItems="listItems" />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import OrderFilter from './../modules/order/OrderFilter.vue'
import OrderKanban from './../modules/order/OrderKanban.vue'

export default {
  components: {
    TheNavbar,
    OrderFilter,
    OrderKanban
  },
  props: {
    listItems: Array
  }
}
</script>