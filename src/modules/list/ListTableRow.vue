<template>
  <tr>
    <td class="ps-3">
      <button class="btn btn-sm btn-light p-0 ps-2 pe-2">{{ city }}</button>
    </td>
    <td>{{ name }}</td>
    <td class="text-center">
      <button class="btn btn-sm btn-light p-0 ps-2 pe-2">{{ typek }}</button>
    </td>
    <td class="text-center">
      <button class="btn btn-sm btn-light p-0 ps-2 pe-2">{{ power }}</button>
    </td>
    <td class="text-center">{{ phone }}</td>
    <td class="text-center">
      <button class="btn btn-sm btn-light p-0 ps-2 pe-2">{{ sours }}</button>
    </td>
    <td class="text-center">{{ dateLastContact }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    city: String,
    name: String,
    typek: String,
    power: Number,
    phone: String,
    sours: String,
    dateLastContact: String
  }
}
</script>