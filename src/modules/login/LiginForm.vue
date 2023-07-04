<template>
  <div class="rounded-4 bg-white shadow-sm mt-5 p-3">
    <h5 class="text-center">Авторизация</h5>
    <label for="email">Email</label>
    <br />
    <input
      type="text"
      class="form-control"
      id="email"
      required
      v-model="email"
      placeholder="example@mail.ru"
    />
    <!-- -->
    <br />
    <label for="password">Password</label>
    <div class="input-group">
      <input
        :type="showPass ? 'text' : 'password'"
        class="form-control"
        id="password"
        required
        v-model="password"
        maxlength="20"
        @keyup.enter="login"
      />

      <BtnShowPass v-if="!showPass" @click="showPass = !showPass" />
      <BtnHidePass v-else @click="showPass = !showPass" />
    </div>

    <BtnLogin class="w-100 mt-3" @click="login" />
    <BtnResetPass class="w-100 mt-2" @click="resetPass" />
  </div>
</template>


<script>
import BtnShowPass from './interface/BtnShowPass.vue'
import BtnHidePass from './interface/BtnHidePass.vue'
import BtnLogin from './interface/BtnLogin.vue'
import BtnResetPass from './interface/BtnResetPass.vue'

export default {
  components: {
    BtnShowPass,
    BtnHidePass,
    BtnLogin,
    BtnResetPass
  },
  data() {
    return {
      email: '',
      password: '',
      showPass: false
    }
  },
  methods: {
    async login() {
      const formData = {
        email: this.email,
        password: this.password
      }

      if (this.email && this.password) {
        try {
          const res = await this.$store.dispatch('logIn', formData)
          if (res) this.$router.push('/')
        } catch (err) {
          if (err.code === 'auth/invalid-email') {
            this.$store.commit('addMessage', 'lee')
          } else if (err.code === 'auth/invalid-password') {
            this.$store.commit('addMessage', 'lpi')
          } else if (err.code === 'auth/wrong-password') {
            this.$store.commit('addMessage', 'lpw')
          } else if (err.code === 'auth/user-not-found') {
            this.$store.commit('addMessage', 'lun')
          } else if (err.code === 'auth/too-many-requests') {
            this.$store.commit('addMessage', 'tmr')
          } else {
            this.$store.commit('addMessage', 'err'),
              console.log('Ошибка:', err.code)
          }
        }
      } else {
        this.$store.commit('addMessage', 'fin')
      }
    },
    resetPass() {
      const formData = {
        email: this.email
      }
      if (this.email) {
        this.$store.dispatch('resetPass', formData)
      } else {
        this.$store.commit('addMessage', 'fin')
      }
    }
  }
}
</script>