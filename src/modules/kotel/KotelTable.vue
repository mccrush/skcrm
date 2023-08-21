<template>
  <table class="table table-striped table-light shadow-sm small">
    <thead>
      <tr>
        <th scope="col" class="text-center small ps-3" width="5%">
          Тип
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('typek')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small" width="10%">
          Мощ.
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('power')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small" width="10%">
          Мет.
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('metall')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small" width="10%">
          Площ.
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('square')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small lh-lg" width="15%">
          Разм (ш*г*в)
        </th>
        <th scope="col" class="text-center small lh-lg" width="10%">Бункер</th>
        <th scope="col" class="text-center small lh-lg" width="10%">Цена</th>
        <th scope="col" class="text-center small" width="10%">
          Вес
          <button
            class="btn btn-sm btn-light p-0 ps-2 pe-2"
            @click="setSortMethod('weight')"
          >
            ⇅
          </button>
        </th>
        <th scope="col" class="text-center small lh-lg" width="15%">Автом.</th>
        <th scope="col" class="text-center" width="5%">---</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in listItems" :key="item.id" class="text-center">
        <td>{{ item.typek }}</td>
        <td>{{ item.power }}</td>
        <td>{{ item.metall }}</td>
        <td>{{ item.square }}</td>
        <td>{{ item.size }}</td>
        <td>{{ item.bunker }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.weight }}</td>
        <td class="lh-1">{{ item.automation }}</td>
        <td>
          <BtnEditSmallWhite
            @click="$emit('edit-item', { type: item.type, item, mod: 'edit' })"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import BtnEditSmallWhite from './../../components/buttons/BtnEditSmallWhite.vue'

export default {
  components: {
    BtnEditSmallWhite
  },
  props: {
    listItems: Array
  },
  emits: ['edit-item']
}
</script>