import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Paper from '@/components/Paper';
import Auth from '@/components/auth/Authentication';
// import Confirm from '@/components/auth/Confirm';
// import PasswordReset from '@/components/auth/PasswordReset';

// eslint-disable-next-line
import store from '../store';

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/paper',
			name: 'paper',
			component: Paper,
			beforeEnter: (to, from, next) => {
				next();
				// next('/login')
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Auth,
		},
		// {
		// 	path: '/confirm',
		// 	name: 'confirm',
		// 	component: Confirm,
		// },
		// {
		// 	path: '/reset',
		// 	name: 'password-reset',
		// 	component: PasswordReset,
		// },
	],
});

// router.beforeEach((to, from, next) => {
// 	if (
// 		!store.getters.isLoggedIn &&
// 		to.path !== '/login' &&
// 		to.path !== '/confirm' &&
// 		to.path !== '/reset'
// 	) {
// 		next('/login');
// 	} else {
// 		next();
// 	}
// });

export default router;


/**
 * Example of specific route testing
 */
// function checkAuth(to, from, next) {
//   if (!store.getters.isLoggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// }
