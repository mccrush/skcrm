<template>
  <div class="cover-stage d-flex overflow-x-auto">
    <div
      v-for="stage in stageSorted"
      :key="stage.id"
      class="list-colum ps-2 pe-2"
    >
      <div
        class="header text-center fw-bold border-bottom border-4 pb-3"
        :class="stage.border"
      >
        {{ stage.title }}
      </div>
      <OrderCards :items="getItems(stage.id)" @show-modal="showModal" />
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'
import OrderCards from './OrderCards.vue'

export default {
  components: {
    OrderCards
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  computed: {
    stages() {
      return this.$store.getters.stage
    },
    stageSorted() {
      return sortMethod(this.stages, 'asc', 'position')
    }
  },
  mounted() {
    this.$emit('set-sort-method', { sortUp: 'asc', sortBy: 'dateCreate' })
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
.cover-stage {
  height: calc(100vh - 96px);
}
/* Ширина экрана меньше или равна 768 */
@media (max-width: 767px) {
  .list-colum {
    min-width: calc(100vw);
  }
}

/* Ширина экрана больше или равна 768 */
@media (min-width: 768px) {
  .list-colum {
    /* width: calc(35vw); */
    min-width: 320px;
  }
}
</style>