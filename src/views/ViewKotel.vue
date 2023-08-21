<template>
  <div class="view">
    <TheNavbar>
      <!-- <template #filter>
        
      </template> -->
      <template #filterSelect>
        <KotelFilter
          :listItems="listItems"
          @set-filter-method="setFilterMethod"
        />
      </template>
      <!-- <template #search>
      </template> -->
    </TheNavbar>

    <KotelTable
      :listItems="listItems"
      :sortUp="sortUp"
      @edit-item="showModal"
      @set-sort-method="setSortMethod"
    />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import KotelFilter from './../modules/kotel/KotelFilter.vue'
import KotelTable from './../modules/kotel/KotelTable.vue'

export default {
  components: {
    TheNavbar,
    KotelFilter,
    KotelTable
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
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
  }
}
</script>