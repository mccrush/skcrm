<template>
  <div class="list mt-3">
    <div
      v-for="item in items"
      :key="item.id"
      class="list-item rounded bg-white shadow-sm mt-2 p-2"
    >
      {{ item.id }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>