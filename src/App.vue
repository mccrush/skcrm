<template>
  <div class="app d-flex">
    <TheSideBar @show-modal="showModal" />

    <div class="container-fluid">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" @show-modal="showModal" />
        </transition>
      </router-view>
    </div>

    <ModalMain :type="type" :mod="mod" :item="item" />
  </div>
</template>

<script>
import { modelsFactory } from './helpers/modelsFactory'

import TheSideBar from './components/interface/TheSideBar.vue'
import ModalMain from './components/modal/ModalMain.vue'

export default {
  components: {
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