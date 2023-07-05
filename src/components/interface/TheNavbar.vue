<template>
  <div class="row bg-white p-3">
    <div class="col-12 d-md-none">
      <button
        class="btn btn-sm btn-light ps-3 pe-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        ≡
      </button>
    </div>
    <div class="col-12">
      <div class="row">
        <slot></slot>
      </div>
    </div>
  </div>
</template>