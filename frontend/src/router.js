import {createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "./components/DefaultLayout.vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import SignUp from "./pages/SignUp.vue";
import Reception from "./pages/Reception.vue";
import NotFound from "./pages/NotFound.vue";
import Stock from "./pages/Stock.vue";
import Production from "./pages/Production.vue";
import useUserStore from "./store/user.js";

const routes=[
    {
    path:"/",
    component:DefaultLayout,
        children:[
            {path:'/',name:'Home',component:Home},
            {path:'/reception',name:'Reception',component:Reception},
            {path:'/production',name:'Production',component:Production},
            {path:'/stock',name:'Stock',component:Stock},
        ],
        beforeEnter:async (to,from,next)=>{
            try{
                const userStore=useUserStore();
                await userStore.fetchUser();
                next(); // enable access to the route
            }catch (err) {
                //console.error(("failed to fetch data :",err));
                next(false);//cancel navigation if data fetching fails
            }
        },
    },
    {
        path:'/:mathMatch(.*)*',
        name:'NotFound',
        component: NotFound,
    },
    {
    path:'/login',
        name:'Login',
        component: Login,
    },
    {
        path:'/signup',
        name:'SignUp',
        component: SignUp,
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
