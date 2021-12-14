/*
 * @Author: raotaohub
 * @Date: 2021-10-24 17:21:32
 * @LastEditTime: 2021-12-14 23:15:24
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\vList\VList.tsx
 * @Description: Edit......
 */
import { Button } from 'antd'
import React, { useState } from 'react'
import { renderRoutes } from 'react-router-config'

const VList = (props: any) => {
  const { route } = props

  const [list, setList] = useState<any[]>([])

  const renderList = () => {
    return (
      <ul>
        {list.map(v => (
          <li>{v}</li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <Button
        type='primary'
        onClick={() => {
          let now = Date.now()
          const total = 10000
          setList(() => {
            const list = []
            console.time()
            for (let i = 0; i < total; i++) {
              list.push(i)
            }
            console.timeEnd()
            return list
          })
          setTimeout(() => {
            console.log('总运行时间：', Date.now() - now)
          }, 0)
        }}
      >
        Start
      </Button>
      {renderList()}
      {renderRoutes(route.routes)}
    </>
  )
}

export default React.memo(VList)
