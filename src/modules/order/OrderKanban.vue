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
          <span>{{ getItems(stage.id, stage.position).length }} шт.</span>
          <span v-if="user && this.user.access < 3">
            -
            {{ getTottalSum(getItems(stage.id, stage.position), 'price') }} 000
            ₽</span
          >
        </div>
        <div v-else>-</div>
      </div>
      <OrderCards
        v-if="user"
        :items="
          sortMethod(getItems(stage.id, stage.position), 'asc', 'dateCreate')
        "
        :user="user"
        :stagePosition="stage.position"
        :stageLength="stagesProduction.length"
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
    sortUp: String,
    user: Object
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  computed: {
    // currentUserId() {
    //   return this.$store.getters.currentUserId
    // },
    // users() {
    //   return this.$store.getters.user
    // },
    // user() {
    //   return this.users.find(item => item.id === this.currentUserId)
    // },

    stagesProduction() {
      return this.$store.getters.stageProduction
    },
    stageProductionFiltered() {
      if (this.user && this.user.access === 3) {
        return this.stagesProduction.filter(item =>
          this.user.stages.includes(item.id)
        )
      }
      return this.stagesProduction
    },
    stagesOrder() {
      return this.$store.getters.stage
    },
    stages() {
      if (this.$route.params.type === 'production') {
        return this.stageProductionFiltered
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
      if (this.$route.params.type === 'production') {
        const listItemsFiltered = this.listItems.filter(
          item => item.stageId === stageId
        )
        // stagePosition = 4 должна быть сваркой
        // чтобы сварщики видели только свои заказы
        if (this.user && this.user.access === 3 && stagePosition === 4) {
          return listItemsFiltered.filter(item => item.userId === this.user.id)
        }
        return this.listItems.filter(item => item.stageId === stageId)
      } else if (this.$route.params.type === 'order') {
        if (stagePosition === 2) {
          //console.log('stagePosition 2 = ', stagePosition)
          const stagesProductionId = this.stagesProduction.filter(
            item => item.position >= 2 && item.position <= 8
          )

          //console.log('stagesProductionId = ', stagesProductionId)
          let itemsForOrder = []

          stagesProductionId.forEach(el => {
            itemsForOrder = itemsForOrder.concat(
              this.listItems.filter(item => item.stageId === el.id)
            )
          })
          return itemsForOrder
        } else {
          let stageIdForOrder = ''
          let stageItem = null

          if (stagePosition == 1) {
            stageItem = this.stagesProduction.find(item => item.position == 1)
          } else if (stagePosition == 3) {
            stageItem = this.stagesProduction.find(item => item.position == 8)
          } else if (stagePosition == 4) {
            stageItem = this.stagesProduction.find(item => item.position == 9)
          }

          if (stageItem) stageIdForOrder = stageItem.id
          return this.listItems.filter(item => item.stageId === stageIdForOrder)
        }
      }
    },
    editItem({ type, item }) {
      this.$emit('show-modal', { type, item, mod: 'edit' })
    },
    setFilterMethod({ filterType, filterValue }) {
      this.$emit('set-filter-method', { filterType, filterValue })
    },
    setSortMethod(type) {
      const sortUp = this.sortUp === 'desc' ? 'asc' : 'desc'
      this.$emit('set-sort-method', { sortUp: sortUp, sortBy: type })
    },
    showModal({ type, item, mod }) {
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