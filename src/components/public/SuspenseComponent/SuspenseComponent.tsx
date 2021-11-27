import React from 'react'
import Loading from '../Loading/Loading'

const SuspenseComponent = (Component: React.ComponentType) => (props: any) => {
	return (
		<React.Suspense fallback={<Loading tip='加载中..' height='100vh' />}>
			<Component {...props} />
		</React.Suspense>
	)
}

export default SuspenseComponent
