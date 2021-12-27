/*
 * @Author: raotaohub
 * @Date: 2021-12-17 22:14:04
 * @LastEditTime: 2021-12-18 23:39:25
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\compose\Compose.tsx
 * @Description: Edit......
 */

import { Button } from 'antd'
import React, { useState } from 'react'
import { renderRoutes } from 'react-router-config'

const Compose = (props: any) => {
  const { route } = props

  return (
    <>
      <Button>Start</Button>
      <pre>
        <code>{`
          // koa-compose 解决什么问题？ 为啥要这样做 
          type IMiddleware = <T=any ,R=any>(ctx:T,next:()=>R):Promise<any> 
          
          const compose = (middleware:IMiddleware[])=>{
            if(!Array.isArray(middleware)){
              return throw new TypeError('xx must be a Array')
            }
            for(const fn of middleware){
              if(typeof fn !== 'function') retrun throw new TypeError('item must be a function')
            }
            /**
             * @description 这里返回一个函数，函数在调用时会递归执行中数组里的函数
             * */
            
            return function(ctx,next){
              let index = -1

              dispatch(0)
              /* @description 这里要申明一个函数 dispatch 用来递归 /
              function dispatch (i:number){
                if(i <= index) retrun Promise.reject(new Error('next 重复执行了'))
                index = i
                let fn = middleware[i]                /* 假设中间件数组有1个函数，当最后1次进入时 下标i 为1 此时fn为undefined*/
                if(i === middleware.lenght) fn = next /* 此时 i 等于 中间件数组长度 fn就等于 next，next是上一次*/
                if(!fn) return Promise.resolve()      /* 接着若fn不存在 返回1个成功的 promise */
                try {
                  return Promise.resolve(fn(ctx,dispatch.bind(null,i+1)))
                } catch (err) {
                  return Promise.reject(err)
                }
              } 
            }
          }
        `}</code>
      </pre>
      {renderRoutes(route.routes)}
    </>
  )
}

export default React.memo(Compose)
