<template>
  <div class="view">
    <TheNavbar>
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
      <template #filterSelect></template>
      <template #search>
        <InputSearch v-model="searchValue" />
      </template>
    </TheNavbar>

    <ClientTable
      :listItems="listItems"
      :sortUp="sortUp"
      @show-modal="showModal"
      @set-filter-method="setFilterMethod"
      @set-sort-method="setSortMethod"
    />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import FilterValues from './../components/elements/FilterValues.vue'
import InputSearch from './../components/elements/InputSearch.vue'
// import ClientFilter from './../modules/client/ClientFilter.vue'
import ClientTable from './../modules/client/ClientTable.vue'

export default {
  components: {
    TheNavbar,
    FilterValues,
    InputSearch,
    ClientTable
  },
  props: {
    listItems: Array,
    filterType: String,
    filterValue: String,
    sortUp: String
  },
  emits: [
    'set-search-method',
    'show-modal',
    'set-filter-method',
    'clear-filter',
    'set-sort-method'
  ],
  data() {
    return {
      searchValue: ''
    }
  },
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
  },
  watch: {
    searchValue() {
      this.$emit('set-search-method', { searchValue: this.searchValue })
    }
  }
}
</script>