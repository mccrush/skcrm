<template>
  <div class="div">
    <div class="view">
      <TheNavbar>
        <template #count></template>
        <template #filter></template>
        <template #filterSelect></template>
        <template #search></template>
      </TheNavbar>
    </div>
    <div>
      <IndexMain />
    </div>
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import IndexMain from './../modules/index/IndexMain.vue'

export default {
  components: {
    TheNavbar,
    IndexMain
  }
}
</script>