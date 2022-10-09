import { inject, openBlock, createElementBlock, Fragment, createElementVNode, unref } from 'vue';

const _hoisted_1 = /*#__PURE__*/createElementVNode("input", { type: "text" }, null, -1 /* HOISTED */);


const __default__ = {
  name: 'InputText'
};
  
var script = /*#__PURE__*/Object.assign(__default__, {
  setup(__props) {

  const logout = inject('logout');

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => (unref(logout) && unref(logout)(...args)))
    }, "XYZ")
  ], 64 /* STABLE_FRAGMENT */))
}
}

});

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

export { plugin as default };
