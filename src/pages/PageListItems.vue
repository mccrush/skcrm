<template>
  <div class="row">
    <div class="col-12 bg-white p-3">List</div>

    <div class="col-12 p-3">
      <div v-if="listItems.length" class="list-group">
        <a
          v-for="item in listItems"
          :key="item.id"
          href="#"
          class="list-group-item list-group-item-action bg-white border-0"
          >{{
            item.city +
            ' - ' +
            item.name +
            ' - ' +
            item.typek +
            ' - ' +
            item.power +
            ' - ' +
            getLocaleDateFromDateDigit(item.dateCreate)
          }}</a
        >
      </div>
    </div>

    <div class="col-12">
      {{ $route.name }} -
      {{ $route.params.type }}
    </div>
  </div>
</template>

<script>
import { getLocaleDateFromDateDigit } from './../helpers/getDateFormat'

export default {
  computed: {
    listItems() {
      return this.$store.getters[this.$route.params.type]
    }
  },
  methods: {
    getLocaleDateFromDateDigit
  }
}
</script>