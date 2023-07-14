<template>
  <tr>
    <td class="ps-2">
      <button
        class="btn btn-sm btn-light p-0 ps-2 pe-2"
        @click="
          $emit('set-filter-method', {
            filterType: 'city',
            filterValue: city
          })
        "
      >
        {{ city }}
      </button>
    </td>
    <td class="lh-1">{{ name }}</td>
    <td class="text-center">
      <button
        class="btn btn-sm btn-light p-0 ps-2 pe-2"
        @click="
          $emit('set-filter-method', {
            filterType: 'typek',
            filterValue: typek
          })
        "
      >
        {{ typek }}
      </button>
    </td>
    <td class="text-center">
      <button
        class="btn btn-sm btn-light p-0 ps-2 pe-2"
        @click="
          $emit('set-filter-method', {
            filterType: 'power',
            filterValue: power
          })
        "
      >
        {{ power }}
      </button>
    </td>
    <td class="text-center">{{ phone }}</td>
    <td class="text-center">
      <button
        class="btn btn-sm btn-light p-0 ps-2 pe-2"
        @click="
          $emit('set-filter-method', {
            filterType: 'sours',
            filterValue: sours
          })
        "
      >
        {{ sours }}
      </button>
    </td>
    <td class="text-center">{{ dateLastContact }}</td>
    <td class="text-center">
      <BtnCheckOrder
        v-if="order"
        class="btn-sm btn-light text-success p-0 ps-1 pe-1"
        data-bs-toggle="modal"
        data-bs-target="#modalWindow"
        @click="$emit('edit-item', { type: 'order', item: order })"
      />
    </td>
    <td class="text-center">
      <button
        class="btn btn-sm btn-light p-0 ps-2 pe-2"
        data-bs-toggle="modal"
        data-bs-target="#modalWindow"
        @click="$emit('edit-item', { type: item.type, item })"
      >
        Ed
      </button>
    </td>
  </tr>
</template>

<script>
import BtnCheckOrder from './../../components/buttons/BtnCheckOrder.vue'

export default {
  components: {
    BtnCheckOrder
  },
  props: {
    item: Object,
    city: String,
    name: String,
    typek: String,
    power: Number,
    phone: String,
    sours: String,
    order: Object,
    dateLastContact: String
  },
  emits: ['edit-item', 'set-filter-method']
}
</script>