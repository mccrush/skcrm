<template>
  <div class="view">
    <TheNavbar />

    <IndexMain />
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