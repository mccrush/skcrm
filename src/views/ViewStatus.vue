<template>
  <div class="view">
    <TheNavbar :user="user">
      <template #count>
        <div class="fw-bold pt-1" @click="count++">СлавКотёл</div>
      </template>
      <template #filter>
        <div class="pt-1">Статус производства</div>
      </template>
      <template #search>
        <InputSearch
          v-model="searchValue"
          placeholder="Фамилия или телефон: 89997776655"
        />
      </template>
    </TheNavbar>

    <StatusMain
      :listItems="listItems"
      :user="user"
      :searchValue="searchValue"
    />
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
    listItems: Array,
    user: Object
  },
  emits: ['set-search-method'],
  data() {
    return {
      count: 0,
      searchValue: ''
    }
  },
  watch: {
    searchValue() {
      this.$emit('set-search-method', { searchValue: this.searchValue })
    },
    count(o, n) {
      if (n >= 5) this.$router.push('/login')
    }
  }
}
</script>