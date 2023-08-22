<template>
  <div class="view">
    <TheNavbar />

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
  }
}
</script>