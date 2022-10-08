import components from "./components";

export default {
	install:  (app, options) => {
		for (const prop in components) {
			if (components.hasOwnProperty(prop)) {
				const component = components[prop]
				app.component(component.name, component)
			}
		}
	}
};
