<template>
  <div class="p-0 p-md-2">
    <userForm
      v-for="item in listItems"
      :key="item.id"
      :item="item"
      @save-item="saveItem"
      @remove-item="removeItem"
    />
  </div>
</template>

<script>
import userForm from './../../components/forms/userForm.vue'

export default {
  components: {
    userForm
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
    removeItem({ item }) {
      if (confirm('Точно удалить?')) {
        this.$store.dispatch('removeItem', { item })
      }
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