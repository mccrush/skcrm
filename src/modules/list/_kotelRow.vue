<template>
  <tr>
    <td class="text-center ps-2">
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
    <td class="text-center">{{ power }}</td>
    <td class="text-center">{{ square }}</td>
    <td class="text-center">{{ size }}</td>
    <td class="text-center">{{ bunker }}</td>
    <td class="text-center">{{ weight }}</td>
    <td class="text-center">{{ automation }}</td>
    <td class="text-center">{{ price3 + ', ' + price4 + ', ' + price5 }}</td>
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
    typek: String,
    power: Number,
    square: Number,
    size: String,
    bunker: Number,
    weight: Number,
    automation: String,
    price3: Number,
    price4: Number,
    price5: Number
  },
  emits: ['set-filter-method', 'edit-item']
}
</script>