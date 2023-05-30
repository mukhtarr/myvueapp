import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    // state : to define the data
    state: {
        count: 1,
        person: {
            name: 'john',
            age: 18
        },
        postData: {

        }
    },
    // mutations : to change the data
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        updatePostData(state, postData) {
            state.postData = postData
        }
    },
    // actions : for calling API's
    actions: {
        async getPostAPICall({ commit }) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/3`)
            const data = response.data
            commit('updatePostData', data)
        }
    },
    // getters : to represent the data 
    getters: {
        personName(state) {
            return state.person.name
        },
        personAge(state) {
            return state.person.age
        },
        doubleCount(state) {
            return `${state.count} - ${state.count}`
        },
        squareCount(state) {
            return `${state.count * state.count} `
        }
    }
})

export default store;