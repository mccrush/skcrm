<template>
  <div class="card z-1 bg-white rounded mb-2 p-3">
    <div class="city fw-bold">{{ city }}</div>
    <div class="name">{{ name }}</div>
    <div class="type-power-phone d-flex justify-content-between">
      <span> {{ typek + '  ' + power }}</span>
      <span
        >{{ phone.substr(0, 10) }}<strong>{{ phone.substr(10) }}</strong></span
      >
    </div>
    <div class="sours-date d-flex justify-content-between">
      <span>{{ sours }}</span>
      <span>{{ dateLastContact }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    city: String,
    name: String,
    typek: String,
    power: Number,
    phone: String,
    sours: String,
    dateLastContact: String
  },
  emits: ['edit-item', 'set-filter-method']
}
</script>