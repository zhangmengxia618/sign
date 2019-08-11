import { getInterviewList } from '@/service'
import moment from 'moment'

const state = {
  interviewList: []
}

const mutations = {
  ivList(state, payload) {
    payload.data.forEach((item, i) => {
      if (item.address.includes('{')) {
        item.address=JSON.parse(item.address).address
      }
      item.start_time=moment(Number(item.start_time)).format("YYYY-MM-DD hh:mm")
    })

    state.interviewList = payload.data;
  }
}

const actions = {
  async getIVList({ commit }, payload) {
    // console.log('pay', payload)
    let data = await getInterviewList(payload)
    // console.log(data)
    if (data.code === 0) {
      commit('ivList', data)

    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}