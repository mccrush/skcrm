<template>
  <div class="view">
    <TheNavbar @show-modal="showModal" />

    <StageTable :listItems="listItemsSorted" />
  </div>
</template>

<script>
import { sortMethod } from './../helpers/sortMethod'

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
  computed: {
    listItemsSorted() {
      return sortMethod(this.listItems, 'asc', 'position')
    }
  },
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    }
  }
}
</script>