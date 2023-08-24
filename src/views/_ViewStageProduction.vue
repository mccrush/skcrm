<template>
  <div>
    <ViewStage :listItems="listItems" @show-modal="showModal" />
  </div>
</template>

<script>
import ViewStage from './ViewStage.vue'

export default {
  components: {
    ViewStage
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