<template>
  <div class="row">
    <div class="col-12">
      <TheNavbar @show-modal="showModal">
        <!-- <div class="col-10 col-md-3">
          {{ $route.name }} - {{ $route.params.type }}
        </div> -->
        <div class="col-12 col-md-6 mt-2 mt-md-0">
          <div v-if="filterType && filterValue" class="btn-group btn-group-sm">
            <button class="btn btn-light p-0 ps-2 pe-2">
              {{ filterValue }}
            </button>
            <button class="btn btn-light p-0 ps-2 pe-2" @click="clearFilter">
              x
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6 mt-2 mt-md-0">
          <div class="input-group">
            <input
              type="text"
              v-model="searchValue"
              class="form-control form-control-sm"
            />
            <button
              class="btn btn-light p-0 ps-2 pe-2"
              @click="searchValue = ''"
            >
              x
            </button>
          </div>
        </div>
      </TheNavbar>
    </div>

    <div class="list-container col-12 p-3 overflow-y-scroll">
      <ListCard
        class="d-md-none"
        v-if="listItems.length"
        :listItems="sortItems"
        :sortUp="sortUp"
        @show-modal="showModal"
        @set-filter-method="setFilterMethod"
        @set-sort-method="setSortMethod"
      />
      <ListTable
        class="d-none d-md-block"
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

import TheNavbar from './../components/interface/TheNavbar.vue'
import ListCard from './../modules/list/ListCard.vue'
import ListTable from './../modules/list/ListTable.vue'

export default {
  components: {
    TheNavbar,
    ListCard,
    ListTable
  },
  emits: ['show-modal'],
  data() {
    return {
      filterType: '',
      filterValue: '',
      searchValue: '',
      sortUp: 'desc',
      sortBy: 'dateCreate'
    }
  },
  computed: {
    listItems() {
      return this.$store.getters[this.$route.params.type]
    },
    filterItems() {
      if (this.filterType && this.filterValue) {
        return this.listItems.filter(
          item => item[this.filterType] === this.filterValue
        )
      } else {
        return this.listItems
      }
    },
    searchItems() {
      return this.filterItems.filter(
        item =>
          item.city.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          item.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
          item.phone.toLowerCase().includes(this.searchValue.toLowerCase())
      )
    },
    sortItems() {
      return sortMethod(this.searchItems, this.sortUp, this.sortBy)
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
    clearFilter() {
      this.filterType = ''
      this.filterValue = ''
    },
    setSortMethod({ sortUp, sortBy }) {
      this.sortUp = sortUp
      this.sortBy = sortBy
    }
  }
}
</script>

<style scoped>
.list-container {
  height: calc(100vh - 64px);
}
</style>