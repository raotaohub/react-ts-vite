/*
 * @Author: raotaohub
 * @Date: 2021-10-24 17:21:32
 * @LastEditTime: 2021-11-27 12:57:00
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\nav2\Nav2.tsx
 * @Description: Edit......
 */
import MenuView from '@components/public/Layout/MenuView/MenuView'
import Loading from '@components/public/Loading/Loading'
import { Layout } from 'antd'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { renderRoutes } from 'react-router-config'

const Nav2 = (props: any) => {
   const { route } = props
   //    const history = useHistory()
   const location = useLocation()
   return (
      <>
         <Layout.Content
            className='site-layout-background'
            style={{
               overflowY: 'auto',
               overflowX: 'hidden',
               padding: 10,
               height: '100%'
            }}
         >
            Nav2父路由{location.pathname}
            {renderRoutes(route.routes)}
         </Layout.Content>
      </>
   )
}

export default React.memo(Nav2)
