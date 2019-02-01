
/**
 * Vuex Store
 *   This file is used to manage state for the vue application
 * @type {Object}
 */

/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router/index';

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.interceptors.request.use(
	(config) => {
		let token = localStorage.getItem('token');
		if (token) config.headers['Authorization'] = `Bearer ${ token }`;
		return config;
	},
	(error) => { return Promise.reject(error) }
);
Vue.use(Vuex);

const state = {
	isLoggedIn: false,
	token: '',
	user: {},
	hidden: {},
}

const getters = {
	hidden: (state) => state.hidden,
	isLoggedIn: (state) => state.isLoggedIn,
}

const mutations = {
	hiddenTest: (state, payload) => {
		console.log(payload[0])
		state.hidden = payload[0];
	},
	auth: (state, payload) => {
		console.log(payload)
		state.token = payload.token;
		state.user = payload.user;
		state.expiration = payload.expiration;
		state.isLoggedIn = true;
	},
	logOut: (state) => {
		state.isLoggedIn = false;
		localStorage.clear();
		router.replace('/login');
	},
}

const actions = {
	setLogoutTimer: (context) => {
		setTimeout(() => {
				commit('clearAuthData')
			},
			72000000
		)
	},
	getRestricted: (context) => {

		/* eslint-disable*/
		axios.get('/pangolins')
			.then((response) => {
				// console.log(response.data)
				context.commit('hiddenTest', response.data.pangolins)
			})
	},
	// register: (context, creds) => {
	// 	const user = JSON.parse(JSON.stringify(this.user));
	// 	/* eslint-disable*/
	// 	axios.post('http://127.0.0.1:5000/users', {
	// 			user
	// 		})
	// 		.then((response) => {
	// 			// console.log(response.data)
	// 			localStorage.setItem('user', response.data)
	// 			this.showRegister = false;
	// 			this.showLogin = false;
	// 			this.showNotification = true;
	// 		})
	// },
	autoLogin: (context, creds) => {
		const token = localStorage.getItem('token');
		if (!token) {
			return;
		}
		const expiration = localStorage.getItem('expirationDate');
		const now = new Date();
		if (now <= expiration) {
			return;
		}
		const user = localStorage.getItem('user');
		context.commit('auth', {
			user: user,
			token: token,
			expiration: expiration,
		})
		router.replace('/home');
	},
	login: (context, creds) => {
		let user = JSON.parse(JSON.stringify(creds));
		axios.post('http://127.0.0.1:3000/auth', user, {})
			.then((response) => {
				console.log(response);
				var now = new Date();
				var expiration = new Date(now.getTime() + (2 * 1000 * 60 * 60));
				localStorage.setItem('token', response.data.token);
				// localStorage.setItem('user', response.data.user);
				localStorage.setItem('expirationDate', expiration);
				context.commit('auth', response.data)
				if (response.data.token) {
					router.replace('/');
				}
			})
	},
	logout: (context) => {
		localStorage.removeItem('token');
		context.commit('logOut');
	},
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
