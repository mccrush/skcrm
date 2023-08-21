<template>
  <div class="view">
    <TheNavbar>
      <template #count>
        <div class="small pt-1">{{ listItems.length }} шт.</div>
      </template>
      <template #filter> </template>
      <template #filterSelect> </template>
      <template #search></template>
    </TheNavbar>

    <OrderKanban :listItems="listItems" @show-modal="showModal" />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
// import OrderFilter from './../modules/order/OrderFilter.vue'
import OrderKanban from './../modules/order/OrderKanban.vue'

export default {
  components: {
    TheNavbar,
    OrderKanban
  },
  props: {
    listItems: Array
  },
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    }
  }
}
</script>