<template>
  <!-- <table class="table table-striped table-light shadow-sm small">
    <thead>
      <tr>
        <th scope="col" class="text-center small ps-3" width="12%">
          Тип
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('typek')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small" width="12%">
          Мощ.
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('power')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small" width="12%">
          Площ.
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('square')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small lh-lg" width="14%">
          Разм (ш*г*в)
        </th>
        <th scope="col" class="text-center small lh-lg" width="12%">Бункер</th>
        <th scope="col" class="text-center small" width="10%">
          Вес
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('weight')"
          >
            ⇅
          </button>
        </th>

        <th scope="col" class="text-center small lh-lg" width="12%">Автом.</th>
        <th scope="col" class="text-center small lh-lg" width="10%">Цена</th>
        <th scope="col" class="text-center" width="6%">---</th>
      </tr>
    </thead>
  </table> -->

  <div class="p-0 p-md-2">
    <div class="row mb-3">
      <div class="col-2">Всего: {{ listItems.length }}</div>
      <div class="col-3 d-flex p-0">
        <div class="btn-group btn-group-sm ms-2">
          <button
            class="btn btn-light"
            @click="setFilterMethod({ filterType: 'typek', filterValue: 'П' })"
          >
            П
          </button>
          <button
            class="btn btn-light"
            @click="setFilterMethod({ filterType: 'typek', filterValue: 'А' })"
          >
            А
          </button>
          <!-- <button
            class="btn btn-light"
            @click="setFilterMethod({ filterType: '', filterValue: '' })"
          >
            Все
          </button> -->
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
                setFilterMethod({ filterType: 'power', filterValue: power })
              "
            >
              <span class="cursor-pointer dropdown-item">{{ power }} кВт</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
    <kotelForm
      v-for="item in listItems"
      :key="item.id"
      :item="item"
      mod="edit"
      class="rounded border-top border-2 border-white shadow-sm mb-3 p-0"
      @save-item="saveItem({ item })"
      @remove-item="removeItem({ item })"
    />
  </div>
</template>

<script>
import { dataPower } from './../../data/dataForClient'

import kotelForm from './../../components/forms/kotelFormModal.vue'
//import kotelRow from './kotelRow2.vue'

export default {
  components: {
    kotelForm
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  data() {
    return {
      dataPower
    }
  },
  mounted() {
    this.$emit('set-sort-method', { sortUp: 'asc', sortBy: 'square' })
  },
  methods: {
    saveItem({ item }) {
      this.$store.dispatch('updateItem', { item })
    },
    editItem({ type, item }) {
      this.$emit('show-modal', { type, item, mod: 'edit' })
    },
    setFilterMethod({ filterType, filterValue }) {
      this.$emit('set-filter-method', { filterType, filterValue })
    },
    setSortMethod(type) {
      const sortUp = this.sortUp === 'desc' ? 'asc' : 'desc'
      this.$emit('set-sort-method', { sortUp: sortUp, sortBy: type })
    },
    removeItem({ item }) {
      if (confirm('Точно удалить?')) {
        this.$store.dispatch('removeItem', { item })
        console.log('Delete')
      }
    }
  }
}
</script>