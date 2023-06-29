import fireApp from './../../firebase'
import { getFirestore, doc, setDoc, updateDoc, deleteDoc, collection, query, getDocs } from "firebase/firestore"
const db = getFirestore(fireApp)

export default {
  state: {
    about: [],
    client: [],
    naprav: [],
    naprav_vid: [],
    partner: [],
    product: [],
    resh: [],

    loading: false,
    uid: false
  },

  mutations: {
    removeItem(state, { item }) {
      state[item.type] = state[item.type].filter(el => el.id !== item.id)
    },
    addItem(state, { item }) {
      state[item.type].push(item)
    },
    setItems(state, { type, items }) {
      state[type] = items
    },
    updateItem(state, { item }) {
      const index = state[item.type].findIndex(el => el.id === item.id)
      state[item.type][index] = item
    },
    updateLoadingStatus(state, value) {
      state.loading = value
    },
  },

  actions: {
    async removeItem({ commit }, { item }) {
      try {
        //commit('updateLoadingStatus', true)
        commit('removeItem', { item })
        await deleteDoc(doc(db, item.type, item.id))
        //commit('updateLoadingStatus', false)
        console.log('admin.js: removeItem(): Данные удалены')
      } catch (error) {
        console.error('admin.js: removeItem(): error', error)
      }
    },

    async addItem({ commit }, { item }) {
      try {
        //commit('updateLoadingStatus', true)
        commit('addItem', { item })
        await setDoc(doc(db, item.type, item.id), item)
        //commit('updateLoadingStatus', false)
        console.log('admin.js: addItem(): Данные добавлены')
      } catch (error) {
        console.error('admin.js: addItem(): error', error)
      }
    },

    async updateItem({ commit }, { item }) {
      try {
        //commit('updateLoadingStatus', true)
        commit('updateItem', { item })
        const itemRef = doc(db, item.type, item.id)
        await updateDoc(itemRef, item)
        //commit('updateLoadingStatus', false)
        console.log('admin.js: a updateItem(): Данные обновлены')
      } catch (error) {
        console.error('admin.js: updateItem(): error', error)
      }
    },

    async getItems({ commit }, { type }) {
      commit('updateLoadingStatus', true)
      let tempArray = []
      const q = query(collection(db, type))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        tempArray.push(doc.data())
      })
      commit('setItems', { type, items: tempArray })
      commit('updateLoadingStatus', false)
    }
  },

  getters: {
    about: state => state.about,
    client: state => state.client,
    naprav: state => state.naprav,
    naprav_vid: state => state.naprav_vid,
    partner: state => state.partner,
    product: state => state.product,
    resh: state => state.resh,

    loading: state => state.loading,
    uid: state => state.uid,
  }
}

// Возможно достаточно всего 7 моделей
// можно избавится от razdel, version
// подумать можм ли обойтись без config?

// логично, гетерры сделать динамичными
// из массива dataModels