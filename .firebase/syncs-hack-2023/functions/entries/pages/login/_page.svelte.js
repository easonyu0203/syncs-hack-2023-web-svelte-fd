import { c as create_ssr_component, o as onDestroy, h as spread, i as escape_object, d as createEventDispatcher, a as validate_store, b as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { c as checkIconState, g as generateIcon } from "../../../chunks/functions.js";
import "firebase/auth";
import { e as userData, u as userStore, a as auth } from "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
import { g as goto } from "../../../chunks/navigation.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  let $user, $$unsubscribe_user;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  const user = userStore(auth);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  {
    if ($user) {
      if ($userData?.firstTimeLogin) {
        goto("/onboarding");
      } else {
        goto("/onboarding");
      }
    }
  }
  $$unsubscribe_userData();
  $$unsubscribe_user();
  return `<main class="container h-screen bg-tertiary-800 flex flex-col justify-around items-center relative z-0"><div class="bg-surface-900 absolute bottom-0 h-[50%] -z-10 w-full rounded-tr-[7em]"></div> <div class="flex flex-col items-center"><img src="/logo.png" alt="logo" class="aspect-square max-h-60"> <p class="w-64 text-center text-lg font-semibold" data-svelte-h="svelte-osvbka">Snap or Record to Create Organized Notes Instantly</p></div> <div class="flex flex-col space-y-12 min-w-48"><div class="flex flex-col items-center space-y-4"><h1 class="h1 text-5xl" data-svelte-h="svelte-b70pb2">Login</h1> <h2 class="h2" data-svelte-h="svelte-a9s7bf">Snap Note</h2></div> <button type="button" class="btn variant-filled rounded-lg font-bold">${validate_component(Icon, "Icon").$$render($$result, { class: "text-lg", icon: "devicon:google" }, {}, {})} <span data-svelte-h="svelte-re30jn">Sign in with Google</span></button> <button type="button" class="btn variant-filled rounded-lg font-bold">${validate_component(Icon, "Icon").$$render($$result, { class: "text-xl", icon: "mdi:anonymous" }, {}, {})} <span data-svelte-h="svelte-1wvc7sy">Sign in with Facebook</span></button></div></main>`;
});
export {
  Page as default
};
