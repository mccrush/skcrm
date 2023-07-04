<template>
  <div class="side-bar bg-dark d-flex flex-column justify-content-between">
    <div>
      <div class="d-none d-md-block text-center bg-dark text-light fw-bold p-3">
        S K C R M
      </div>

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
            data-bs-target="#modalWindow"
            @click="$emit('show-modal', { type: item.type, mod: 'create' })"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-dark rounded-0 w-100 mt-5"
      data-bs-dismiss="offcanvas"
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
/* Ширина экрана меньше или равна 768 */
@media (max-width: 767px) {
  .side-bar {
    height: calc(100vh - 64px);
  }
}

/* Ширина экрана больше или равна 768 */
@media (min-width: 768px) {
  .side-bar {
    height: calc(100vh);
  }
}
</style>