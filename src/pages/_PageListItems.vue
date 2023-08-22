<template>
  <div class="row">
    <div class="col-12">
      <TheNavbar @show-modal="showModal">
        <!-- <div class="col-10 col-md-3">
          {{ $route.name }} - {{ $route.params.type }}
        </div> -->
        <div class="col-12 col-md-6 col-xl-8 col-xxl-9 mt-2 mt-md-0">
          <div v-if="filterType && filterValue" class="btn-group btn-group-sm">
            <button class="btn btn-light p-0 ps-2 pe-2">
              {{ filterValue }}
            </button>
            <button class="btn btn-light p-0 ps-2 pe-2" @click="clearFilter">
              x
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 col-xxl-3 mt-2 mt-md-0">
          <div class="input-group">
            <input
              type="text"
              id="inputSearchList"
              v-model="searchValue"
              class="form-control form-control-sm"
            />
            <button
              class="btn btn-light p-0 ps-3 pe-3"
              @click="searchValue = ''"
            >
              x
            </button>
          </div>
        </div>
      </TheNavbar>
    </div>

    <div class="list-container col-12 p-0 pt-2 p-md-3 overflow-y-auto">
      <component
        v-if="listItems.length"
        :is="myList"
        :listItems="sortItems"
        :sortUp="sortUp"
        @show-modal="showModal"
        @set-filter-method="setFilterMethod"
        @set-sort-method="setSortMethod"
      />
      <!-- <ListCard
        class="d-md-none"
        v-if="listItems.length"
        :listItems="sortItems"
        :sortUp="sortUp"
        @show-modal="showModal"
        @set-filter-method="setFilterMethod"
        @set-sort-method="setSortMethod"
      /> -->
      <!-- <ListTable
        class="d-none d-md-block"
        v-if="listItems.length"
        :listItems="sortItems"
        :sortUp="sortUp"
        @show-modal="showModal"
        @set-filter-method="setFilterMethod"
        @set-sort-method="setSortMethod"
      /> -->
    </div>
  </div>
</template>

<script>
import { searchMethod } from './../helpers/searchMethod'
import { sortMethod } from './../helpers/sortMethod'

import TheNavbar from './../components/interface/TheNavbar.vue'
//import ListCard from './../modules/list/ListCard.vue'
//import ListTable from './../modules/list/ListTable.vue'
import clientList from './../modules/list/clientList.vue'
import kotelList from './../modules/list/kotelList2.vue'
import orderList from './../modules/list/orderList.vue'
import stageList from './../modules/list/stageList.vue'
import stageObrabotkaList from './../modules/list/stageObrabotkaList.vue'
import userList from './../modules/list/userList.vue'

export default {
  components: {
    TheNavbar,
    clientList,
    kotelList,
    orderList,
    stageList,
    stageObrabotkaList,
    userList
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
    myList() {
      const component = this.$route.params.type + 'List'
      //console.log('component List= ', component)
      return component
    },
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
      //console.log('pre Search items = ', this.filterItems)
      return searchMethod(
        this.filterItems,
        this.$route.params.type,
        this.searchValue
      )
    },
    sortItems() {
      //console.log('pre Sort items = ', this.filterItems)
      this.searchItems.forEach(item => {
        if (this.sortBy in item)
          return sortMethod(this.searchItems, this.sortUp, this.sortBy)
      })
      return this.searchItems
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