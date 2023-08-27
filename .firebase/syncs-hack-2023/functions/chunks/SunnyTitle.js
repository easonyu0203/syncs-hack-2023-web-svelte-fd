import { c as create_ssr_component, a as validate_store, b as subscribe, e as escape } from "./ssr.js";
import { e as userData } from "./firebase.js";
import "firebase/auth";
const SunnyTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let { actionName = "Note" } = $$props;
  let name = "SnapNote";
  if ($$props.actionName === void 0 && $$bindings.actionName && actionName !== void 0)
    $$bindings.actionName(actionName);
  name = $userData?.displayName || "SnapNote";
  $$unsubscribe_userData();
  return `<button class="absolute top-0 left-0 m-4"><h1 class="h1 text-xl">${escape(name)}&#39;s</h1> <h1 class="h1 text-xl">${escape(actionName)}</h1></button>`;
});
export {
  SunnyTitle as S
};
