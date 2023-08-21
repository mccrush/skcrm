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

    <KotelTable :listItems="listItems" @edit-item="showModal" />
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
    listItems: Array
  },
  emits: ['show-modal', 'set-filter-method'],
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    },
    setFilterMethod({ filterType, filterValue }) {
      this.$emit('set-filter-method', { filterType, filterValue })
    }
  }
}
</script>