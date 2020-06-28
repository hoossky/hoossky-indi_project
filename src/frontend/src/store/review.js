import axios from 'axios'
import router from "@/router"
const state = {
    context : 'http://localhost:5000',
    searchWord : 'null',
    pageNumber: '0',
    reviews : [],
    pages : [],
    pager: {},
    list : [],
    item : {}
}

const actions = {
    async search({commit}) {
        axios.get(state.context+'/reviews/')
            .then(({data})=>{
                commit('SEARCH',data)
                router.push('/review')
            })
            .catch(()=>{
                alert('액션 실패')
            })
    },
    /*switch (searchWord) {
            case '리뷰 보기':
                commit('SEARCH')
                router.push("/review")
                break
        }*/
    /*async search({commit},searchWord) {
        alert("come")
        commit("SEARCH",searchWord)
        router.push('/review')
    },*/
    async transferPage({commit},payload){
        axios
            .get(`${state.context}/${payload.category}/${payload.searchWord}/${payload.pageNumber}`)
            .then(({data})=>{
                commit("TRANSFER",data)
            })
            .catch()
    },
    async retrieveOne({commit}, payload){
        axios
            .get(`${state.context}/${payload.category}/${payload.searchWord}`)
            .then(({data})=>{
                commit("DETAIL",data)
                router.push('/reviewDetail')
            })
            .catch()
    }
}
const mutations = {
    SEARCH(state,data){
        state.pager = data.pager
        state.list = data.list
        state.reviews = []
        state.count = data.count
        data.list.forEach(item=>{
            state.reviews.push({
                reviewId: item.reviewId,
                reviewTitle: item.reviewTitle,
                stars : item.stars,
                reviewDate: item.reviewDate
            })
        })
    },
    TRANSFER(state, data){
        state.list = []
        state.pages = []
        state.reviews = []
        data.list.forEach(item=>{
            state.reviews.push({
                reviewId: item.reviewId,
                reviewTitle: item.reviewTitle,
                stars : item.stars,
                reviewDate: item.reviewDate
            })
        })
        state.pager = data.pager
        let i = state.pager.startPage
        console.log(i)
        let arr = []
        for(;i<=state.pager.endPage;i++){
            arr.push(i+1)
        }

        state.pages = arr
        state.nowPage = data.pager.nowPage

    },
    DETAIL(state, data){
        state.item = data

    }
}

export default{
    name : 'review',
    namespaced : true,
    state,
    actions,
    mutations
}