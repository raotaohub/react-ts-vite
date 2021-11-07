/*
 * @Author: raotaohub
 * @Date: 2021-11-07 19:20:22
 * @LastEditTime: 2021-11-07 19:25:02
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\comopoents\common\MiniPlayer\MiniPlayer.tsx
 * @Description: Edit......
 */
import React from 'react'
import './miniPlayer.less'

const MiniPlayer = () => {
    return (
        <article className='mini-music-bar'>
            <dd className='box1'>
                <img src='' alt='' />
            </dd>

            <dt>
                <div>
                    <span>童年——罗大佑</span>
                </div>
                <nav>
                    <div></div>
                    <i></i>
                </nav>
                <footer>
                    <span className='float-left'>00:34</span>
                    <span className='float-right'>00:34</span>
                </footer>
            </dt>

            <div className='clearflex'></div>
        </article>
    )
}

export default React.memo(MiniPlayer)
