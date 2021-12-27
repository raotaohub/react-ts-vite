/*
 * @Author: raotaohub
 * @Date: 2021-10-31 12:53:32
 * @LastEditTime: 2021-12-20 22:17:32
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\nav1\Nav1.tsx
 * @Description: Edit......
 */
import MenuView from '@components/public/Layout/MenuView/MenuView'
import Loading from '@components/public/Loading/Loading'
import { Api } from '@services/index'
import { Button, Layout } from 'antd'
import React, { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { useHistory, useLocation } from 'react-router-dom'

const Nav1 = (props: any) => {
  const { route, ready = true } = props
  const [collapsed, setCollapsed] = React.useState(false)
  let history = useHistory()
  const location = useLocation()

  useEffect(() => {
    let current = true

    Api.Recommend.getBanner().then(res => {
      console.warn(res)
    })
    return () => {
      current = false
    }
  }, [])

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div style={{ display: 'flex' }}>
      <MenuView toggle={toggle} collapsed={collapsed} width={200} className='site-layout-background' />
      {/* <Layout style={{ padding: '16px' }}> */}
      <Loading loading={!ready} size='large' tip='正在初始化,请稍等...' height='100vh'>
        <Layout.Content
          className='site-layout-background'
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: 10,
            height: '100%'
          }}
        >
          Nav1父路由{location.pathname}
          <Button
            onClick={() => {
              window.less
                .modifyVars({
                  '@primary-color': '#55555'
                })
                .then(() => {
                  console.log('success')
                })
            }}
          >
            changeColor
          </Button>
          {renderRoutes(route.routes)}
        </Layout.Content>
      </Loading>
      {/* </Layout> */}
    </div>
  )
}

export default React.memo(Nav1)
