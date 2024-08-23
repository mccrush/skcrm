<template>
  <div class="view">
    <TheNavbar :user="user" @show-modal="showModal">
      <template #count>
        <div v-if="user && user.access <= 2" class="small pt-1">
          {{ listItems.length }} шт.
        </div>
      </template>
      <template #filter>
        <ChangeView :viewMod="viewMod" @set-view-mod="setViewMod" />
      </template>
      <template #filterSelect> </template>
      <template #search>
        <InputSearch v-if="user" v-model="searchValue" />
      </template>
    </TheNavbar>

    <OrderKanban
      v-if="viewMod === 'kanban'"
      :listItems="listItems"
      :user="user"
      @show-modal="showModal"
      @set-sort-method="setSortMethod"
    />
    <OrderTable
      v-if="viewMod === 'table'"
      :listItems="listItems"
      :user="user"
      @show-modal="showModal"
      @set-sort-method="setSortMethod"
    />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import ChangeView from './../components/elements/ChangeView.vue'
import InputSearch from './../components/elements/InputSearch.vue'
import OrderKanban from './../modules/order/OrderKanban.vue'
import OrderTable from './../modules/order_table/OrderTable.vue'

export default {
  components: {
    TheNavbar,
    ChangeView,
    InputSearch,
    OrderKanban,
    OrderTable
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
      searchValue: '',
      viewMod: 'table'
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
    },
    setViewMod(viewMod) {
      this.viewMod = viewMod
    }
  },
  watch: {
    searchValue() {
      this.$emit('set-search-method', { searchValue: this.searchValue })
    }
  }
}
</script>