<template>
  <div class="view">
    <TheNavbar>
      <template #count>
        <div class="fw-bold pt-1">СлавКотёл</div>
      </template>
      <template #filter>
        <div class="pt-1">Статус производства котла</div>
      </template>
      <template #search>
        <InputSearch placeholder="Введите свой номер телефона: 89997776655" />
      </template>
    </TheNavbar>

    <StatusMain />
  </div>
</template>

<script>
import TheNavbar from './../components/interface/TheNavbar.vue'
import InputSearch from './../components/elements/InputSearch.vue'

import StatusMain from './../modules/status/StatusMain.vue'

export default {
  components: {
    TheNavbar,
    InputSearch,
    StatusMain
  }
}
</script>