<template>
  <div class="p-0 p-md-2">
    <stageObrabotkaForm
      v-for="item in listItems"
      :key="item.id"
      :item="item"
      @save-item="saveItem"
    />
  </div>
</template>

<script>
import stageObrabotkaForm from './../../components/forms/stageObrabotkaForm.vue'

export default {
  components: {
    stageObrabotkaForm
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  mounted() {
    this.$emit('set-sort-method', { sortUp: 'asc', sortBy: 'position' })
  },
  methods: {
    saveItem({ item }) {
      this.$store.dispatch('updateItem', { item })
    },
    setFilterMethod({ filterType, filterValue }) {
      this.$emit('set-filter-method', { filterType, filterValue })
    },
    setSortMethod(type) {
      const sortUp = this.sortUp === 'desc' ? 'asc' : 'desc'
      this.$emit('set-sort-method', { sortUp: sortUp, sortBy: type })
    }
  }
}
</script>