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