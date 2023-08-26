import { c as create_ssr_component, j as compute_rest_props, e as escape, h as spread, k as escape_attribute_value, i as escape_object } from "./ssr.js";
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
export {
  FileButton as F
};
