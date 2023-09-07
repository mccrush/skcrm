<template>
  <div class="view">
    <UserList :users="listItems" :user="user" />
  </div>
</template>

<script>
import UserList from './../modules/user/UserList.vue'

export default {
  components: {
    UserList
  },
  props: {
    listItems: Array,
    user: Object
  }
}
</script>