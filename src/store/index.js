import Vue from 'vue'
import Vuex from 'vuex'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  //состояние наших данных, с которыми будем работать (data)
  state: {
    paymentsList: [],
    // categoryList:[],
  },
  //изменить данные
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList){
      state.paymentsList=paymentsList;
    },
    ADD_PAYMENT_DATA(state, payment){
      state.paymentsList.push(payment);
    },
    // SET_CATEGORY_LIST(state, categoryList) {
    //   state.categoryList = categoryList;
    // },
  },
  //получить данные из state, основанные на текущем состоянии (computed)
  getters: {
    // 1 способ:
    // paymentsList(state){
    //   return state.paymentsList;
    // },

    // 2 способ:
    paymentsList: ({paymentsList})=>paymentsList,
    // categoryList: ({categoryList})=>categoryList,
  },
  // получить данные с сервера
  actions: {
    fetchData({commit}){
      setTimeout(()=> {
        const initialPaymentList = [
          {
            date: "28.03.2021",
            category: "Food",
            value: 169,
          },
          {
            date: "20.03.2021",
            category: "Sport",
            value: 400,
          },
          {
            date: "26.03.2021",
            category: "Internet",
            value: 300,
          },
          {
            date: "28.03.2021",
            category: "Food",
            value: 169,
          },
          {
            date: "20.03.2021",
            category: "Sport",
            value: 400,
          },
          {
            date: "26.03.2021",
            category: "Internet",
            value: 300,
          }];
        commit('SET_PAYMENTS_LIST', initialPaymentList);
      });
    },
    // fetchCategoryListData({commit}){
    //   setTimeout(()=> {
    //     const initialCategoryList = ['Food', 'Transport','Education', 'Sport'];
    //     commit('SET_CATEGORY_LIST', initialCategoryList);
    //   });
    // }
  },
  // собирать модульный store
  modules: {
    category,
  }
})
