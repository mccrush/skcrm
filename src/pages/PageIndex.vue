<template>
  <div>
    <ViewIndex :user="user" />
  </div>
</template>

<script>
import ViewIndex from './../views/ViewIndex.vue'

export default {
  components: {
    ViewIndex
  }
}
</script>