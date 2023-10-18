<template>
  <div>
    <div>
      <button class="btn" @click="showData">showData</button>
    </div>
    <div class="mt-2">
      <div v-for="item in testData" :key="item.id">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    testData() {
      return this.$store.getters.testData
    }
  },
  methods: {
    showData() {
      this.$store.dispatch('getData')
    }
  }
}
</script>