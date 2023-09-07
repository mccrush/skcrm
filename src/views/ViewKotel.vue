<template>
  <div class="view">
    <TheNavbar :user="user" @show-modal="showModal">
      <template #count>
        <div class="small pt-1">{{ listItems.length }} шт.</div>
      </template>
      <template #filter>
        <FilterValues
          @clear-filter="clearFilter"
          :filterType="filterType"
          :filterValue="filterValue"
        />
      </template>
      <template #filterSelect>
        <KotelFilter
          :listItems="listItems"
          @set-filter-method="setFilterMethod"
        />
      </template>
      <template #search></template>
    </TheNavbar>

    <KotelTable
      :listItems="listItems"
      :sortUp="sortUp"
      :user="user"
      @edit-item="showModal"
      @set-sort-method="setSortMethod"
    />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import FilterValues from './../components/elements/FilterValues.vue'
import KotelFilter from './../modules/kotel/KotelFilter.vue'
import KotelTable from './../modules/kotel/KotelTable.vue'

export default {
  components: {
    TheNavbar,
    FilterValues,
    KotelFilter,
    KotelTable
  },
  props: {
    listItems: Array,
    filterType: String,
    filterValue: String,
    sortUp: String,
    user: Object
  },
  emits: ['show-modal', 'set-filter-method', 'clear-filter', 'set-sort-method'],
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    },
    setFilterMethod({ filterType, filterValue }) {
      this.$emit('set-filter-method', { filterType, filterValue })
    },
    clearFilter({ filterType, filterValue }) {
      this.$emit('clear-filter', { filterType, filterValue })
    },
    setSortMethod({ sortUp, sortBy }) {
      this.$emit('set-sort-method', { sortUp, sortBy })
    }
  }
}
</script>