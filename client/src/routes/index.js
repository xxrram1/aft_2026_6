import {createRouter,createWebHistory} from "vue-router";
import LoginView from "../pages/LoginView.vue";
import RegisterView from "../pages/RegisterView.vue";
import OverView from "../pages/OverView.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:OverView},
        {path:'/register',component:RegisterView},
        {path:'/login',component:LoginView},
    ]
})

export default router;