import { createStore } from 'vuex'
import  axios  from 'axios'

export default createStore({
    state () {
        return {
            products: [],
            cart: [],
            searchQuery: ''
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}){
            return axios({
                method: "GET",
                url: 'https://products-shoes-5eef7-default-rtdb.europe-west1.firebasedatabase.app/products.json'
            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
        },
        ADD_TO_CART({ commit }, product) {
            commit('SET_CART', product)
        },
        DELETE_FROM_CART ({commit}, idx) {
            commit('REMOVE_FROM_CART', idx)
        },
        INCREMENT_CART_ITEM ({commit}, idx) {
            commit('INCREMENT', idx)
        },
        DECREMENT_CART_ITEM ({commit}, idx) {
            commit('DECREMENT', idx)
        },
        GET_SEARCH_QUERY({commit}, value) {
            commit('SET_SEARCH_QUERY', value)
        }
    },
    mutations: {
        SET_PRODUCTS_TO_STATE (state, products) {
            state.products = products
        },
        SET_CART (state, product) {
            if (state.cart.length) {
                let isProductExists = false
                state.cart.map(function (item) {
                  if (item.article === product.article) {
                    isProductExists = true
                    item.quantity++
                  }
                })
                if (!isProductExists) {
                  state.cart.push(product)
                }
              } else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART (state, idx) {
            state.cart.splice(idx, 1)
        },
        INCREMENT (state, idx) {
            state.cart[idx].quantity++
        },
        DECREMENT (state, idx) {
            if(state.cart[idx].quantity > 1) {
                state.cart[idx].quantity--
            } 
        },
        SET_SEARCH_QUERY (state, value) {
            state.searchQuery = value
        }
    },
    getters: {
        PRODUCTS (state) {
            return state.products
        },
        CART(state) {
            return state.cart
        },
        SEARCH_QUERY(state) {
            return state.searchQuery
        }
    }
})