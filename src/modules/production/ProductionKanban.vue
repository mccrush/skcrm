<template>
  <div class="cover-stage d-flex overflow-x-auto pt-3">
    <div
      v-for="stage in stageSorted"
      :key="stage.id"
      class="list-colum ps-2 pe-2"
    >
      <div
        class="header text-center fw-bold border-bottom border-4 pb-2"
        :class="stage.border"
      >
        {{ stage.title }}
        <div v-if="getItems(stage.id).length" class="fw-normal">
          {{ getItems(stage.id).length }} шт. -
          {{ getTottalSum(getItems(stage.id), 'price') }} 000 ₽
        </div>
        <div v-else>-</div>
      </div>
      <ProductionCards
        :items="sortMethod(getItems(stage.id), 'asc', 'dateCreate')"
        @show-modal="showModal"
      />
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'
import { getTottalSum } from './../../helpers/getTottalSum'

import ProductionCards from './ProductionCards.vue'

export default {
  components: {
    ProductionCards
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  computed: {
    stageProduction() {
      return this.$store.getters.stageProduction
    },
    stageSorted() {
      return sortMethod(this.stageProduction, 'asc', 'position')
    }
  },
  mounted() {
    this.$emit('set-sort-method', { sortUp: 'asc', sortBy: 'dateCreate' })
  },
  methods: {
    sortMethod,
    getTottalSum,
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
  /* height: calc(100vh - 96px); */
  height: calc(100vh - 63px);
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