import { Component } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Todo from './pages/Todo.vue'

declare module 'vue-router' {
	interface RouteMeta {
		requiresAuth?: boolean
		layout?: Component
	}
}

interface RouteKey {
	[key: string]: string
}

export const routeName: RouteKey = {
	home: 'Home',
	about: 'About',
	todo: 'Todo',
}

export const routePath: RouteKey = {
	home: '/about',
	about: '/about',
	todo: '/todo',
}

const routes: Array<RouteRecordRaw> = [
	{
		path: routePath.name,
		name: routeName.home,
		component: Home,
	},
	{
		path: routePath.about,
		name: routeName.about,
		component: About,
	},
	{
		path: routePath.todo,
		name: routeName.todo,
		component: Todo,
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
