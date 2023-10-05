<template>
  <div class="cover-overflow table-responsive overflow-y-auto p-md-3">
    <table class="table table-striped table-light shadow-sm small">
      <thead>
        <tr>
          <th scope="col" class="small ps-3" width="20%">
            Город
            <button
              class="btn btn-sm btn-light p-0 ps-2 pe-2"
              @click="setSortMethod('city')"
            >
              ⇅
            </button>
          </th>
          <th scope="col" class="small" width="15%">
            Имя
            <button
              class="btn btn-sm btn-light p-0 ps-2 pe-2"
              @click="setSortMethod('name')"
            >
              ⇅
            </button>
          </th>
          <th scope="col" class="text-center small" width="10%">
            Тип
            <button
              class="btn btn-sm btn-light p-0 ps-2 pe-2"
              @click="setSortMethod('typek')"
            >
              ⇅
            </button>
          </th>
          <th scope="col" class="text-center small" width="10%">
            Мощ
            <button
              class="btn btn-sm btn-light p-0 ps-2 pe-2"
              @click="setSortMethod('power')"
            >
              ⇅
            </button>
          </th>
          <th scope="col" class="text-center small lh-lg" width="15%">
            Телефон
          </th>
          <th scope="col" class="text-center small" width="8%">
            Источ
            <!-- <button
              class="btn btn-sm btn-light p-0 ps-2 pe-2"
              @click="setSortMethod('sours')"
            >
              ⇅
            </button> -->
          </th>
          <th scope="col" class="text-center small" width="8%">
            Дата
            <button
              class="btn btn-sm btn-light p-0 ps-2 pe-2"
              @click="setSortMethod('dateCreate')"
            >
              ⇅
            </button>
          </th>
          <th scope="col" class="text-center small lh-lg" width="8%">Заказ</th>
          <th scope="col" class="text-center" width="6%">---</th>
        </tr>
      </thead>
      <tbody>
        <ClientTableRow
          v-for="item in listItems"
          :key="item.id"
          :item="item"
          :city="item.city"
          :name="item.name"
          :typek="item.typek"
          :power="item.power"
          :phone="item.phone"
          :sours="item.sours"
          :order="getOrder(item.id)"
          :dateLastContact="getLocaleDateFromDateDigit(item.dateCreate)"
          @edit-item="editItem"
          @set-filter-method="setFilterMethod"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { getLocaleDateFromDateDigit } from './../../helpers/getDateFormat'
import ClientTableRow from './ClientTableRow.vue'

export default {
  components: {
    ClientTableRow
  },
  props: {
    listItems: Array,
    sortUp: String
  },
  emits: ['show-modal', 'set-filter-method', 'set-sort-method'],
  computed: {
    orders() {
      return this.$store.getters.order
    }
  },
  mounted() {
    this.$emit('set-sort-method', { sortUp: 'desc', sortBy: 'dateCreate' })
  },
  methods: {
    getLocaleDateFromDateDigit,
    getOrder(itemId) {
      const order = this.orders.find(item => item.clientId === itemId)
      return order
    },
    editItem({ type, item, mod }) {
      this.$emit('show-modal', { type, item, mod })
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