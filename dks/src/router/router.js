import Vue from 'vue'
import Router from 'vue-router'
import Product from '../components/product.vue';
import Shop from '../components/shop.vue';
import Type from '../components/type.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shop/:shopName',
      name: 'shop',
      component: Shop,
      children: [
          {
          path: 'product',
          name: 'product',
          component: Product,
          children: [
            {
              path: 'type/:id',
              name:'type',
              component: Type
            }
          ]
        },
        /*{
          path: 'evaluate',
          component: { template: '<div><h3>我是评价</h3></div>'}
        },
        {
          path: 'seller',
          component: { template: '<div><h3>我是商家</h3></div>'}
        },*/
      ]
    },
    {
      path: '*',
      redirect: '/shop/dks/product/type/01'
    }
  ]
})
