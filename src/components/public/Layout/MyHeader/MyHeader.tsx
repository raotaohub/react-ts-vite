//------------------- 引入库
import React, { ReactElement } from 'react'
//-------------------
import { Layout, Menu } from 'antd'

//------------------- 引入样式
import './myHeader.less'
import { getMenus } from '@routes/core'
import { Link, useLocation } from 'react-router-dom'
//------------------- antd组件解构
const { Header } = Layout

import Zune from '@assets/image/zune.png'

const MyHeader = (): ReactElement => {
  const { pathname } = useLocation()
  const [menList, setMenuList] = React.useState(() => {
    return getMenus().filter(menu => menu.show)
  })

  return (
    <Header className='header flex px8'>
      <Link to={'/'} className=''>
        <img className={'zune-music-logo'} src={Zune} alt='music' /> zune
      </Link>
      <div className='flex-1'>
        <Menu theme='light' mode='horizontal' selectedKeys={[pathname]} defaultSelectedKeys={['1']}>
          {menList.map(menu => {
            return (
              <Menu.Item key={menu.path}>
                <Link to={menu.path}>
                  <span className={'selected-item item fc-main'}>{menu.title}</span>
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>
    </Header>
  )
}

export default React.memo(MyHeader)
