/*
 * @Author: raotaohub
 * @Date: 2021-10-31 12:39:02
 * @LastEditTime: 2021-11-03 23:03:57
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\index.tsx
 * @Description: Edit......
 */

import { Layout } from 'antd'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { renderRoutes } from 'react-router-config'

const Index = props => {
	// const { route } = props
	// console.log(route)
	// //    const history = useHistory()
	// const location = useLocation()
	// return (
	//    <div>
	//       Index{location.pathname}

	//       {renderRoutes(route.routes)}
	//    </div>
	// )

	const { route } = props
	//    const history = useHistory()
	const location = useLocation()
	return (
		<Layout style={{ padding: '16px' }}>
			<Layout.Content
				className='site-layout-background'
				style={{
					overflowY: 'auto',
					overflowX: 'hidden',
					padding: 10,
					height: '100%'
				}}
			>
				index{location.pathname}
				{renderRoutes(route.routes)}
			</Layout.Content>
		</Layout>
	)
}

export default Index
