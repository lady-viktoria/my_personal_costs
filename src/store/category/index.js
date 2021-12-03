export default{
    state: {
        categoryList:[],
    },
    mutations: {
        SET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList;
        },
    },
    getters: {
        categoryList: ({categoryList})=>categoryList,
    },
    actions: {
        fetchCategoryListData({commit}){
            setTimeout(()=> {
              const initialCategoryList = ['Food', 'Transport','Education', 'Sport'];
              commit('SET_CATEGORY_LIST', initialCategoryList);
            });
          }
    },
}