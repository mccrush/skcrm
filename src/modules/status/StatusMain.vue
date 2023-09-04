<template>
  <div class="cover-overflow d-flex overflow-x-auto pt-3">
    <div v-for="stage in stageSorted" :key="stage.id" class="list-colum p-2">
      <div
        class="text-center small border-bottom border-2 lh-1 pb-2"
        :class="stage.border"
      >
        {{ stage.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'

export default {
  computed: {
    stages() {
      return this.$store.getters.stageProduction
    },
    stageSorted() {
      return sortMethod(this.stages, 'asc', 'position')
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
    min-width: 124px;
  }
}
</style>