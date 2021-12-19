import React from 'react'
import { lazy } from 'react'
import { createGroup, getMenus, getRoutes } from './core'
import SuspenseComponent from '@components/public/SuspenseComponent/SuspenseComponent'
import { Redirect } from 'react-router-dom'
/*  */
const Home = lazy(() => import('@view/Home/Home'))
/*  */
const Nav1 = lazy(() => import('@view/nav1/Nav1'))
const Logs = lazy(() => import('@view/nav1/Logs/Logs'))
const Rate = lazy(() => import('@view/nav1/Rate/Rate'))
/*  */
const Nav2 = lazy(() => import('@view/nav2/Nav2'))
const Like = lazy(() => import('@view/nav2/Like/Like'))
const Star = lazy(() => import('@view/nav2/Star/Star'))
/*  */
const Nav3 = lazy(() => import('@view/nav3/Nav3'))
/*  */
const VL = lazy(() => import('@view/vList/VList'))
const V1 = lazy(() => import('@view/vList/V1/V1'))
const V2 = lazy(() => import('@view/vList/V2/V2'))
const VList = lazy(() => import('@view/vList/VList/VList'))
/*  */
const Compose = lazy(() => import('@view/compose/Compose'))

const home = createGroup('/', {
  title: 'home',
  exact: true, // /路由比较特殊 用精确模式,
  show: false,
  component: SuspenseComponent(Home as any)
  // render: () => <Redirect to={'/nav1'} push />
})

/**
 * @description
 */
const nav1 = createGroup('/nav1', {
  title: 'nav1',
  show: true,
  component: SuspenseComponent(Nav1)
  // render: () => <Redirect to={'/nav1/log'} push />
})

nav1.createRoute('/log', {
  title: 'logs',
  component: SuspenseComponent(Logs)
})

nav1.createRoute('/rate', {
  title: 'rate',
  component: SuspenseComponent(Rate)
})
/**
 * @description
 */
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
/**
 * @description
 */
const nav3 = createGroup('/nav3', {
  title: 'nav3',
  show: true,
  component: SuspenseComponent(Nav3)
})
/**
 * @description
 */
const vList = createGroup('/vlist', {
  title: 'vList',
  show: true,
  component: SuspenseComponent(VL as any)
})

vList.createRoute('/vlist', {
  title: 'vlist',
  component: SuspenseComponent(VList)
})

vList.createRoute('/v1', {
  title: 'v1',
  component: SuspenseComponent(V1)
})

vList.createRoute('/v2', {
  title: 'v2',
  component: SuspenseComponent(V2)
})

/**
 * @description
 */
const compose = createGroup('/compose', {
  title: 'compose',
  show: true,
  component: SuspenseComponent(Compose)
})

export const routes = getRoutes()

export const menus = getMenus()
