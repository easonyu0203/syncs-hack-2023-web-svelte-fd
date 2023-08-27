import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { g as goto } from "../../../../chunks/navigation.js";
import { p as page } from "../../../../chunks/stores.js";
import { H as HomeButton } from "../../../../chunks/HomeButton.js";
import { S as SunnyTitle } from "../../../../chunks/SunnyTitle.js";
import { d as docStore, f as firestore } from "../../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $imgDoc, $$unsubscribe_imgDoc;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const imgDoc = docStore(firestore, `images/${$page.params.imgDocId}`);
  validate_store(imgDoc, "imgDoc");
  $$unsubscribe_imgDoc = subscribe(imgDoc, (value) => $imgDoc = value);
  let dots = "...";
  {
    if ($imgDoc?.status == "failed") {
      goto("/process_failed");
    } else if ($imgDoc?.status == "success") {
      goto(`/adding/${imgDoc.id}`);
    }
  }
  $$unsubscribe_imgDoc();
  $$unsubscribe_page();
  return `<main class="container h-screen bg-surface-900 relative flex flex-col space-y-12 justify-center items-center"><div class="flex justify-between w-full">${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Snap" }, {}, {})} ${validate_component(HomeButton, "HomeButton").$$render($$result, {}, {}, {})}</div> <img src="/ghost.gif" alt="ghost flow" class="max-w-xs"> <div class="max-w-xs"><p class="text-2xl font-semibold" data-svelte-h="svelte-119xkck">Nice Snap! Let&#39;s see what we can do with this snap!</p> <div class="h-8"></div> <p class="text-2xl font-semibold">${$imgDoc?.status === "uploading" ? `Uploading${escape(dots)}` : `${$imgDoc?.status === "unprocess" ? `Waiting in Queue${escape(dots)}` : `${$imgDoc?.status === "extracting_text" ? `Extracting text${escape(dots)}` : `${$imgDoc?.status === "predicting_category" ? `Categorize image${escape(dots)}` : `${$imgDoc?.status === "structurized_text" ? `Construct beautiful essay${escape(dots)}` : `Brewing the magic${escape(dots)}`}`}`}`}`}</p></div></main>`;
});
export {
  Page as default
};
