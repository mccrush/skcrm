<template>
  <div class="view">
    <TheNavbar :user="user" @show-modal="showModal">
      <template #count>
        <div v-if="user && user.access <= 2" class="small pt-1">
          {{ listItems.length }} шт.
        </div>
      </template>
      <template #filter> </template>
      <template #filterSelect> </template>
      <template #search>
        <InputSearch v-model="searchValue" />
      </template>
    </TheNavbar>

    <OrderKanban
      :listItems="listItems"
      :user="user"
      @show-modal="showModal"
      @set-sort-method="setSortMethod"
    />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import InputSearch from './../components/elements/InputSearch.vue'
import OrderKanban from './../modules/order/OrderKanban.vue'

export default {
  components: {
    TheNavbar,
    InputSearch,
    OrderKanban
  },
  props: {
    listItems: Array,
    user: Object
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