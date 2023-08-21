<template>
  <div class="view">
    <TheNavbar>
      <!-- <template #filter>FF</template>
      <template #filterSelect><ClientFilter /></template> -->
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
import InputSearch from './../components/elements/InputSearch.vue'
import ClientFilter from './../modules/client/ClientFilter.vue'
import ClientTable from './../modules/client/ClientTable.vue'

export default {
  components: {
    TheNavbar,
    ClientFilter,
    InputSearch,
    ClientTable
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: [
    'set-search-method',
    'show-modal',
    'set-filter-method',
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