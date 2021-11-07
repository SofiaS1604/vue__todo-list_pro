import Vue from 'vue';
import VueRouter from 'vue-router';

import style from './style/styles.styl'

import routes from './utils/routes';
import RootPage from './view/App.vue';

let VueTouch = require('vue-touch');

Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes.routes
});

const App = new Vue({
    el: '#app',
    router,
    name: 'App',
    render: h => h(RootPage)
});