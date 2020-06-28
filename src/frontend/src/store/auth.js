import router from '../router'
import axios from "axios";

const state = {
    context : 'http://localhost:5000/'

}

const actions = {
    async login(commit){
        axios.get(state.context+'/reviews/')
            .then(({data})=>{
                commit('SEARCH',data)
                router.push('/review')
            })
            .catch(()=>{
                alert('액션 실패')
            })
    },
    async join(context, user) {
        alert("회원가입 하기" + user)
    }
}

const mutations = {

}



export default{
    name : 'auth',
    namespaced : true,
    state,
    actions,
    mutations,
}