<template>
  <div class="cover-overflow d-flex overflow-x-auto pt-3">
    <div
      v-for="stage in stageSorted"
      :key="stage.id"
      :id="stage.id"
      class="list-colum p-2"
    >
      <div
        class="text-center small border-bottom border-2 lh-1 pb-2"
        :class="stage.border"
      >
        {{ stage.title }}
      </div>

      <StatusCard
        v-for="item in sortMethod(
          getItems(stage.id, stage.position),
          'asc',
          'dateCreate'
        )"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'

import StatusCard from './StatusCard.vue'

export default {
  components: { StatusCard },
  props: {
    listItems: Array,
    searchValue: String
  },
  computed: {
    stages() {
      return this.$store.getters.stageProduction
    },
    stageSorted() {
      return sortMethod(this.stages, 'asc', 'position')
    }
  },
  methods: {
    sortMethod,
    getItems(stageId, stagePosition) {
      return this.listItems.filter(item => item.stageId === stageId)
    }
  },
  watch: {
    searchValue() {
      const cover = document.getElementsByClassName('cover-overflow')[0]
      if (this.listItems.length) {
        const colum = this.listItems[0]
        const columId = colum.stageId
        const cor = document.getElementById(columId)
        const corX = cor.getBoundingClientRect().x

        cover.scrollTo({
          top: 0,
          left: corX,
          behavior: 'smooth'
        })
      } else {
        cover.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
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
    min-width: 128px;
  }
}
</style>