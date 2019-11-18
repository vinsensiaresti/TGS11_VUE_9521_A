import Vue from 'vue' 
import Router from 'vue-router' 
 
const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
const DashboardLogin = () => import(/* webpackChunkName: "dashboardLogin" */ '../components/dashboardLogin.vue') 

function loadView(view) {
    return () => import(/* webpackChunkName: "view[request]" */ `../components/dashboardContents/${view}.vue`) 
} 
 
    const routes = [    
        {       
            path: '/dashboard',       
            component: DashboardLayout,       
            children: [        
                {           
                    name: 'UserController',           
                    path: '/userController',           
                    component: loadView('userController')         
                },
                {           
                    name: 'SparepartController',           
                    path: '/sparepartController',           
                    component: loadView('sparepartController')         
                }        
            ]     
        },
        {
            path: '/',
            component: DashboardLogin,
            name: 'DashboardLogin'
        }   
    ]   
Vue.use(Router) 
    
const router = new Router(
    {
        mode: 'history', 
        routes: routes
    }) 

export default router