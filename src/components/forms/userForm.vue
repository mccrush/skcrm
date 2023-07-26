<template>
  <div class="row bg-white rounded mb-3 mb-xl-1 p-2 p-xl-0 pb-xl-1">
    <!-- Имя пользователя -->
    <div class="col-12 col-md-6">
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
    <div class="col-12 col-md-6">
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
          class="form-control form-control-sm"
          :id="'inputAccess' + item.id"
          v-model.number="item.access"
          @change="$emit('save-item', { item })"
        />
        <label :for="'inputAccess' + item.id">Доступ</label>
      </div>
    </div>

    <!-- Должность -->
    <div class="col-4 ps-md-1 pe-0 pe-md-2">
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

    <!-- Комментарий -->
    <div class="col-11 mt-0">
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
      dataDoljnosts
    }
  }
}
</script>