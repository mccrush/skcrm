import { createStore } from 'vuex'
import realtime from './modules/realtime'
import admin from './modules/admin'
import user from './modules/user'
import loginMessage from './modules/loginMessage'
import mongo from './modules/mongo'

export default createStore({
  modules: {
    realtime,
    admin,
    user,
    loginMessage,
    mongo
  }
})