import {createRouter,createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import dynamic from './components/dynamic.vue'
import tab1 from './components/pages/tab1.vue'
import tab2 from './components/pages/tab2.vue'


const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:()=>import('./components/GF.vue')},
        
        {
            path:'/about',component:About,
            children:[
                {path:':id',component:tab1,props:true,name:"tab1"}
            ]
        },
        {path:'/home', component:dynamic},
        {path:'/blog',component:()=>import('./components/blog.vue')},
        {path:'/about',component:About},
        {path:'/login',name:'Login',component:()=>{ return import('./components/login.vue')}}
    ]
})

router.beforeEach((to,from,next)=>{
    var isLogin = false;
    if(to.name=='tab1'){
        if(isLogin){next()}
        else{
            console.log("我挡")
            next({name:'Login'})
        }
    }else{next()}
})


export default router