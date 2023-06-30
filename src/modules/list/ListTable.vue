<template>
  <table class="table table-striped table-light shadow-sm">
    <thead>
      <tr>
        <th scope="col" class="ps-3">
          Город <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col">
          Имя <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center">
          Тип <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center">
          Мощность <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center">Телефон</th>
        <th scope="col" class="text-center">
          Источник <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
        <th scope="col" class="text-center">
          Дата <button class="btn btn-sm btn-light p-0 ps-2 pe-2">⇅</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <ListTableRow
        v-for="item in listItems"
        :key="item.id"
        :city="item.city"
        :name="item.name"
        :typek="item.typek"
        :power="item.power"
        :phone="item.phone"
        :sours="item.sours"
        :dateLastContact="getLocaleDateFromDateDigit(item.dateCreate)"
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
  methods: {
    getLocaleDateFromDateDigit
  }
}
</script>