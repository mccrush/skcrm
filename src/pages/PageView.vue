<template>
  <div>
    <component
      v-if="listItems.length"
      :is="viewComponent"
      :listItems="sortItems"
      :filterType="filterType"
      :filterValue="filterValue"
      :sortUp="sortUp"
      @set-filter-method="setFilterMethod"
      @clear-filter="clearFilter"
      @set-search-method="setSearchMethod"
      @set-sort-method="setSortMethod"
      @show-modal="showModal"
    />
  </div>
</template>

<script>
import { searchMethod } from './../helpers/searchMethod'
import { sortMethod } from './../helpers/sortMethod'

import ViewClient from './../views/ViewClient.vue'
import ViewKotel from './../views/ViewKotel.vue'
import ViewOrder from './../views/ViewOrder.vue'
import ViewStage from './../views/ViewStage.vue'
import ViewStageObrabotka from './../views/ViewStageObrabotka.vue'
import ViewUser from './../views/ViewUser.vue'

export default {
  components: {
    ViewClient,
    ViewKotel,
    ViewOrder,
    ViewStage,
    ViewStageObrabotka,
    ViewUser
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
    viewComponent() {
      const component =
        'View' +
        this.$route.params.type.substr(0, 1).toUpperCase() +
        this.$route.params.type.slice(1)
      //console.log('component View = ', component)
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
    setFilterMethod({ filterType, filterValue }) {
      this.filterType = filterType
      this.filterValue = filterValue
    },
    setSearchMethod({ searchValue }) {
      this.searchValue = searchValue
    },
    clearFilter() {
      this.filterType = ''
      this.filterValue = ''
    },
    setSortMethod({ sortUp, sortBy }) {
      this.sortUp = sortUp
      this.sortBy = sortBy
    },
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    }
  }
}
</script>