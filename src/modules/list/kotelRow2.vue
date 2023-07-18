<template>
  <div class="row">
    <kotelForm :item="item" />
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  emits: ['set-filter-method', 'edit-item']
}
</script>