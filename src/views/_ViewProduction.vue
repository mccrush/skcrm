<template>
  <div class="view">
    <TheNavbar @show-modal="showModal">
      <template #count>
        <div class="small pt-1">{{ listItems.length }} шт.</div>
      </template>
      <template #filter> </template>
      <template #filterSelect> </template>
      <template #search>
        <InputSearch v-model="searchValue" />
      </template>
    </TheNavbar>

    <ProductionKanban :listItems="listItems" @show-modal="showModal" />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import InputSearch from './../components/elements/InputSearch.vue'
import ProductionKanban from './../modules/production/ProductionKanban.vue'

export default {
  components: {
    TheNavbar,
    InputSearch,
    ProductionKanban
  },
  props: {
    listItems: Array
  },
  emits: [
    'set-search-method',
    'show-modal',
    'set-filter-method',
    'clear-filter'
  ],
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    // listItems() {
    //   return this.$store.getters.order
    // }
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
    }
  },
  watch: {
    searchValue() {
      this.$emit('set-search-method', { searchValue: this.searchValue })
    }
  }
}
</script>