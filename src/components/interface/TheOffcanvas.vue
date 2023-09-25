<template>
  <div
    class="offcanvas offcanvas-start text-bg-dark"
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdrop"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="offcanvas-header">
      <h5
        class="offcanvas-title"
        id="staticBackdropLabel"
        @click="$router.push('/')"
      >
        Меню
      </h5>
      <button
        type="button"
        class="btn btn-sm btn-outline-secondary p-1 ps-3 pe-3"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        x
      </button>
    </div>
    <div class="offcanvas-body overflow-y-hidden p-0">
      <TheSideBar :user="user" />
    </div>
  </div>
</template>

<script>
import TheSideBar from './TheSideBar.vue'

export default {
  components: {
    TheSideBar
  },
  props: {
    user: Object
  }
}
</script>