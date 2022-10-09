'use strict';

var vue = require('vue');

var script = {
  name: 'InputText'
};

const _hoisted_1 = /*#__PURE__*/vue.createElementVNode("input", { type: "text" }, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1,
    vue.createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.logout && _ctx.logout(...args)))
    }, "XYZ")
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;
script.__file = "src/InputTest.vue";

var components = { InputText: script };

const plugin = {
	install (Vue) {
		for (const prop in components) {
			if (components.hasOwnProperty(prop)) {
				const component = components[prop];
				Vue.component(component.name, component);
			}
		}
	}
};

module.exports = plugin;
