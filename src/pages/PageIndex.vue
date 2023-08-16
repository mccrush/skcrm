<template>
  <div class="row">
    <div class="col-12">
      <TheNavbar />
    </div>
    <div class="col-12 p-3">
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