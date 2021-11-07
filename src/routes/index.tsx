import { Redirect } from 'react-router'
import React, { lazy } from 'react'
import { createGroup, getMenus, getRoutes } from './core'
import SuspenseComponent from '@/comopoents/public/SuspenseComponent/SuspenseComponent'
/*  */
const Home = lazy(() => import('@/view/Home/Home'))
/*  */
const Nav1 = lazy(() => import('@/view/nav1/Nav1'))
const Logs = lazy(() => import('@/view/nav1/Logs/Logs'))
const Rate = lazy(() => import('@/view/nav1/Rate/Rate'))
/*  */
const Nav2 = lazy(() => import('@/view/nav2/Nav2'))
const Like = lazy(() => import('@/view/nav2/Like/Like'))
const Star = lazy(() => import('@/view/nav2/Star/Star'))
/*  */
const Nav3 = lazy(() => import('@/view/nav3/Nav3'))

const home = createGroup('/', {
    title: 'home',
    exact: true, // /路由比较特殊 用精确模式,
    show: false,
    component: SuspenseComponent(Home as any)
    // render: () => <Redirect to={'/nav1'} push />
})

//
const nav1 = createGroup('/nav1', {
    title: 'nav1',
    show: true,
    component: SuspenseComponent(Nav1)
})

nav1.createRoute('/log', {
    title: 'logs',
    component: SuspenseComponent(Logs)
})

nav1.createRoute('/rate', {
    title: 'rate',
    component: SuspenseComponent(Rate)
})
//
const nav2 = createGroup('/nav2', {
    title: 'nav2',
    show: true,
    component: SuspenseComponent(Nav2)
})

nav2.createRoute('/like', {
    title: 'like',
    component: SuspenseComponent(Like)
})

nav2.createRoute('/star', {
    title: 'star',
    component: SuspenseComponent(Star)
})
//
const nav3 = createGroup('/nav3', {
    title: 'nav3',
    show: true,
    component: SuspenseComponent(Nav3)
})

export const routes = getRoutes()

export const menus = getMenus()
