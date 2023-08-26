import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, f as add_attribute, g as each, e as escape } from "../../../../chunks/ssr.js";
import { H as HomeButton } from "../../../../chunks/HomeButton.js";
import { S as SunnyTitle } from "../../../../chunks/SunnyTitle.js";
import "firebase/auth";
import { f as firestore, c as collectionStore } from "../../../../chunks/firebase.js";
import "firebase/storage";
import { collection, query, where, limit } from "firebase/firestore";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let notes;
  let $images, $$unsubscribe_images;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const imagesRef = collection(firestore, "images");
  const q = query(imagesRef, where("userId", "==", $page.params.userId), limit(4));
  const images = collectionStore(firestore, q);
  validate_store(images, "images");
  $$unsubscribe_images = subscribe(images, (value) => $images = value);
  let searchTerm = "";
  notes = $images.filter((imgDoc) => imgDoc.category == "notes");
  $$unsubscribe_images();
  $$unsubscribe_page();
  return `<main class="container h-screen bg-surface-900 relative flex flex-col justify-start items-center px-8">${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Notes" }, {}, {})} ${validate_component(HomeButton, "HomeButton").$$render($$result, {}, {}, {})} <div class="h-36"></div> <label class="label"><input class="input p-2 px-6 w-56 rounded-lg" type="text" placeholder="Search Notes"${add_attribute("value", searchTerm, 0)}></label> <section class="grid grid-cols-2 gap-4 mt-8 overscroll-auto">${each(notes, (imgDoc) => {
    return `${`<a${add_attribute("href", `images/${imgDoc.id}`, 0)} class="card space-y-2 card-hover p-4 rounded-xl flex flex-col"><div class="font-extrabold text-lg">${escape(imgDoc.structurized_text.title)}</div> <div class="w-full flex justify-end text-sm">${escape(formatTimestamp(imgDoc.uploadTime))}</div> </a>`}`;
  })}</section></main>`;
});
export {
  Page as default
};
