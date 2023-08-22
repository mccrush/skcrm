<template>
  <div class="row p-3">
    <div class="col-12 col-md-3">
      <IndexCard1 type="order" />
    </div>
    <div class="col-12 col-md-3 mt-3 mt-md-0">
      <IndexCard1 type="client" />
    </div>
    <div class="col-12 col-md-3 mt-3 mt-md-0">
      <IndexCard1 type="kotel" />
    </div>
    <div class="col-12 col-md-3 mt-3 mt-md-0">
      <IndexCard1 type="user" />
    </div>
  </div>
</template>

<script>
import IndexCard1 from './IndexCard1.vue'

export default {
  components: {
    IndexCard1
  }
}
</script>
