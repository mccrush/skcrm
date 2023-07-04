import { createStore } from 'vuex'
import admin from './modules/admin'
import user from './modules/user'
import loginMessage from './modules/loginMessage'

export default createStore({
  modules: {
    admin,
    user,
    loginMessage
  }
})