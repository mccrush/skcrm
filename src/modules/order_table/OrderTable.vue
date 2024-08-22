<template>
  <div class="table-responsive p-2">
    <table class="table table-striped table-bordered">
      <thead>
        <tr class="lh-1 align-middle">
          <th scope="col" class="w-100 text-center">Дата заказа</th>
          <th scope="col" class="w-100 small text-center">
            <small>А - Авт.</small><br /><small>П - Пол.авт.</small>
          </th>
          <th scope="col" class="w-100 text-center">Навесы</th>
          <th scope="col" class="w-100 text-center">Бункер</th>
          <th scope="col" class="w-100 small text-center">Пред-та, ₽</th>
          <th scope="col" class="w-100 text-center">Контакты</th>
          <th scope="col" class="w-300 text-center">Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <OrderRow
          v-for="item in sortItems"
          :key="item.id"
          :item="item"
          :dateCreate="getDateCreate(item.dateCreate)"
          :kotel="getKotel(item.kotelId)"
          :petliPos="getNavesy(item.petliPos)"
          :bunkerPos="getBunker(item.bunkerPos)"
          :client="getClient(item.clientId)"
          :lastDays="getCountLastDays(item.dateCreate, item.dateFinish)"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'
import { getCountLastDays } from './../../helpers/getCountLastDays'
import { getLocaleDateFromDateDigit } from './../../helpers/getDateFormat'
import OrderRow from './OrderRow.vue'

export default {
  components: { OrderRow },
  props: {
    listItems: Array,
    user: Object
  },
  computed: {
    clients() {
      return this.$store.getters.client
    },
    kotels() {
      return this.$store.getters.kotel
    },
    filterItems() {
      return this.listItems.filter(item => item.stageId !== '1693803313691')
    },
    sortItems() {
      return sortMethod(this.filterItems, 'asc', 'dateCreate')
    }
  },
  methods: {
    getCountLastDays,
    getDateCreate(dateCreate) {
      return getLocaleDateFromDateDigit(dateCreate)
    },
    getKotel(kotelId) {
      const kotel = this.kotels.find(item => item.id === kotelId)
      return kotel
    },
    getNavesy(petliPos) {
      if (petliPos === 'left') {
        return 'левые'
      } else if (petliPos === 'right') {
        return 'правые'
      }
      return ''
    },
    getBunker(bunkerPos) {
      if (bunkerPos === 'left') {
        return 'слева'
      } else if (bunkerPos === 'right') {
        return 'справа'
      } else if (bunkerPos === 'around') {
        return 'с обеих'
      }
      return ''
    },
    getClient(clientId) {
      const client = this.clients.find(item => item.id === clientId)
      return client
    }
  }
}
</script>

<style scoped>
.w-100 {
  min-width: 100px !important;
}
.w-300 {
  min-width: 300px !important;
}
</style>