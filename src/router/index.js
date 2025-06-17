
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


function passRouteToProps(route){
	return {
		queryParams: route.query,
		fieldName: route.params.fieldName, 
		fieldValue: route.params.fieldValue
	}
}


let routes = [{
	name: 'main',
	path: '/',
	component: () => import('layouts/MainLayout.vue'),
	children: [
		
		{ 
			path: '/home',
			name: 'home', 
			component: () => import('pages/home/home.vue'), 
			props: true 
		},//Dashboard routes


//admins routes
		{
			path: '/admins/:fieldName?/:fieldValue?',
			name: 'adminslist',
			component: () => import('pages/admins/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/admins/view/:id', 
			name: 'adminsview', 
			component: () => import('pages/admins/view.vue'), 
			props: true 
		},
		{ 
			path: '/admins/add', 
			name: 'adminsadd', 
			component: () => import('pages/admins/add.vue'), 
			props: true 
		},
		{ 
			path: '/admins/edit/:id', 
			name: 'adminsedit', 
			component: () => import('pages/admins/edit.vue'), 
			props: true 
		},

//authors routes
		{
			path: '/authors/:fieldName?/:fieldValue?',
			name: 'authorslist',
			component: () => import('pages/authors/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/authors/view/:id', 
			name: 'authorsview', 
			component: () => import('pages/authors/view.vue'), 
			props: true 
		},
		{ 
			path: '/authors/add', 
			name: 'authorsadd', 
			component: () => import('pages/authors/add.vue'), 
			props: true 
		},
		{ 
			path: '/authors/edit/:id', 
			name: 'authorsedit', 
			component: () => import('pages/authors/edit.vue'), 
			props: true 
		},

//books routes
		{
			path: '/books/:fieldName?/:fieldValue?',
			name: 'bookslist',
			component: () => import('pages/books/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/books/view/:id', 
			name: 'booksview', 
			component: () => import('pages/books/view.vue'), 
			props: true 
		},
		{ 
			path: '/books/add', 
			name: 'booksadd', 
			component: () => import('pages/books/add.vue'), 
			props: true 
		},
		{ 
			path: '/books/edit/:id', 
			name: 'booksedit', 
			component: () => import('pages/books/edit.vue'), 
			props: true 
		},

//category routes
		{
			path: '/category/:fieldName?/:fieldValue?',
			name: 'categorylist',
			component: () => import('pages/category/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/category/view/:id', 
			name: 'categoryview', 
			component: () => import('pages/category/view.vue'), 
			props: true 
		},
		{ 
			path: '/category/add', 
			name: 'categoryadd', 
			component: () => import('pages/category/add.vue'), 
			props: true 
		},
		{ 
			path: '/category/edit/:id', 
			name: 'categoryedit', 
			component: () => import('pages/category/edit.vue'), 
			props: true 
		},

//issuedbooks routes
		{
			path: '/issuedbooks/:fieldName?/:fieldValue?',
			name: 'issuedbookslist',
			component: () => import('pages/issuedbooks/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/issuedbooks/view/:id', 
			name: 'issuedbooksview', 
			component: () => import('pages/issuedbooks/view.vue'), 
			props: true 
		},
		{ 
			path: '/issuedbooks/add', 
			name: 'issuedbooksadd', 
			component: () => import('pages/issuedbooks/add.vue'), 
			props: true 
		},
		{ 
			path: '/issuedbooks/edit/:id', 
			name: 'issuedbooksedit', 
			component: () => import('pages/issuedbooks/edit.vue'), 
			props: true 
		},

//users routes
		{
			path: '/users/:fieldName?/:fieldValue?',
			name: 'userslist',
			component: () => import('pages/users/list.vue'),
			props: route => passRouteToProps(route)
		},
		{ 
			path: '/users/view/:id', 
			name: 'usersview', 
			component: () => import('pages/users/view.vue'), 
			props: true 
		},
		{ 
			path: '/users/add', 
			name: 'usersadd', 
			component: () => import('pages/users/add.vue'), 
			props: true 
		},
		{ 
			path: '/users/edit/:id', 
			name: 'usersedit', 
			component: () => import('pages/users/edit.vue'), 
			props: true 
		},

		
		
		
		

		//Error pages
		{ path:  '/error/forbidden', name: 'forbidden',  component: () => import('pages/errors/forbidden.vue') },
		{ path: '/error/notfound',  name: 'notfound', component: () => import('pages/errors/pagenotfound.vue') }
	],
	
	},
	{ path: '/:catchAll(.*)*', component: () => import('pages/errors/pagenotfound.vue') }
];

export default route(async function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE == 'history' ? createWebHistory : createWebHashHistory)
	
	const mainRoute = routes.find(x => x.name = "main");
	
	
	const Router = createRouter({
	scrollBehavior(to, from, savedPostion){
		if(savedPostion) return savedPostion;
		return { top:0 }
	},
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  return Router
})

