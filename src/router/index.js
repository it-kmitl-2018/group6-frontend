import Vue from 'vue'
import Router from 'vue-router'
import paymentInformation from '@/components/Payment Information'
import buyerForm from '@/components/buyerForm'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/payment Information',
        name: 'paymentInformation',
        component: paymentInformation
    }, {
        path: '/buyerForm',
        name: 'buyerForm',
        component: buyerForm
    }]
})