<template>
  <div class="app d-flex">
    <TheOffcanvas
      v-if="currentUserId"
      @show-modal="showModal"
      class="d-md-none"
    />
    <div v-if="currentUserId" class="col-md-2 col-xxl-1 d-none d-md-block">
      <TheSideBar @show-modal="showModal" />
    </div>

    <div class="container-fluid overflow-x-hidden">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" @show-modal="showModal" />
        </transition>
      </router-view>
    </div>

    <ModalMain :type="type" :mod="mod" :item="item" @show-modal="showModal" />
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

.cursor-pointer {
  cursor: pointer;
}

.cursor-default {
  cursor: default;
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