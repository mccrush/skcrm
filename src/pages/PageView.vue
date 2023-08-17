<template>
  <div>
    <component
      v-if="listItems.length"
      :is="viewComponent"
      :listItems="sortItems"
      :sortUp="sortUp"
      @set-filter-method="setFilterMethod"
      @set-sort-method="setSortMethod"
    />
  </div>
</template>

<script>
import { searchMethod } from './../helpers/searchMethod'
import { sortMethod } from './../helpers/sortMethod'

import ViewKotel from './../views/ViewKotel.vue'

export default {
  components: {
    ViewKotel
  },
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