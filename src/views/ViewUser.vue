<template>
  <div class="view">
    <TheNavbar :user="user" @show-modal="showModal">
      <template #count>
        <div class="small pt-1">{{ listItems.length }} шт.</div>
      </template>
    </TheNavbar>
    <UserList :users="listItems" :user="user" />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import UserList from './../modules/user/UserList.vue'

export default {
  components: {
    TheNavbar,
    UserList
  },
  props: {
    listItems: Array,
    user: Object
  },
  emits: ['show-modal'],
  methods: {
    showModal({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
    }
  }
}
</script>