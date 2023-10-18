export default {
  state: {
    testData: []
  },
  mutations: {
    setData(state, { type, items }) {
      state[type] = items
    }
  },
  actions: {
    getData({ commit }) {
      // Здесь должен быть запрос на сервер к БД
      const tempArray = [
        { id: '1', title: 'item 1' },
        { id: '3', title: 'item 2' },
      ]
      commit('setData', { type: 'testData', items: tempArray })
    }
  },
  getters: {
    testData: state => state.testData
  }
}