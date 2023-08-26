import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { u as userStore, a as auth } from "../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { F as FileButton } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
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
