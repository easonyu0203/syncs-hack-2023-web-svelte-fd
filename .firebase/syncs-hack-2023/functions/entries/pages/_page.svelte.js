import { d as get_store_value, c as create_ssr_component, f as compute_rest_props, e as escape, h as spread, i as escape_attribute_value, j as escape_object, v as validate_component } from "../../chunks/ssr.js";
import { a as auth } from "../../chunks/firebase.js";
import { w as writable } from "../../chunks/index.js";
import { onAuthStateChanged } from "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
function userStore(auth2, startWith = null) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2
    };
  }
  if (!auth2) {
    console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2
    };
  }
  const { subscribe } = writable(auth2?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth2, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe
  };
}
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  userStore(auth);
  let files;
  let err_str = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    files && console.log(files);
    $$rendered = `<div class="container h-full mx-auto flex flex-col space-y-6 justify-center items-center"><button type="button" class="btn variant-filled" data-svelte-h="svelte-i7tc4l">Sign in</button> ${validate_component(FileButton, "FileButton").$$render(
      $$result,
      { accept: "image/*", name: "files", files },
      {
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button type="button" class="btn variant-filled" data-svelte-h="svelte-1r4tzul">Upload</button> <p class="text-2xl">${escape(err_str)}</p></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
