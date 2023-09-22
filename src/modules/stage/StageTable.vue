<template>
  <div class="cover-overflow overflow-x-hidden overflow-y-auto p-0 p-md-2">
    <stageForm
      v-for="item in listItems"
      :key="item.id"
      :item="item"
      @save-item="saveItem"
      @remove-item="removeItem"
      class="bg-white mt-2 pb-2"
    />
  </div>
</template>

<script>
import stageForm from './../../components/forms/stageForm.vue'

export default {
  components: {
    stageForm
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
    },
    removeItem({ item }) {
      if (confirm('Точно удалить?')) {
        this.$store.dispatch('removeItem', { item })
      }
    }
  }
}
</script>