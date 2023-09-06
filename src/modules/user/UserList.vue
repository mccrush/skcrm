<template>
  <div class="p-2 ps-4 pe-4">
    <userForm
      v-for="user in users"
      :key="user.id"
      :item="user"
      @save-item="saveItem"
      @remove-item="removeItem"
    />
  </div>
</template>


<script>
import userForm from './../../components/forms/userForm.vue'

export default {
  components: {
    userForm
  },
  props: {
    users: Array
  }
}
</script>