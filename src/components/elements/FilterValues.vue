<template>
  <div v-if="filterType && filterValue" class="btn-group btn-group-sm">
    <button class="btn btn-light p-0 ps-2 pe-2">
      {{ filterValue }}
    </button>
    <button
      class="btn btn-light p-0 ps-2 pe-2"
      @click="$emit('clear-filter', { filterType: '', filterValue: '' })"
    >
      x
    </button>
  </div>
</template>

<script>
export default {
  props: {
    filterType: String,
    filterValue: String
  },
  emits: ['clear-filter']
}
</script>