<template>
  <div class="view">
    <TheNavbar>
      <template #count>
        <div class="fw-bold pt-1">СлавКотёл</div>
      </template>
      <template #filter>
        <div class="pt-1">Статус производства котла</div>
      </template>
      <template #search>
        <InputSearch
          v-model="searchValue"
          placeholder="Фамилия или телефон: 89997776655"
        />
      </template>
    </TheNavbar>

    <StatusMain :listItems="listItems" />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import InputSearch from './../components/elements/InputSearch.vue'

import StatusMain from './../modules/status/StatusMain.vue'

export default {
  components: {
    TheNavbar,
    InputSearch,
    StatusMain
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
  watch: {
    searchValue() {
      this.$emit('set-search-method', { searchValue: this.searchValue })
    }
  }
}
</script>