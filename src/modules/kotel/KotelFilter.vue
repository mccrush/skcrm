<template>
  <div class="d-flex justify-content-start">
    <div class="">Всего: {{ listItems.length }}</div>
    <div class="d-flex p-0">
      <div class="btn-group btn-group-sm ms-2">
        <button
          class="btn btn-light"
          @click="
            $emit('set-filter-method', {
              filterType: 'typek',
              filterValue: 'П'
            })
          "
        >
          П
        </button>
        <button
          class="btn btn-light"
          @click="
            $emit('set-filter-method', {
              filterType: 'typek',
              filterValue: 'А'
            })
          "
        >
          А
        </button>
        <button
          class="btn btn-light"
          @click="
            $emit('set-filter-method', { filterType: '', filterValue: '' })
          "
        >
          Все
        </button>
      </div>

      <div class="dropdown ms-2">
        <button
          class="btn btn-sm btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Мощность
        </button>
        <ul class="dropdown-menu">
          <li
            v-for="power in dataPower"
            :key="power"
            :value="power"
            @click="
              $emit('set-filter-method', {
                filterType: 'power',
                filterValue: power
              })
            "
          >
            <span class="cursor-pointer dropdown-item">{{ power }} кВт</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { dataPower } from './../../data/dataForClient'

export default {
  props: {
    listItems: Array
  },
  emits: ['set-filter-method'],
  data() {
    return {
      dataPower
    }
  }
}
</script>