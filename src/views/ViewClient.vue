<template>
  <div class="view">
    <TheNavbar>
      <!-- <template #filter>FF</template>
      <template #filterSelect><ClientFilter /></template> -->
      <template #search>
        <InputSearch v-model="searchValue" />
      </template>
    </TheNavbar>

    <ClientTable :listItems="listItems" />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import InputSearch from './../components/elements/InputSearch.vue'
import ClientFilter from './../modules/client/ClientFilter.vue'
import ClientTable from './../modules/client/ClientTable.vue'

export default {
  components: {
    TheNavbar,
    ClientFilter,
    InputSearch,
    ClientTable
  },
  props: {
    listItems: Array
  },
  emits: ['set-search-method'],
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {},
  watch: {
    searchValue() {
      this.$emit('set-search-method', { searchValue: this.searchValue })
    }
  }
}
</script>