<template>
  <div class="row bg-white rounded mb-2 mb-xl-1 p-2 p-xl-0 pb-xl-1">
    <!-- Имя пользователя -->
    <div class="col-12 col-md-4 col-xl-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          :id="'inputName' + item.id"
          v-model.trim="item.name"
          @change="$emit('save-item', { item })"
        />
        <label :for="'inputName' + item.id">Имя</label>
      </div>
    </div>

    <!-- Email -->
    <div class="col-12 col-md-4 col-xl-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          :id="'inputEmail' + item.id"
          v-model.trim="item.email"
          @change="$emit('save-item', { item })"
        />
        <label :for="'inputEmail' + item.id">Email</label>
      </div>
    </div>

    <!-- Статус -->
    <div class="col-4 col-xl-1 pe-1">
      <div class="form-floating">
        <select
          class="form-select"
          :id="'inputStatus' + item.id"
          v-model="item.status"
          @change="$emit('save-item', { item })"
        >
          <option value="active">Активный</option>
          <option value="archive">В архиве</option>
        </select>
        <label :for="'inputStatus' + item.id">Статус</label>
      </div>
    </div>

    <!-- Доступ -->
    <div class="col-4 col-xl-1 pt-1 ps-1">
      <div class="form-floating">
        <input
          type="number"
          min="1"
          max="3"
          class="form-control form-control-sm"
          :id="'inputAccess' + item.id"
          v-model.number="item.access"
          @change="$emit('save-item', { item })"
        />
        <label :for="'inputAccess' + item.id">Доступ</label>
      </div>
    </div>

    <!-- Должность -->
    <div class="col-4 col-xl-1 ps-md-1 pe-0 pe-md-2">
      <div class="form-floating">
        <select
          class="form-select"
          :id="'inputDoljnost' + item.id"
          v-model="item.doljnost"
          @change="$emit('save-item', { item })"
        >
          <option
            v-for="doljnost in dataDoljnosts"
            :key="doljnost"
            :value="doljnost"
          >
            {{ doljnost }}
          </option>
        </select>
        <label :for="'inputDoljnost' + item.id">Должность</label>
      </div>
    </div>

    <!-- Закреплен за этапами -->
    <div class="col-12 col-md-4">
      <div class="d-flex">
        <div class="form-floating">
          <select
            class="form-select"
            :id="'inputStages' + item.id"
            v-model="stageSelect"
          >
            <option
              v-for="stage in stageProduction"
              :key="stage.id"
              :value="stage.id"
            >
              {{ stage.title }}
            </option>
          </select>
          <label :for="'inputStages' + item.id">Этапы</label>
        </div>
        <button class="btn btn-success" @click="addStage">+</button>
      </div>
      <ul class="list-group">
        <li
          v-for="stage in item.stages"
          :key="stage"
          class="list-group-item d-flex justify-content-between align-items-center p-0 ps-1"
        >
          <span>{{ getStageTitle(stage) }}</span>
          <button class="btn btn-sm btn-light" @click="removeStage(stage)">
            X
          </button>
        </li>
      </ul>
    </div>

    <!-- Комментарий -->
    <div class="col-11 col-xl-4 mt-0">
      <div class="form-floating">
        <textarea
          class="form-control form-control-sm border-0 h-auto"
          :id="'inputDescription' + item.id"
          rows="1"
          v-model.trim="item.description"
          @change="$emit('save-item', { item })"
        ></textarea>
        <!-- <label for="inputDescription">Комментарий</label> -->
      </div>
    </div>

    <!-- Кнопка удалить -->
    <div class="col-1 pt-2">
      <BtnDelete
        class="btn-outline-danger"
        @click="$emit('remove-item', { item })"
      />
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'
import { dataDoljnosts } from './../../data/dataDoljnosts'
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
  emits: ['save-item', 'remove-item'],
  data() {
    return {
      dataDoljnosts,
      stageSelect: ''
    }
  },
  computed: {
    stageProduction() {
      return sortMethod(this.$store.getters.stageProduction, 'asc', 'position')
    }
  },
  methods: {
    getStageTitle(stage) {
      return this.stageProduction.find(item => item.id === stage).title
    },
    addStage() {
      if (!this.item.stages) this.item.stages = []
      // console.log('this.item.stages', this.item.stages)
      // console.log('this.stageSelect', this.stageSelect)
      if (this.stageSelect && !this.item.stages.includes(this.stageSelect)) {
        this.item.stages.push(this.stageSelect)
        this.$emit('save-item', { item: this.item })
      }
    },
    removeStage(stage) {
      this.item.stages = this.item.stages.filter(item => item !== stage)
      this.$emit('save-item', { item: this.item })
    }
  }
}
</script>