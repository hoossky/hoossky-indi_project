import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/components/Home"
import Login from "@/components/Login"
import Register from "@/components/Register"
import Review from "@/components/Review"
import ReviewDetail from "../components/ReviewDetail";
Vue.use(VueRouter)
export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", component: Home },
        { path: "/login", component: Login },
        { path: "/register", component: Register },
        { path: "/review", component: Review },
        { path: "/reviewDetail", component: ReviewDetail }
    ]
})