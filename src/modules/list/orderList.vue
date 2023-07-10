<template>
  <div class="d-flex">
    <div v-for="stage in stages" :key="stage.id" class="col-3 ps-1 pe-1">
      <div class="header text-center fw-bold">
        {{ stage.title }}
      </div>
      <orderItems :items="getItems(stage.id)" @show-modal="showModal" />
    </div>
  </div>
</template>

<script>
import orderItems from './orderItems.vue'

export default {
  components: {
    orderItems
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  computed: {
    stages() {
      return this.$store.getters.stage
    }
  },
  methods: {
    getItems(stageId) {
      return this.listItems.filter(item => item.stageId === stageId)
    },
    editItem({ type, item }) {
      this.$emit('show-modal', { type, item, mod: 'edit' })
    },
    setFilterMethod({ filterType, filterValue }) {
      //console.log('filterType, filterValue', filterType, filterValue)
      this.$emit('set-filter-method', { filterType, filterValue })
    },
    setSortMethod(type) {
      const sortUp = this.sortUp === 'desc' ? 'asc' : 'desc'
      this.$emit('set-sort-method', { sortUp: sortUp, sortBy: type })
    },
    showModal({ type, item, mod }) {
      //console.log('type, item ', type, item)
      this.$emit('show-modal', { type, item, mod })
    }
  }
}
</script>

<style scoped>
/* Ширина экрана меньше или равна 768 */
/* @media (max-width: 767px) {
  .colum {
    width: calc(100vw);
  }
} */

/* Ширина экрана больше или равна 768 */
/* @media (min-width: 768px) {
  .colum {
    width: 220px;
  }
} */
</style>