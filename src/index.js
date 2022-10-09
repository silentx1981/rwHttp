import components from "./components";
import http from "./http.js";

const plugin = {
	install (Vue) {
		for (const prop in components) {
			if (components.hasOwnProperty(prop)) {
				const component = components[prop]
				Vue.component(component.name, component)
			}
		}
	}
}

export default plugin
