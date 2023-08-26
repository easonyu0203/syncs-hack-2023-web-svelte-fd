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
    $$rendered = `<main class="container h-screen bg-surface-900 relative flex flex-col justify-around items-center">${validate_component(HomeButton, "HomeButton").$$render($$result, {}, {}, {})} ${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Snap" }, {}, {})} <div class="flex-grow-0 h-52"></div> <div class="flex-grow relative flex items-center w-full justify-end"><img src="/snap.png" alt="snap pictur!" class="left-0 aspect-square h-64 absolute"> <div class="w-60 text-lg text-center pl-2 pr-8" data-svelte-h="svelte-1o8vv4z">Snap a picture or audio, and let us turn it into organized notes for you!</div></div> <div class="flex-grow relative flex items-center w-full justify-start"><h1 class="h1 text-4xl absolute top-[-10%] right-0 m-8" data-svelte-h="svelte-16tl27i">Events</h1> <img src="/nap.png" alt="nap tent!" class="right-0 aspect-square h-48 absolute"> <div class="w-60 text-lg text-center pl-8 pr-4" data-svelte-h="svelte-okyp8h">Snap a picture or audio, and let us turn it into organized notes for you!</div></div> <div class="flex-grow flex flex-col space-y-4 items-center">${pressAction ? `${validate_component(ProgressRadial, "ProgressRadial").$$render(
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
        class: "btn variant-filled-primary rounded-xl font-extrabold w-64 p-1",
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
    )} <button type="button" class="btn p-3 variant-filled-secondary text-2xl rounded-xl font-extrabold w-64" data-svelte-h="svelte-fftm5e">Add Audio</button>`}</div></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
