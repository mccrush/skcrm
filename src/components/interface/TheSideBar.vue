<template>
  <div class="side-bar bg-dark d-flex flex-column justify-content-between">
    <div>
      <div
        class="logo cursor-pointer d-none d-md-block text-center bg-dark text-secondary fw-bolder fs-4 p-3"
        @click="$router.push('/')"
      >
        SK CRM
      </div>

      <div class="list-items">
        <!-- <div>
          <button
            class="btn btn-dark rounded-0 w-100 d-md-none"
            data-bs-dismiss="offcanvas"
            @click="$router.push('/')"
          >
            Главная
          </button>
        </div> -->
        <div v-for="item in menuItems" :key="item.id">
          <div
            v-if="user && user.access <= item.access"
            class="btn-group w-100"
          >
            <button
              class="btn btn-dark rounded-0 w-75 d-md-none"
              data-bs-dismiss="offcanvas"
              @click="$router.push('/view/' + item.type)"
            >
              {{ item.title }}
            </button>

            <button
              class="btn btn-dark rounded-0 w-75 d-none d-md-block"
              @click="$router.push('/view/' + item.type)"
            >
              {{ item.title }}
            </button>

            <button
              type="button"
              class="btn btn-dark rounded-0 d-none d-md-block w-25"
              data-bs-toggle="modal"
              data-bs-target="#modalWindow"
              @click="
                $emit('show-modal', {
                  type: item.type,
                  item: null,
                  mod: 'create'
                })
              "
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-dark rounded-0 w-100 d-md-none mt-5"
        data-bs-dismiss="offcanvas"
        @click="logOut"
      >
        Выйти
      </button>
      <button
        type="button"
        class="btn btn-dark rounded-0 w-100 d-none d-md-block mt-5"
        @click="logOut"
      >
        Выйти
      </button>
      <code
        class="border-top border-secondary text-secondary text-center small w-100 d-block p-1"
        >v{{ version }}</code
      >
    </div>
  </div>
</template>

<script>
import { dataModels } from './../../data/dataModels'
import { version } from './../../../package.json'

export default {
  props: {
    currentUserId: String
  },
  emits: ['show-modal'],
  data() {
    return {
      version
    }
  },
  computed: {
    menuItems() {
      return dataModels.filter(item => item.menu)
    },
    users() {
      return this.$store.getters.user
    },
    user() {
      return this.users.find(item => item.id === this.currentUserId)
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
.logo {
  height: 61px;
}

.logo:hover {
  /* background: -webkit-linear-gradient(#e85d04, #d00000); */
  background: -webkit-linear-gradient(#f48c06, #d00000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* Ширина экрана меньше или равна 768 */
@media (max-width: 767px) {
  .side-bar {
    /* height: calc(100vh - 66px); */
    height: 100%;
  }
}

/* Ширина экрана больше или равна 768 */
@media (min-width: 768px) {
  .side-bar {
    height: calc(100vh);
  }
}
</style>