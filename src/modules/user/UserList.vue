<template>
  <div class="cover-overflow overflow-x-hidden overflow-y-auto p-0 p-md-2">
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
  },
  methods: {
    saveItem({ item }) {
      this.$store.dispatch('updateItem', { item })
    },
    removeItem({ item }) {
      if (confirm('Точно удалить?')) {
        this.$store.dispatch('removeItem', { item })
      }
    }
  }
}
</script>