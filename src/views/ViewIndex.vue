<template>
  <div class="view">
    <TheNavbar :user="user" />

    <IndexMain :user="user" />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import IndexMain from './../modules/index/IndexMain.vue'

export default {
  components: {
    TheNavbar,
    IndexMain
  },
  props: {
    user: Object
  }
}
</script>