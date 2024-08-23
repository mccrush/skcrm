<template>
  <div class="btn-group btn-group-sm">
    <BtnViewModKanban
      :class="{ active: viewMod === 'kanban' }"
      @click="$emit('set-view-mod', 'kanban')"
    />
    <BtnViewModTable
      :class="{ active: viewMod === 'table' }"
      @click="$emit('set-view-mod', 'table')"
    />
  </div>
</template>

<script>
import BtnViewModKanban from './../buttons/BtnViewModKanban.vue'
import BtnViewModTable from './../buttons/BtnViewModTable.vue'

export default {
  components: {
    BtnViewModKanban,
    BtnViewModTable
  },
  emits: ['set-view-mod'],
  props: { viewMod: String }
}
</script>