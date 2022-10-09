import {provide} from "vue";

export default {
	install: (app, options) => {
		const logout = () => {
			console.log('logout called');
		}

		app.provide("logout", logout);
	}
}
