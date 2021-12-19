/**
 * @Author: raotaohub
 * @Date: 2021-02-19 17:00:44
 * @LastEditTime: 2021-11-07 11:22:20
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\App.tsx
 * @Description: App外壳组件
 */
import React, { useEffect, useState } from 'react'
import { Provider as MobxProvider } from 'mobx-react'

import { ConfigProvider, Spin } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
// ------
import mobxStore from '@store/index'
import globalStore from './store/globalStore/globalStore'
// ------
import Main from '@components/public/Main/Main'
// ------
import { menus, routes } from './routes'
import { useHistory } from 'react-router'
import './app.css'

// todo 在这里可以向 globalStore 设置某个特定的值

function App() {
  const [init, setInit] = useState(false)
  const history = useHistory()

  useEffect(() => {
    // mobxStore.init
    console.log('mobxStore-init:', mobxStore)
    setTimeout(() => {
      setInit(true)
    }, 1500)
    return () => {
      setInit(false)
    }
  }, [])

  // 在这里用 mobx的Store 初始化 ，包括生成路由[]、菜单[] !其实不需要用 store来管理路由 做一个单例模式在全局管理就好

  return (
    <React.Suspense fallback={<Spin tip='Loading...' />}>
      <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
        <MobxProvider {...mobxStore}>
          <Main ready={init} routes={routes} menus={menus} />
        </MobxProvider>
      </ConfigProvider>
    </React.Suspense>
  )
}

export default App
