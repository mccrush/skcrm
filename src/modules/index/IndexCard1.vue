<template>
  <div class="card rounded bg-white shadow-sm p-2 pt-1">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="m-0">
        {{ getTitle() }}
      </h6>
      <BtnOpenList
        class="btn-sm btn-light text-secondary p-0 ps-1 pe-1 pb-1"
        @click="$router.push('/list/' + type)"
      />
    </div>
    <div>
      <span>{{ items.length }} шт.</span>
    </div>
  </div>
</template>

<script>
import { dataModels } from './../../data/dataModels'
import BtnOpenList from './../../components/buttons/BtnOpenList.vue'

export default {
  components: {
    BtnOpenList
  },
  props: {
    type: String
  },
  computed: {
    items() {
      return this.$store.getters[this.type]
    }
  },
  methods: {
    getTitle() {
      return dataModels.find(item => item.type === this.type).title
    }
  }
}
</script>