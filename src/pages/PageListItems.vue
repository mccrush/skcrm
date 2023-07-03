<template>
  <div class="row">
    <div class="col-12 bg-white p-3">
      {{ $route.name }} - {{ $route.params.type }}
    </div>

    <div class="col-12 p-3">
      <ListTable
        v-if="listItems.length"
        :listItems="sortItems"
        :sortUp="sortUp"
        @show-modal="showModal"
        @set-filter-method="setFilterMethod"
        @set-sort-method="setSortMethod"
      />
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../helpers/sortMethod'
import ListTable from './../modules/list/ListTable.vue'

export default {
  components: {
    ListTable
  },
  emits: ['show-modal'],
  data() {
    return {
      filterType: '',
      filterValue: '',
      sortUp: 'desc',
      sortBy: 'dateCreate'
    }
  },
  computed: {
    listItems() {
      return this.$store.getters[this.$route.params.type]
    },
    filterItems() {
      if (this.filterType && this.filterValue)
        return this.listItems.filter(
          item => item[this.filterType] === this.filterValue
        )
      return this.listItems
    },
    sortItems() {
      return sortMethod(this.filterItems, this.sortUp, this.sortBy)

      // return this.listItems
    }
  },
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    },
    setFilterMethod({ filterType, filterValue }) {
      this.filterType = filterType
      this.filterValue = filterValue
    },
    setSortMethod({ sortUp, sortBy }) {
      this.sortUp = sortUp
      this.sortBy = sortBy
    }
  }
}
</script>