<template>
  <div class="view">
    <UserList :users="listItems" />
  </div>
</template>

<script>
import UserList from './../modules/user/UserList.vue'

export default {
  components: {
    UserList
  },
  props: {
    listItems: Array
  }
}
</script>