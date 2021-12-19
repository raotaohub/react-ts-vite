import { RouteConfig } from './type'

export interface IOption {
	isMenu?: boolean
	icon?: string
	key?: string
	exact?: boolean
	component?: React.ComponentType<any>
	title?:string
	[propName: string]: any
}

export interface IMenu {
	path: string
	title: string
	iconName?: string
	show?: boolean
	subMenu?: IMenu[]
}

let success = false
let history: History

export const routes: RouteConfig[] = []
export const menus: IMenu[] = []

function RouteFactory(path: string, option: IOption) {
	let config: RouteConfig, menu: IMenu

	config = {
		path: `${path}`,
		exact: option?.exact || false, // 一级路由默认为 false
		component: option.component,
		render: option?.render,
		routes: []
	}

	menu = {
		path: `${path}`,
		title: `${option?.title}`,
		show: option?.show,
		iconName: option?.iconName,
		subMenu: []
	}

	routes.push(config)

	menus.push(menu)

	const createRoute = (_path: string, option: IOption, createMenu = true) => {
		config?.routes?.push({
			title:`${option?.title}`,
			path: `${path}${_path}`,
			exact: option?.exact ?? true,
			component: option?.component,
			render: option?.render
		})
		if (createMenu) {
			menu?.subMenu?.push({
				path: `${path}${_path}`,
				title: `${option?.title}`,
				show: option?.show,
				iconName: option?.iconName
			})
		}
	}

	return {
		config,
		createRoute
	}
}

export const createGroup = (path: string, option: IOption) => {
	return RouteFactory(path, option)
}

export const initHistory = (h: History) => {
	history = h
}

export const resetRoutes = () => {
	routes.length = 0
}

export const getHistory = (): History => {
	return history
}

export const getRoutes = () => {
	return routes
}

export const getMenus = () => {
	return menus
}
