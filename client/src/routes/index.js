import {createRouter,createWebHistory} from "vue-router";
import LoginView from "../pages/LoginView.vue";
import RegisterView from "../pages/RegisterView.vue";
import OverView from "../pages/OverView.vue";

import ChagPass from "../components/officer/ChagPass.vue";
import CreateUser from "../components/officer/CreateUser.vue";
import MatchQuiz from "../components/officer/MatchQuiz.vue";
import MatchView from "../components/officer/MatchView.vue";
import ReportView from "../components/officer/ReportView.vue";
import RoleView from "../components/officer/RoleView.vue";
import TimeView from "../components/officer/TimeView.vue";
import TopicView from "../components/officer/TopicView.vue";
import UserView from "../components/user/UserView.vue";
import ChagPassvue from "../pages/ChagPassvue.vue";
import { jwtDecode } from "jwt-decode";
import BossView from "../components/boss/BossView.vue";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/',component:OverView},
        {path:'/register',component:RegisterView},
        {path:'/login',component:LoginView},
        {path:'/chagpassvue/:id',name:'changpassvue',component: ChagPassvue},
        //officer
        {path:'/users',name:'',component:UserView, meta:{role:'users'}},
        {path:'/boss',name:'',component:BossView, meta:{role:'boss'}},
        {path:'/officer/chagpass/:id',name:'chagpass',component:ChagPass, meta:{role:'officer'}},
        {path:'/officer/createuser',name:'',component:CreateUser, meta:{role:'officer'}},
        {path:'/officer/matchquiz',name:'',component:MatchQuiz, meta:{role:'officer'}},
        {path:'/officer/match',name:'',component:MatchView, meta:{role:'officer'}},
        {path:'/officer/report',name:'',component:ReportView, meta:{role:'officer'}},
        {path:'/officer/role',name:'',component:RoleView, meta:{role:'officer'}},
        {path:'/officer/time',name:'',component:TimeView, meta:{role:'officer'}},
        {path:'/officer',name:'',component:TopicView, meta:{role:'officer'}},
    ]
})

const getrole = () => {
    const token = localStorage.getItem('authtoken')
    if(!token) return null
    try{
        return jwtDecode(token).role
    } catch {
        localStorage.removeItem('authtoken')
        return null
    }
}

router.beforeEach((to)=>{
    if (to.meta.role && to.meta.role !== getrole()) return '/login'
})

export default router;