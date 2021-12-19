/*
 * @Author: raotaohub
 * @Date: 2021-10-24 17:21:32
 * @LastEditTime: 2021-12-19 00:37:53
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\vList\VList.tsx
 * @Description: Edit......
 */
import { Tabs } from 'antd'
import React from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import Layout from 'antd/lib/layout/layout'
import { useHistory } from 'react-router-dom'
import './vlist.less'

const { TabPane } = Tabs

const VList = (props: RouteConfigComponentProps) => {
  const { route } = props
  const hostory = useHistory()

  return (
    <>
      <Tabs
        onChange={(key: string) => {
          hostory.push(key)
        }}
      >
        {route?.routes?.map(route => {
          console.log(route)
          return <TabPane tab={route?.title as string} key={route?.path as string}></TabPane>
        })}
      </Tabs>
      <Layout>{renderRoutes(route?.routes)}</Layout>

      {/* <div style={{ height: 500 }}>{renderRoutes(route?.routes)}</div> */}
    </>
  )
}

export default React.memo(VList)
