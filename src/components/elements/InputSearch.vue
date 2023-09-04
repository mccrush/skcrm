<template>
  <div class="input-group">
    <input
      type="text"
      id="inputSearchList"
      :value="modelValue"
      class="form-control form-control-sm"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button
      class="btn btn-light p-0 ps-3 pe-3"
      @click="$emit('update:modelValue', '')"
    >
      x
    </button>
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'placeholder'],
  emits: ['update:modelValue']
}
</script>