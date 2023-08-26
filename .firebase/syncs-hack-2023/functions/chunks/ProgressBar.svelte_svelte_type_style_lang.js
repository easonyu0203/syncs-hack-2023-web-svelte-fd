import { w as writable } from "./index.js";
import { k as get_store_value, c as create_ssr_component, l as compute_rest_props, e as escape, f as spread, n as escape_attribute_value, g as escape_object } from "./ssr.js";
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
const cButton = "btn";
const FileButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesButton;
  let $$restProps = compute_rest_props($$props, ["files", "name", "width", "button"]);
  let { files = void 0 } = $$props;
  let { name } = $$props;
  let { width = "" } = $$props;
  let { button = "variant-filled" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  classesBase = `${$$props.class ?? ""}`;
  classesButton = `${cButton} ${button} ${width}`;
  return `<div class="${"file-button " + escape(classesBase, true)}" data-testid="file-button"> <div class="w-0 h-0 overflow-hidden"><input${spread(
    [
      { type: "file" },
      { name: escape_attribute_value(name) },
      escape_object(prunedRestProps())
    ],
    {}
  )}></div>  <button type="button" class="${"file-button-btn " + escape(classesButton, true)}" ${$$restProps.disabled ? "disabled" : ""}>${slots.default ? slots.default({}) : `Select a File`}</button></div>`;
});
const ProgressBar_svelte_svelte_type_style_lang = "";
export {
  FileButton as F
};
