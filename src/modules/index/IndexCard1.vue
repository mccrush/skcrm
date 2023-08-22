<template>
  <div class="card rounded bg-white p-0">
    <div
      class="d-flex justify-content-between align-items-center rounded-top p-2"
    >
      <h6 class="m-0">
        {{ getTitle() }}
      </h6>
      <BtnOpenList
        class="btn-sm btn-light text-secondary p-0 ps-1 pe-1 pb-1"
        @click="$router.push('/view/' + type)"
      />
    </div>
    <div class="bg-light rounded-bottom border-white border-top shadow-sm p-2">
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