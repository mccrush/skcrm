<template>
  <table class="table table-striped table-light shadow-sm small">
    <thead>
      <tr>
        <th scope="col" class="small ps-3" width="20%">
          Город <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="small" width="15%">
          Имя <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center small" width="12%">
          Тип <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center small" width="12%">
          Мощ <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center small lh-lg" width="15%">Телефон</th>
        <th scope="col" class="text-center small" width="10%">
          Источ <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center small" width="10%">
          Дата <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center" width="6%">---</th>
      </tr>
    </thead>
    <tbody>
      <ListTableRow
        v-for="item in listItems"
        :key="item.id"
        :item="item"
        :city="item.city"
        :name="item.name"
        :typek="item.typek"
        :power="item.power"
        :phone="item.phone"
        :sours="item.sours"
        :dateLastContact="getLocaleDateFromDateDigit(item.dateCreate)"
        @edit-item="editItem"
      />
    </tbody>
  </table>
</template>

<script>
import { getLocaleDateFromDateDigit } from './../../helpers/getDateFormat'
import ListTableRow from './ListTableRow.vue'

export default {
  components: {
    ListTableRow
  },
  props: {
    listItems: Array
  },
  emits: ['show-modal'],
  methods: {
    getLocaleDateFromDateDigit,
    editItem({ type, item }) {
      this.$emit('show-modal', { type, item, mod: 'edit' })
    }
  }
}
</script>

<style scoped>
/* th {
  border: 1px solid black;
} */
</style>