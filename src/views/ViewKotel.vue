<template>
  <div class="view">
    <KotelFilter :listItems="listItems" />
    <KotelTable :listItems="listItems" @edit-item="showModal" />
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
  },
  emits: ['show-modal'],
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    }
  }
}
</script>