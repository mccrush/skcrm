<template>
  <div class="list-card">
    <ListCardItem
      v-for="item in listItems"
      :key="item.id"
      :item="item"
      :city="item.city"
      :name="item.name"
      :typek="item.typek"
      :power="item.power"
      :phone="item.phone"
      :sours="item.sours"
      :dateLastContact="getLocaleDateFromDateDigit(item.dateCreate)"
      data-bs-toggle="modal"
      data-bs-target="#modalWindow"
      @click="editItem({ type: item.type, item })"
    />
  </div>
</template>

<script>
import { getLocaleDateFromDateDigit } from './../../helpers/getDateFormat'
import ListCardItem from './ListCardItem.vue'

export default {
  components: {
    ListCardItem
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  methods: {
    getLocaleDateFromDateDigit,
    editItem({ type, item }) {
      //console.log('type, item ', type, item)
      this.$emit('show-modal', { type, item, mod: 'edit' })
    },
    setFilterMethod({ filterType, filterValue }) {
      //console.log('filterType, filterValue', filterType, filterValue)
      this.$emit('set-filter-method', { filterType, filterValue })
    },
    setSortMethod(type) {
      const sortUp = this.sortUp === 'desc' ? 'asc' : 'desc'
      this.$emit('set-sort-method', { sortUp: sortUp, sortBy: type })
    }
  }
}
</script>