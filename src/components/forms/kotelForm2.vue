<template>
  <div class="row bg-white rounded mb-3 mb-xl-1 p-2 p-xl-0 pb-xl-1">
    <!-- Тип котла -->
    <div class="col-4 col-md-2 col-xl-1 mt-1 pe-1">
      <div class="form-floating">
        <select
          class="form-select"
          :id="'inputKotelType' + item.id"
          v-model="item.typek"
          @change="$emit('save-item')"
        >
          <option v-for="typek in dataKotelType" :key="typek" :value="typek">
            {{ typek }}
          </option>
        </select>
        <label :for="'inputKotelType' + item.id">Тип котла</label>
      </div>
    </div>

    <!-- Мощность котла -->
    <div class="col-4 col-md-2 col-xl-1 mt-1 ps-1 pe-1">
      <div class="form-floating">
        <select
          class="form-select"
          :id="'inputPower' + item.id"
          v-model="item.power"
          @change="$emit('save-item')"
        >
          <option v-for="power in dataPower" :key="power" :value="power">
            {{ power }}
          </option>
        </select>
        <label :for="'inputPower' + item.id">Мощность</label>
      </div>
    </div>

    <!-- Отпаливаемая Площадь -->
    <div class="col-4 col-md-2 col-xl-1 mt-1 ps-1 pe-md-1">
      <div class="form-floating">
        <select
          class="form-select"
          :id="'inputSquare' + item.id"
          v-model="item.square"
          @change="$emit('save-item')"
        >
          <option v-for="square in dataSquare" :key="square" :value="square">
            {{ square }}
          </option>
        </select>
        <label :for="'inputSquare' + item.id">Площадь</label>
      </div>
    </div>

    <!-- Размеры котла -->
    <div class="col-6 col-md-4 col-xl-1 mt-1 ps-md-1 pe-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          :id="'inputSize' + item.id"
          v-model.trim="item.size"
          @change="$emit('save-item')"
        />
        <label :for="'inputSize' + item.id">Размеры</label>
      </div>
    </div>

    <!-- Бункер -->
    <div class="col-3 col-md-2 col-xl-1 mt-1 ps-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          :id="'inputBunker' + item.id"
          v-model.number="item.bunker"
          @change="$emit('save-item')"
        />
        <label :for="'inputBunker' + item.id">Бункер</label>
      </div>
    </div>

    <!-- Вес котла -->
    <div class="col-3 col-md-2 col-xl-1 mt-1 ps-1 ps-md-2 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          :id="'inputWeight' + item.id"
          v-model.number="item.weight"
          @change="$emit('save-item')"
        />
        <label :for="'inputWeight' + +item.id">Вес</label>
      </div>
    </div>

    <!-- Автоматика -->
    <div class="col-12 col-md-4 col-xl-2 mt-1 ps-md-1 pe-md-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          :id="'inputAutomation' + item.id"
          v-model.trim="item.automation"
          @change="$emit('save-item')"
        />
        <label :for="'inputAutomation' + item.id">Автоматика</label>
      </div>
    </div>

    <!-- Прайс 3 -->
    <div class="col-4 col-md-2 col-xl-1 mt-1 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          :id="'inputPrice3' + item.id"
          v-model.number="item.price3"
          @change="$emit('save-item')"
        />
        <label :for="'inputPrice3' + item.id">Прайс 3</label>
      </div>
    </div>

    <!-- Прайс 4 -->
    <div class="col-4 col-md-2 col-xl-1 mt-1 ps-md-1 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          :id="'inputPrice4' + item.id"
          v-model.number="item.price4"
          @change="$emit('save-item')"
        />
        <label :for="'inputPrice4' + item.id">Прайс 4</label>
      </div>
    </div>

    <!-- Прайс 5 -->
    <div class="col-4 col-md-2 col-xl-1 mt-1 ps-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          :id="'inputPrice5' + item.id"
          v-model.number="item.price5"
          @change="$emit('save-item')"
        />
        <label :for="'inputPrice5' + item.id">Прайс 5</label>
      </div>
    </div>

    <!-- Комментарий -->
    <div class="col-12 col-xl-1 mt-0">
      <div class="form-floating">
        <textarea
          class="form-control form-control-sm border-0 h-auto"
          :id="'inputDescription' + item.id"
          rows="1"
          v-model.trim="item.description"
          @change="$emit('save-item')"
        ></textarea>
        <!-- <label for="inputDescription">Комментарий</label> -->
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