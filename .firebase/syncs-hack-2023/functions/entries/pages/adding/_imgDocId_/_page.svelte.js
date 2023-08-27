import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, f as add_attribute, e as escape, g as each } from "../../../../chunks/ssr.js";
import { d as docStore, f as firestore } from "../../../../chunks/firebase.js";
import { p as page } from "../../../../chunks/stores.js";
import "firebase/auth";
import "firebase/storage";
import { S as SunnyTitle } from "../../../../chunks/SunnyTitle.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { P as ProgressRadial } from "../../../../chunks/ProgressRadial.js";
import "postcss/lib/list";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imgDoc, $$unsubscribe_imgDoc;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const imgDoc = docStore(firestore, `images/${$page.params.imgDocId}`);
  validate_store(imgDoc, "imgDoc");
  $$unsubscribe_imgDoc = subscribe(imgDoc, (value) => $imgDoc = value);
  {
    console.log($imgDoc);
  }
  $$unsubscribe_imgDoc();
  $$unsubscribe_page();
  return `<main class="container h-screen bg-surface-900 relative flex flex-col justify-around items-center p-8 space-y-12">${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Snap" }, {}, {})} ${$imgDoc ? `<div class="w-full flex justify-end"><img${add_attribute("src", $imgDoc?.imgUrl, 0)} alt="image_snap" class="absolute top-10 right-5 mr-2 max-h-56 object-cover w-48 -z-0"></div> <div></div> <div class="m-auto max-w-xs"><h1 class="h1">${escape($imgDoc?.structurized_text.title)}</h1> ${$imgDoc?.category == "events" ? `<h4 class="h4">${escape($imgDoc?.structurized_text.location)}</h4> <h4 class="h4">${escape($imgDoc?.structurized_text.time)}</h4> <hr class="!border-t-2 m-2"> <p>${escape($imgDoc?.structurized_text.description.replace("//", "\n"))}</p>` : `${$imgDoc?.category == "notes" ? `<hr class="!border-t-2 m-2"> <ul class="list max-h-72 overflow-scroll">${each($imgDoc?.structurized_text.summary.replace("//", "").split("- "), (bul) => {
    return `<li class="list-item">${escape(bul)}</li>`;
  })}</ul>` : ``}`}</div> <div class="flex flex-col space-y-6 mb-16"><a href="/"><button type="button" class="btn variant-filled-primary font-bold text-2xl w-48 rounded-lg">Save as ${escape($imgDoc?.category)}</button></a> <button type="button" class="underline" data-svelte-h="svelte-1smb5j6">Other Options</button></div>` : `${validate_component(ProgressRadial, "ProgressRadial").$$render(
    $$result,
    {
      stroke: 100,
      meter: "stroke-primary-500",
      track: "stroke-primary-500/30"
    },
    {},
    {}
  )}`}</main>`;
});
export {
  Page as default
};
