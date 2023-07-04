<template>
  <div
    class="offcanvas offcanvas-start text-bg-dark"
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Меню</h5>
      <button
        type="button"
        class="btn-close border border-lite"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body p-0">
      <TheSideBar />
    </div>
  </div>
</template>

<script>
import TheSideBar from './TheSideBar.vue'

export default {
  components: {
    TheSideBar
  }
}
</script>