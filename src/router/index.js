import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Calculator = resolve => require(['@/views/Calculator'], resolve)
const Pi = resolve => require(['@/views/Pi'], resolve)
const Search = resolve => require(['@/views/Search'], resolve)
const Index = resolve => require(['@/views/Index'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Help = resolve => require(['@/views/Help'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/calculator',
        component: Calculator
    },
    {
        path: '/pi',
        component: Pi
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/help',
        component: Help
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
