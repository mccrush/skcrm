<template>
  <div class="row">
    <!-- Название этапа -->
    <div class="col-6 col-md-3 mt-2 pe-1">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          :id="'inputTitle' + item.id"
          v-model.trim="item.title"
          @change="$emit('save-item', { item })"
        />
        <label :for="'inputTitle' + item.id">Название</label>
      </div>
      {{ item.id }}
    </div>

    <!-- Статус -->
    <div class="col-6 col-md-3 col-xl-1 mt-2 ps-1 pe-md-1">
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

    <!-- Позиция -->
    <div class="col-6 col-md-3 mt-2 ps-md-1 pe-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          :id="'inputPosition' + item.id"
          v-model.number="item.position"
          @change="$emit('save-item', { item })"
        />
        <label :for="'inputPosition' + item.id">Позиция</label>
      </div>
    </div>

    <!-- Цвет -->
    <div class="col-6 col-md-3 mt-2 ps-1">
      <div class="form-floating">
        <select
          class="form-select"
          :class="item.border"
          :id="'inputBorder' + item.id"
          v-model="item.border"
          @change="$emit('save-item', { item })"
        >
          <option v-for="border in borderColors" :key="border" :value="border">
            {{ border }}
          </option>
        </select>
        <label :for="'inputBorder' + item.id">Цвет</label>
      </div>
    </div>

    <!-- Комментарий -->
    <div class="col-10 col-xl-1 mt-2 pe-1">
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
    <div class="col-1 ps-1 pt-2">
      <BtnDelete
        class="btn-outline-danger"
        @click="$emit('remove-item', { item })"
      />
    </div>
  </div>
</template>

<script>
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
      borderColors: [
        'border-white',
        'border-light',
        'border-secondary',
        'border-info',
        'border-primary',
        'border-success',
        'border-danger',
        'border-warning',
        'border-dark'
      ]
    }
  }
}
</script>