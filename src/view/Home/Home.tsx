/*
 * @Author: raotaohub
 * @Date: 2021-10-31 12:39:02
 * @LastEditTime: 2021-11-27 13:00:33
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\Home\Home.tsx
 * @Description: Edit......
 */

import Console from '@components/common/Console/Console'
import MiniPlayer from '@components/common/MiniPlayer/MiniPlayer'
import { Api } from '@services/index'
import { Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import LazyLoad from 'react-lazyload'

import { IPresonalizedResult } from '@services/recommend/type'
import Zune from '@assets/image/zune.png'

import './home.less'
const Home = (props: RouteConfigComponentProps) => {
  const { route } = props
  const location = useLocation()
  const [findMusic, setFindMusic] = useState<IPresonalizedResult['result']>([])

  useEffect(() => {
    let current = true

    // Api.Recommend.getBanner().then(res => {
    //     console.warn()
    //     setFindMusic(res?.banners || [])
    // })

    Api.Recommend.getRecommendList().then(res => {
      setFindMusic(res?.result || [])
    })

    return () => {
      current = false
    }
  }, [])

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
        <main className='main'>
          <div className='main-box'>
            <section className='magnetic flex-1'>
              <h1 className='title'>发现音乐</h1>
              <div className='matter overflow-y-scroll'>
                {findMusic?.map(v => {
                  return (
                    <div className='flex'>
                      <LazyLoad
                        offset={-10}
                        scrollContainer='.matter'
                        classNamePrefix='flex-1'
                        placeholder={<img width='100%' height='100%' src={Zune} alt='music' />}
                      >
                        <img src={v.picUrl + '?param=200x200'} width='100%' height='100%' alt='music' />
                      </LazyLoad>
                      <div className='flex-5'>{v.name}</div>
                    </div>
                  )
                })}
              </div>
            </section>
            <section className='magnetic flex-1'>
              <h1 className='title'>热门</h1>
              <div className='matter'>
                <ul></ul>
              </div>
            </section>
            <section className='magnetic flex-1'>
              <h1 className='title'>历史记录</h1>
              <div className='matter'>
                <ul></ul>
              </div>
            </section>
            <section className='magnetic flex-1'>
              <h1 className='title'>我的</h1>
              <div className='matter'>
                <ul></ul>
              </div>
            </section>
          </div>
        </main>
        <Console></Console>
        <MiniPlayer></MiniPlayer>
        {/* Home{location.pathname}
                {renderRoutes(route?.routes)} */}
      </Layout.Content>
    </>
  )
}

export default React.memo(Home)
