import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { g as goto } from "../../../chunks/navigation.js";
import { H as HomeButton } from "../../../chunks/HomeButton.js";
import { S as SunnyTitle } from "../../../chunks/SunnyTitle.js";
import { b as uploadImg } from "../../../chunks/firebase.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { F as FileButton } from "../../../chunks/FileButton.js";
import { P as ProgressRadial } from "../../../chunks/ProgressRadial.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let files;
  let pressAction = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (files && files.length > 0) {
        uploadImg(files).then((imgDocId) => {
          goto(`/processing/${imgDocId}`);
        });
        pressAction = true;
      }
    }
    $$rendered = `<main class="container h-screen bg-surface-900 relative flex flex-col justify-center items-center"><div class="flex justify-between w-full">${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Snap" }, {}, {})} ${validate_component(HomeButton, "HomeButton").$$render($$result, {}, {}, {})}</div> <div class="flex-grow relative flex items-center w-full justify-end"><img src="/snap.png" alt="snap pictur!" class="left-0 aspect-square h-48 absolute"> <div class="w-60 text-lg text-center pl-2 pr-8" data-svelte-h="svelte-1o8vv4z">Snap a picture or audio, and let us turn it into organized notes for you!</div></div> <div class="w-full flex justify-end mt-4"><h1 class="h1 text-3xl mr-4" data-svelte-h="svelte-n7uuii">Events</h1></div> <div class="flex-grow relative flex items-center w-full justify-start mb-12"><img src="/nap.png" alt="nap tent!" class="right-0 aspect-square h-36 absolute"> <div class="w-60 text-lg text-center pl-8 pr-4" data-svelte-h="svelte-okyp8h">Snap a picture or audio, and let us turn it into organized notes for you!</div></div> <div class="flex-grow flex flex-col space-y-4 items-center mb-4">${pressAction ? `${validate_component(ProgressRadial, "ProgressRadial").$$render(
      $$result,
      {
        "...": true,
        stroke: 100,
        meter: "stroke-primary-500",
        track: "stroke-primary-500/30"
      },
      {},
      {}
    )}` : `${validate_component(FileButton, "FileButton").$$render(
      $$result,
      {
        name: "files",
        button: "variant-filled-primary ",
        class: "btn variant-filled-primary rounded-xl font-extrabold w-48 p-1",
        files
      },
      {
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<p class="text-2xl" data-svelte-h="svelte-nlfkcs">Add Picture</p>`;
        }
      }
    )} <button type="button" class="btn p-3 variant-filled-secondary text-2xl rounded-xl font-extrabold w-48" data-svelte-h="svelte-1cpi4og">Add Audio</button>`}</div></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
