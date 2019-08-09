import { addAddress } from '@/service'

const state = {

}

const mutations = {

}

const actions = {
  async addAddress({ commit }, payload) {
    return async (resolve, reject) => {
      const res = await addAddress(payload)
      // resolve(res)
    }

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}