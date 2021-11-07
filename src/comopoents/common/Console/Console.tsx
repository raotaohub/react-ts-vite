/*
 * @Author: raotaohub
 * @Date: 2021-11-07 19:20:16
 * @LastEditTime: 2021-11-07 19:24:22
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\comopoents\common\Console\Console.tsx
 * @Description: Edit......
 */
import React from 'react'
import './console.less'
const Console = () => {
    return (
        <article className='console'>
            <div className='console-top'>
                <i className='iconfont icondanxunhuan'></i>
                <i className='iconfont iconziyuan'></i>
                <i className='iconfont iconshangyishou'></i>
                <i className='iconfont iconbofang11'></i>
                <i className='iconfont iconxiayishou'></i>
            </div>
            <nav className='center-text'>
                <span></span>
            </nav>
        </article>
    )
}

export default React.memo(Console)
