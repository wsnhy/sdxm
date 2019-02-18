import Vue from 'vue'
import Router from 'vue-router'
import index from "../pages/index"
import zhuce from"../pages/zhuce"
import goods from"../pages/goods"
import denglu from "../pages/denglu"
import my from "../pages/my"
import tuijian from "../pages/tuijian"
import imports from "../pages/imports"
import commpany from "../pages/commpany"
import goods_two from "../pages/goods_two"
import goods_three from "../pages/goods_three"
import shoop from "../pages/shoop"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },{
      path: '/goods',
      name: 'goods',
      component: goods
    },{
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },{
      path: '/my',
      name: 'my',
      component: my
    },{
      path: '/tuijian',
      name: 'tuijian',
      component: tuijian
    },{
      path: '/imports',
      name: 'imports',
      component: imports
    },
    {
      path: '/commpany',
      name: 'commpany',
      component: commpany
    }
    // 商品2
    ,{
      path: '/goods_two',
      name: 'goods_two',
      component: goods_two
    },
    // 商品三
    {
      path: '/goods_three',
      name: 'goods_three',
      component: goods_three
    },  {
      path: '/shoop',
      name: 'shoop',
      component: shoop
    }
    // 电商

  ]

})
