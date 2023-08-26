import { c as create_ssr_component, e as escape } from "./ssr.js";
const SunnyTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { actionName = "Note" } = $$props;
  if ($$props.actionName === void 0 && $$bindings.actionName && actionName !== void 0)
    $$bindings.actionName(actionName);
  return `<div class="absolute top-0 left-0 mt-10 ml-8"><h1 class="h1 text-4xl" data-svelte-h="svelte-8ux2c1">Sunny&#39;s</h1> <h1 class="h1 text-4xl">${escape(actionName)}</h1></div>`;
});
export {
  SunnyTitle as S
};
