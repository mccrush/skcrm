<template>
  <tr>
    <td v-if="client">
      {{ dateCreate }}<br />
      <strong>{{ client.city }}</strong>
      <div class="lh-1 small">
        дней с момента заказа:
        <span
          :class="{
            'text-warning fw-bold': lastDays > 20,
            'text-danger fw-bold': lastDays > 30
          }"
          >{{ lastDays }}</span
        >
      </div>
    </td>
    <td v-if="kotel" class="text-center">
      {{ kotel.typek + '-' + kotel.power + ',' }}
      <br />{{ kotel.metall + ' мм' }}
    </td>
    <td class="text-center">{{ petliPos }}</td>
    <td class="text-center">{{ bunkerPos }}</td>
    <td class="text-center">{{ item.prePrice * 1000 }}</td>
    <td v-if="client" class="lh-1">
      {{ client.phone.substr(0, 7)
      }}<strong>{{ client.phone.substr(7) }}</strong> <br /><br />
      <small>
        {{ client.name }}
      </small>
    </td>
    <td class="lh-sm">
      <small>{{ item.description }}</small>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: Object,
    dateCreate: String,
    kotel: Object,
    petliPos: String,
    bunkerPos: String,
    client: Object,
    lastDays: Number
  }
}
</script>