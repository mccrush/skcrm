import './scss/styles.scss'

//import { Dropdown } from 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


import fireApp from './firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(fireApp)

let app

import { dataModels } from './data/dataModels'


onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }


  if (user) {
    console.log('main.js : Пользователь авторизован')
    store.commit('setCurrentUserId', user.uid)
  } else {
    console.log('main.js: Пользователь не авторизован. user = ', user)
    store.commit('setCurrentUserId', '')
  }

  // В будущем запрос данных сделать только для авторизованных
  dataModels.forEach(element => {
    store.dispatch('getItems', { type: element.type })
  })

})