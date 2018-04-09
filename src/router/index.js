import Vue from 'vue'
import Router from 'vue-router'
import paymentInformation from '@/components/Payment Information'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'paymentInformation',
        component: paymentInformation
    }]
})