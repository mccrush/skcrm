<template>
  <div
    v-if="stageSorted.length"
    class="cover-overflow d-flex overflow-x-auto pt-3"
  >
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
        <div v-if="getItems(stage.id, stage.position).length" class="fw-normal">
          {{ getItems(stage.id, stage.position).length }} шт. -
          {{ getTottalSum(getItems(stage.id, stage.position), 'price') }} 000 ₽
        </div>
        <div v-else>-</div>
      </div>
      <OrderCards
        :items="
          sortMethod(getItems(stage.id, stage.position), 'asc', 'dateCreate')
        "
        @show-modal="showModal"
      />
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'
import { getTottalSum } from './../../helpers/getTottalSum'

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
    stagesProduction() {
      return this.$store.getters.stageProduction
    },
    stagesOrder() {
      return this.$store.getters.stage
    },
    stages() {
      if (this.$route.params.type === 'production') {
        return this.stagesProduction
      } else if (this.$route.params.type === 'order') {
        return this.stagesOrder
      }
    },
    stageSorted() {
      return sortMethod(this.stages, 'asc', 'position')
    }
  },
  mounted() {
    this.$emit('set-sort-method', { sortUp: 'asc', sortBy: 'dateCreate' })
  },
  methods: {
    sortMethod,
    getTottalSum,
    getItems(stageId, stagePosition) {
      //return this.listItems.filter(item => item.stageId === stageId)
      if (this.$route.params.type === 'production') {
        return this.listItems.filter(item => item.stageId === stageId)
      } else if (this.$route.params.type === 'order') {
        if (stagePosition === 2) {
          const stagesProductionId = this.stagesProduction.filter(
            item => item.position >= 2 && item.position <= 10
          )

          let itemsForOrder = []

          stagesProductionId.forEach(el => {
            itemsForOrder.concat(
              this.listItems.filter(item => item.stageId === el.id)
            )
          })
          console.log('itemsForOrder = ', itemsForOrder)
          return itemsForOrder
        } else {
          let stageIdForOrder = ''
          let stageItem = null

          if (stagePosition == 1) {
            stageItem = this.stagesProduction.find(item => item.position == 1)
          } else if (stagePosition == 3) {
            stageItem = this.stagesProduction.find(item => item.position == 11)
          } else if (stagePosition == 4) {
            stageItem = this.stagesProduction.find(item => item.position == 12)
          }

          if (stageItem) stageIdForOrder = stageItem.id
          console.log('stageIdForOrder = ', stageIdForOrder)
          return this.listItems.filter(item => item.stageId === stageIdForOrder)
        }
      }
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