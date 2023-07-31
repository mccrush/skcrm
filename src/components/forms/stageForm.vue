<template>
  <div class="row bg-white rounded mb-3 mb-xl-1 p-2 p-xl-0 pb-xl-1">
    <!-- Название этапа -->
    <div class="col-12 col-md-3">
      <div class="form-floating">
        <input
          type="text"
          class="form-control form-control-sm"
          :id="'inputTitle' + item.id"
          v-model.trim="item.title"
          @change="$emit('save-item', { item })"
        />
        <label :for="'inputTitle' + item.id">Название</label>
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

    <!-- Позиция -->
    <div class="col-4 col-xl-1 pt-1 ps-1">
      <div class="form-floating">
        <input
          type="number"
          class="form-control form-control-sm"
          :id="'inputPosition' + item.id"
          v-model.number="item.position"
          @change="$emit('save-item', { item })"
        />
        <label :for="'inputPosition' + item.id">Позиция</label>
      </div>
    </div>

    <!-- Цвет -->
    <div class="col-4 ps-md-1 pe-0 pe-md-2">
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
    <div class="col-12 col-xl-1 mt-0">
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
  </div>
</template>

<script>
export default {
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