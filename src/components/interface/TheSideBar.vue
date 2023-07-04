<template>
  <div class="side-bar bg-dark vh-100">
    <div class="text-center bg-dark text-light fw-bold p-3">S K C R M</div>

    <div class="list-items">
      <div v-for="item in menuItems" :key="item.id" class="btn-group w-100">
        <router-link
          :to="'/list/' + item.type"
          class="btn btn-dark rounded-0 w-75"
        >
          {{ item.title }}</router-link
        >

        <button
          type="button"
          class="btn btn-dark rounded-0 w-25"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          @click="$emit('show-modal', { type: item.type, mod: 'create' })"
        >
          +
        </button>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-dark rounded-0 w-100 mt-5"
      @click="logOut"
    >
      Выйти
    </button>
  </div>
</template>

<script>
import { dataModels } from './../../data/dataModels'

export default {
  emits: ['show-modal'],
  computed: {
    menuItems() {
      return dataModels.filter(item => item.menu)
    }
  },
  methods: {
    async logOut() {
      const res = await this.$store.dispatch('logOut')
      if (res) this.$router.push('/login')
    }
  }
}
</script>


<style scoped>
.side-bar {
  width: 160px;
}

/* 
.item {
    text-decoration: none;
    color: aliceblue;
    transition: .3s;
}
.item:hover {
    background-color: dimgrey;
} */
</style>