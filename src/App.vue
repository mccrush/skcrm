<template>
    <div class="app d-flex">
        <TheSideBar @show-modal="showModal"/>
        

        <div class="container-fluid">
            <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
            
        </div>

        <ModalMain :type="type"/>
    </div>
</template>

<script>
import TheSideBar from './components/interface/TheSideBar.vue'
import ModalMain from './components/modal/ModalMain.vue'

export default {
    components: {
        TheSideBar,
        ModalMain
    },
    data() {
        return {
            type: ''
        }
    },
    methods: {
        showModal(type) {
            this.type = type
        }
    }    
}
</script>

<style>
.side-bar {
    width: 220px;
}
</style>