<template>
  <div class="row">
    <div v-for="stage in stages" :key="stage.id" class="col-3 ps-1 pe-1">
      <div class="header text-center fw-bold">
        {{ stage.title }}
      </div>
      <orderItems :items="getItems(stage.id)" />
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
  created() {
    console.log('in kotelList = ', this.listItems)
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
    }
  }
}
</script>