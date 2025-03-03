import { createRouter ,createWebHashHistory} from "vue-router"
import sign_in from "@/components/sign/sign_in.vue"
import sign_up from "@/components/sign/sign_up.vue"
import cart from '@/pages/cart.vue'
import buy from '@/components/buy.vue'
import order from '@/pages/order.vue'
import home from '@/pages/home.vue'
const router = createRouter({
    history:createWebHashHistory(),
    routes:
    [
        {
            path:'/home',
            component:home
        }
        ,
        {
            path:'/sign_in',
            component:sign_in
        },

        {
            path:'/sign_up',
            component:sign_up
        },

        {
            path:'/',
            component:buy
        },

        {
            path:'/order',
            component:order
        },

        {
            path:'/cart',
            component:cart
        },
    ]
})

export default router