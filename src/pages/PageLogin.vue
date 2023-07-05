<template>
  <div class="row">
    <div class="col-12 col-md-5 m-auto p-3">
      <LoginForm />
    </div>

    <transition name="fade" mode="out-in">
      <LoginMessage
        v-if="showMessage"
        :message="loginMessage.text"
        :class="loginMessage.type"
      />
    </transition>
  </div>
</template>

<script>
import LoginForm from './../modules/login/LiginForm.vue'
import LoginMessage from './../modules/login/LoginMessage.vue'

export default {
  components: {
    LoginForm,
    LoginMessage
  },
  data() {
    return {
      showMessage: false
    }
  },
  computed: {
    loginMessage() {
      return this.$store.getters.loginMessage || ''
    },
    currentUserData() {
      return this.$store.getters.currentUserData
    }
  },
  watch: {
    loginMessage() {
      if (this.loginMessage) {
        this.showMessage = true
        setTimeout(() => {
          this.showMessage = false
          this.$store.commit('addMessage', 'null')
        }, 3600)
      }
    }
  }
}
</script>