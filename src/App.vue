<template>
    <div class="app d-flex">
        <TheSideBar/>
        

        <div class="container-fluid">
            <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
            
        </div>
    </div>
</template>

<script>
import TheSideBar from './components/interface/TheSideBar.vue'

export default {
    components: {
        TheSideBar
    }    
}
</script>

<style>
.side-bar {
    width: 220px;
}
</style>