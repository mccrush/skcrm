<template>
  <div class="side-bar bg-dark vh-100">
    <div class="text-center bg-white fw-bold p-3">SKCRM</div>

    <div class="list-items p-2">
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="btn-group btn-group-sm w-100 mt-1"
      >
        <router-link :to="'/list/' + item.type" class="btn btn-secondary w-75">
          {{ item.title }}</router-link
        >

        <button
          type="button"
          class="btn btn-secondary w-25"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          @click="$emit('show-modal', { type: item.type, mod: 'create' })"
        >
          +
        </button>
      </div>
    </div>
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
  }
}
</script>


<style scoped>
.side-bar {
  width: 200px;
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