<template>
  <div class="view">
    <TheNavbar @show-modal="showModal" />

    <StageTable :listItems="listItems" />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import StageTable from './../modules/stage/StageTable.vue'

export default {
  components: {
    TheNavbar,
    StageTable
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