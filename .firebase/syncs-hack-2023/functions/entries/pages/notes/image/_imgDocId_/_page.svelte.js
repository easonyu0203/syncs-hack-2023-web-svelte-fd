import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { H as HomeButton } from "../../../../../chunks/HomeButton.js";
import { d as docStore, f as firestore } from "../../../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/storage";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { P as ProgressRadial } from "../../../../../chunks/ProgressRadial.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $imgDoc, $$unsubscribe_imgDoc;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const imgDoc = docStore(firestore, `images/${$page.params.imgDocId}`);
  validate_store(imgDoc, "imgDoc");
  $$unsubscribe_imgDoc = subscribe(imgDoc, (value) => $imgDoc = value);
  $$unsubscribe_page();
  $$unsubscribe_imgDoc();
  return `<main class="container h-screen bg-surface-900 relative flex flex-col space-y-4 px-8">${validate_component(HomeButton, "HomeButton").$$render($$result, {}, {}, {})} <a href="/" class="absolute top-0 right-10">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: " text-5xl",
      icon: "icon-park-outline:back"
    },
    {},
    {}
  )}</a> <div class="h-36"></div> ${$imgDoc ? `<h1 class="h1">${escape($imgDoc?.structurized_text.title.toUpperCase())}</h1> <h5 class="h5">${escape(formatTimestamp($imgDoc.uploadTime))}</h5> <hr class="m-4"> <p>${escape($imgDoc.structurized_text.summary)}</p>` : `<div class="w-full h-full flex justify-center items-center">${validate_component(ProgressRadial, "ProgressRadial").$$render(
    $$result,
    {
      stroke: 100,
      meter: "stroke-primary-500",
      track: "stroke-primary-500/30"
    },
    {},
    {}
  )}</div>`}</main>`;
});
export {
  Page as default
};
