<template>
  <div class="row">
    <div class="col-12 bg-white p-3">
      <div class="row">
        <div class="col-1 d-md-none">
          <button
            class="btn btn-sm btn-light ps-3 pe-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            ≡
          </button>
        </div>
        <div class="col-3">{{ $route.name }} - {{ $route.params.type }}</div>
        <div class="col-4">
          <div v-if="filterType && filterValue" class="btn-group btn-group-sm">
            <button class="btn btn-light p-0 ps-2 pe-2">
              {{ filterType }} - {{ filterValue }}
            </button>
            <button class="btn btn-light p-0 ps-2 pe-2" @click="clearFilter">
              x
            </button>
          </div>
        </div>
        <div class="col-4">
          <div class="input-group">
            <input
              type="text"
              v-model="filterValue"
              class="form-control form-control-sm"
            />
            <button
              class="btn btn-light p-0 ps-2 pe-2"
              @click="filterValue = ''"
            >
              x
            </button>
          </div>
        </div>
      </div>
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
      if (this.filterType && this.filterValue) {
        return this.listItems.filter(
          item => item[this.filterType] === this.filterValue
        )
      } else {
        return this.listItems
      }
    },
    sortItems() {
      return sortMethod(this.filterItems, this.sortUp, this.sortBy)
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