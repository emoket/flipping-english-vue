import Vue from 'vue'
import Router from 'vue-router'
import HomeExpr from '@/components/Expr/HomeExpr'
import AddExpr from '@/components/Expr/AddExpr'
import ExprList from '@/components/Expr/ExprList'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeExpr',
      component: HomeExpr
    },
    {
      path: '/expr/list',
      name: 'ExprList',
      component: ExprList
    },
    {
      path: '/expr/add',
      name: 'AddExpr',
      component: AddExpr
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
