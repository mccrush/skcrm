<template>
  <div class="app d-flex">
    <TheOffcanvas
      v-if="currentUserId"
      :currentUserId="currentUserId"
      @show-modal="showModal"
      class="d-md-none"
    />
    <div v-if="user" class="col-md-2 col-xxl-1 d-none d-md-block">
      <TheSideBar @show-modal="showModal" :user="user" />
    </div>

    <div class="container-fluid overflow-x-hidden p-0">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" @show-modal="showModal" :user="user" />
        </transition>
      </router-view>
    </div>

    <ModalMain
      :type="type"
      :mod="mod"
      :item="item"
      :user="user"
      @show-modal="showModal"
    />
  </div>
</template>

<script>
import { modelsFactory } from './helpers/modelsFactory'

import TheOffcanvas from './components/interface/TheOffcanvas.vue'
import TheSideBar from './components/interface/TheSideBar.vue'
import ModalMain from './components/modal/ModalMain.vue'

export default {
  components: {
    TheOffcanvas,
    TheSideBar,
    ModalMain
  },
  data() {
    return {
      type: '',
      mod: '',
      item: null
    }
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    },
    users() {
      return this.$store.getters.user
    },
    user() {
      return this.users.find(item => item.id === this.currentUserId) || null
    }
  },
  methods: {
    showModal({ type, item, mod }) {
      this.type = type
      this.mod = mod

      if (this.mod === 'create') {
        this.item = modelsFactory(this.type)
        // console.log('this.item = ', this.item)
      } else if (this.mod === 'edit') {
        this.item = item
        // console.log('this.item = ', this.item)
      }
    }
  }
}
</script>

<style>
.btn:focus,
.btn-close:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.form-floating > .form-control,
.form-floating > .form-select {
  border: none;
  border-bottom: 1px solid #dee2e685;
  /* border-radius: 0; */
  background: #ffffff;
  /* box-shadow: none; */
  height: auto;
  min-height: 0;
  padding-bottom: 4px;
}

.form-floating > .form-control:not(:placeholder-shown) ~ label::after,
.form-floating > .form-select ~ label::after {
  background-color: #ffff;
}

.form-floating > .form-control:not(:placeholder-shown) {
  /* padding-top: 0; */
  padding-bottom: 4px;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-default {
  cursor: default;
}

.cover-overflow {
  height: calc(100vh - 63px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>