<template>
  <div class="navbar row bg-white shadow-sm z-2 p-3">
    <div v-if="user" class="col-6 d-md-none">
      <button
        class="btn btn-sm btn-light ps-3 pe-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        ≡
      </button>

      <button
        v-if="$route.params.type && $route.params.type !== 'production'"
        type="button"
        class="btn btn-sm btn-dark d-md-none w-50 ms-2 ps-3 pe-3"
        data-bs-toggle="modal"
        data-bs-target="#modalWindow"
        @click="
          $emit('show-modal', {
            type: $route.params.type,
            item: null,
            mod: 'create'
          })
        "
      >
        +
      </button>
    </div>
    <div class="col-6 d-md-none text-end"><slot name="count"></slot></div>
    <div class="col-12">
      <div class="row mt-2 mt-md-0">
        <div class="col-md-2 d-none d-md-block"><slot name="count"></slot></div>
        <div class="col-8 col-md-3"><slot name="filter"></slot></div>
        <div class="col-12 col-md-2 mt-md-0 ps-0 pe-0">
          <slot name="filterSelect"></slot>
        </div>
        <div class="col-12 col-md-5 mt-2 mt-md-0">
          <slot name="search"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  emits: ['show-modal']
}
</script>

<style scoped>
.navbar {
  min-height: 61px;
}
</style>