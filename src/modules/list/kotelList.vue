<template>
  <table class="table table-striped table-light shadow-sm small">
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
        <th scope="col" class="text-center small lh-lg" width="20%">Размеры</th>
        <th scope="col" class="text-center small" width="12%">
          Вес
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('weight')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small" width="26%">Цена</th>
        <th scope="col" class="text-center" width="6%">---</th>
      </tr>
    </thead>
    <tbody>
      <kotelRow
        v-for="item in listItems"
        :key="item.id"
        :item="item"
        :typek="item.typek"
        :power="item.power"
        :square="item.square"
        :size="item.size"
        :weight="item.weight"
        :price3="item.price3"
        :price4="item.price4"
        :price5="item.price5"
        @edit-item="editItem"
        @set-filter-method="setFilterMethod"
      />
    </tbody>
  </table>
</template>

<script>
import kotelRow from './kotelRow.vue'

export default {
  components: {
    kotelRow
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  created() {
    console.log('in kotelList = ', this.listItems)
  },
  methods: {
    editItem({ type, item }) {
      this.$emit('show-modal', { type, item, mod: 'edit' })
    },
    setFilterMethod({ filterType, filterValue }) {
      //console.log('filterType, filterValue', filterType, filterValue)
      this.$emit('set-filter-method', { filterType, filterValue })
    },
    setSortMethod(type) {
      const sortUp = this.sortUp === 'desc' ? 'asc' : 'desc'
      this.$emit('set-sort-method', { sortUp: sortUp, sortBy: type })
    }
  }
}
</script>