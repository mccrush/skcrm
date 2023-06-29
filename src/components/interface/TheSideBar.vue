<template>
    <div class="side-bar bg-dark vh-100">
            <div class="text-center bg-light p-3">SKCRM</div>

            <div class="list-items p-2">
                <router-link v-for="item in menuItems" 
                :key="item.id" :to="'/list/'+item.type" 
                class="item d-block rounded-2 p-1 ps-2">{{item.title}}</router-link>
            </div>
        </div>
</template>

<script>
import {dataModels} from './../../data/dataModels'

export default {
    computed: {
        menuItems() {
            return dataModels.filter(item => item.menu)
        }
    }
}
</script>

<style scoped>
.side-bar {
    width: 200px;
    
}

.item {
    text-decoration: none;
    color: aliceblue;
    transition: .3s;
}
.item:hover {
    background-color: dimgrey;
}
</style>