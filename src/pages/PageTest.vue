<template>
  <div>
    <div>
      <button class="btn" @click="connectWS">Connect WS</button>
    </div>
  </div>
</template>

<script>
import { websocket } from './../api/websocket'

export default {
  methods: {
    connectWS() {
      const res = websocket()
      console.log('res = ', res)
    }
  }
}
</script>