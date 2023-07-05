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
          $emit('show-modal', { type: $route.params.type, mod: 'create' })
        "
      >
        +
      </button>
    </div>
    <div class="col-12">
      <div class="row">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['show-modal']
}
</script>