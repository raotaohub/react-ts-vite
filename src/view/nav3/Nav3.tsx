/*
 * @Author: raotaohub
 * @Date: 2021-10-24 17:21:32
 * @LastEditTime: 2021-11-07 11:56:16
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\nav3\Nav3.tsx
 * @Description: Edit......
 */
import { Layout } from 'antd'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { renderRoutes } from 'react-router-config'

const Nav3 = (props: any) => {
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
				Nav3父路由{location.pathname}
				{renderRoutes(route.routes)}
			</Layout.Content>
		</>
	)
}

export default React.memo(Nav3)
