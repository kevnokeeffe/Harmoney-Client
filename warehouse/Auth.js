// import axios from 'axios'
// import router from '../src/router/index'

const state = {
    token: localStorage.getItem('token') || '',
    user:{},
    status:''
}

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}