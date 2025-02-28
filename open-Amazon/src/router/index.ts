import {createRouter,createWebHistory} from 'vue-router'
import sign_in from '@/components/sign/sign_in.vue'
import sign_up from '@/components/sign/sign_up.vue'
import home from '@/components/home.vue'
import cart from '@/components/cart.vue'
import order from '@/components/order.vue'
const router = createRouter({    //创建路由器
    history:createWebHistory(),  //路由器的工作模式
    routes:[                    //配置各个路由
        {
            path: '@/components/sign/sign_in.vue'  ,
            component:sign_in
    },
    {
        path:'@/components/sign/sign_up.vue',
        components:sign_up
    },
    {
        path:'@/components/home.vue',
        components:home
    },

    {
        path:'@/components/cart.vue',
        components:cart
    },

    {
        path:'@/components/order.vue',
        components:order
    },
]
})

export default router