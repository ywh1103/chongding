import Vue from 'vue'
import Router from 'vue-router'
import init from '../initPlugin';

const Index = () => import('@/page/indexPage/index.vue');

Vue.use(Router);

var routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
];

export default new Router({
  routes: routes
});