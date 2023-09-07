<template>
  <div class="view">
    <TheNavbar :user="user" @show-modal="showModal" />

    <StageTable
      :listItems="listItems"
      :user="user"
      @set-sort-method="setSortMethod"
    />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import StageTable from './../modules/stage/StageTable.vue'

export default {
  components: {
    TheNavbar,
    StageTable
  },
  props: {
    listItems: Array,
    sortUp: String,
    user: Object
  },
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    },
    setSortMethod({ sortUp, sortBy }) {
      this.$emit('set-sort-method', { sortUp, sortBy })
    }
  }
}
</script>