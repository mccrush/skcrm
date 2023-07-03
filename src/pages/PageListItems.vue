<template>
  <div class="row">
    <div class="col-12 bg-white p-3">
      {{ $route.name }} - {{ $route.params.type }}
    </div>

    <div class="col-12 p-3">
      <ListTable
        v-if="listItems.length"
        :listItems="sortItems"
        @show-modal="showModal"
      />
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../helpers/sortMethod'
import ListTable from './../modules/list/ListTable.vue'

export default {
  components: {
    ListTable
  },
  emits: ['show-modal'],
  data() {
    return {
      sortUp: 'desc',
      sortBy: 'dateCreate'
    }
  },
  computed: {
    listItems() {
      return this.$store.getters[this.$route.params.type]
    },
    sortItems() {
      return sortMethod(this.listItems, this.sortUp, this.sortBy)
    }
  },
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    }
  }
}
</script>