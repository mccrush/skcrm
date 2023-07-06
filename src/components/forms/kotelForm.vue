<template>
  <div class="row">
    <!-- Тип котла -->
    <div class="col-4 mt-2 pe-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputKotelType"
          v-model="item.typek"
          @change="$emit('save-item')"
        >
          <option v-for="typek in dataKotelType" :key="typek" :value="typek">
            {{ typek }}
          </option>
        </select>
        <label for="inputKotelType">Тип котла</label>
      </div>
    </div>

    <!-- Мощность котла -->
    <div class="col-4 mt-2 ps-1 pe-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputPower"
          v-model="item.power"
          @change="$emit('save-item')"
        >
          <option v-for="power in dataPower" :key="power" :value="power">
            {{ power }}
          </option>
        </select>
        <label for="inputPower">Мощность</label>
      </div>
    </div>

    <!-- Отпаливаемая Площадь -->
    <div class="col-4 mt-2 ps-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputSquare"
          v-model="item.square"
          @change="$emit('save-item')"
        >
          <option v-for="square in dataSquare" :key="square" :value="square">
            {{ square }}
          </option>
        </select>
        <label for="inputSquare">Площадь</label>
      </div>
    </div>

    <!-- Размеры котла -->
    <div class="col-12 col-md-9 mt-2 pe-md-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputSize"
          v-model.trim="item.size"
          @change="$emit('save-item')"
        />
        <label for="inputSize">Размеры</label>
      </div>
    </div>

    <!-- Вес котла -->
    <div class="col-12 col-md-3 mt-2 ps-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputWeight"
          v-model.number="item.weight"
          @change="$emit('save-item')"
        />
        <label for="inputWeight">Вес</label>
      </div>
    </div>

    <!-- Прайс 3 -->
    <div class="col-12 col-md-4 mt-2 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputPrice3"
          v-model.number="item.price3"
          @change="$emit('save-item')"
        />
        <label for="inputPrice3">Прайс 3</label>
      </div>
    </div>

    <!-- Прайс 4 -->
    <div class="col-12 col-md-4 mt-2 ps-md-1 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputPrice4"
          v-model.number="item.price4"
          @change="$emit('save-item')"
        />
        <label for="inputPrice3">Прайс 4</label>
      </div>
    </div>

    <!-- Прайс 5 -->
    <div class="col-12 col-md-4 mt-2 ps-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputPrice5"
          v-model.number="item.price5"
          @change="$emit('save-item')"
        />
        <label for="inputPrice3">Прайс 5</label>
      </div>
    </div>

    <!-- Комментарий -->
    <div class="col-12 mt-2">
      <div class="form-floating">
        <textarea
          class="form-control form-control-sm border-0 h-auto"
          id="inputDescription"
          rows="4"
          v-model.trim="item.description"
          @change="$emit('save-item')"
        ></textarea>
        <label for="inputDescription">Комментарий</label>
      </div>
    </div>
  </div>
</template>

<script>
import {
  dataSourses,
  dataKotelType,
  dataPower,
  dataSquare
} from './../../data/dataForClient'

export default {
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  emits: ['save-item'],
  data() {
    return {
      dataSourses,
      dataKotelType,
      dataPower,
      dataSquare
    }
  }
}
</script>