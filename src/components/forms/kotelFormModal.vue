<template>
  <div class="row bg-light pt-2">
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
        <label for="inputPower">Мощность кВт</label>
      </div>
    </div>

    <!-- Толщина метала -->
    <div class="col-4 mt-2 ps-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputMetall"
          v-model.number="item.metall"
          @change="$emit('save-item')"
        >
          <option v-for="metall in dataMetall" :key="metall" :value="metall">
            {{ metall }}
          </option>
        </select>
        <label for="inputMetall">Металл мм</label>
      </div>
    </div>

    <!-- Отпаливаемая Площадь -->
    <div class="col-4 mt-2 pe-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputSquare"
          v-model.number="item.square"
          @change="$emit('save-item')"
        >
          <option v-for="square in dataSquare" :key="square" :value="square">
            {{ square }}
          </option>
        </select>
        <label for="inputSquare">Площадь м2</label>
      </div>
    </div>

    <!-- Размеры котла -->
    <div class="col-4 mt-2 ps-1 pe-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputSize"
          v-model.trim="item.size"
          @change="$emit('save-item')"
        />
        <label for="inputSize">Размеры мм</label>
      </div>
    </div>

    <!-- Бункер -->
    <div class="col-4 mt-2 ps-1">
      <div class="form-floating">
        <select
          class="form-select"
          id="inputBunker"
          v-model.number="item.bunker"
          @change="$emit('save-item')"
        >
          <option v-for="bunker in dataObyom" :key="bunker" :value="bunker">
            {{ bunker }}
          </option>
        </select>
        <label for="inputBunker">Бункер л</label>
      </div>
    </div>

    <!-- Прайс -->
    <div class="col-12 col-md-4 mt-2 pe-md-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputPrice"
          v-model.number="item.price"
          @change="$emit('save-item')"
        />
        <label for="inputPrice">Прайс тыс.</label>
      </div>
    </div>

    <!-- Вес котла -->
    <div class="col-4 mt-2 ps-1 pe-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          id="inputWeight"
          v-model.number="item.weight"
          @change="$emit('save-item')"
        />
        <label for="inputWeight">Вес кг</label>
      </div>
    </div>

    <!-- Автоматика -->
    <div class="col-12 col-md-4 mt-2 ps-md-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          id="inputAutomation"
          v-model.trim="item.automation"
          @change="$emit('save-item')"
        />
        <label for="inputAutomation">Автоматика</label>
      </div>
    </div>

    <!-- Прайс 3 -->
    <!-- <div class="col-12 col-md-4 mt-2 pe-md-1">
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
    </div> -->

    <!-- Прайс 4 -->
    <!-- <div class="col-12 col-md-4 mt-2 ps-md-1 pe-md-1">
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
    </div> -->

    <!-- Прайс 5 -->
    <!-- <div class="col-12 col-md-4 mt-2 ps-md-1">
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
    </div> -->

    <!-- Комментарий -->
    <div class="col-12 mt-2" :class="{ 'mb-3': !mod }">
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

    <!-- Футер -->
    <div
      v-if="mod === 'edit'"
      class="col-12 d-flex justify-content-end border-top border-white rounded-bottom bg-light-subtle mt-3 pt-2 pb-2"
    >
      <BtnDelete class="btn-sm text-secondary" />
    </div>
  </div>
</template>

<script>
import {
  dataKotelType,
  dataPower,
  dataMetall,
  dataSquare,
  dataObyom
} from './../../data/dataForClient'

import BtnDelete from './../buttons/BtnDelete.vue'

export default {
  components: {
    BtnDelete
  },
  props: {
    item: {
      type: Object,
      require: true
    },
    mod: String
  },
  emits: ['save-item'],
  data() {
    return {
      dataKotelType,
      dataPower,
      dataMetall,
      dataSquare,
      dataObyom
    }
  }
}
</script>