<template>
  <div class="row bg-light shadow-sm z-2 p-2 pt-3 pb-3">
    <div class="col-12 d-md-none d-flex justify-content-between">
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
        type="button"
        class="btn btn-sm btn-dark d-md-none ps-3 pe-3"
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
    <div class="col-12">
      <div class="row mt-2 mt-md-0">
        <div class="col-4 col-md-1"><slot name="count"></slot></div>
        <div class="col-8 col-md-3"><slot name="filter"></slot></div>
        <div class="col-12 col-md-3 mt-2 mt-md-0 ps-0 pe-0">
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
  emits: ['show-modal']
}
</script>