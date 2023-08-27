import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, f as add_attribute, g as each, e as escape } from "../../../../chunks/ssr.js";
import { H as HomeButton } from "../../../../chunks/HomeButton.js";
import { S as SunnyTitle } from "../../../../chunks/SunnyTitle.js";
import "firebase/auth";
import { f as firestore, c as collectionStore } from "../../../../chunks/firebase.js";
import "firebase/storage";
import { collection, query, where } from "firebase/firestore";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function getMonthDate(timestamp) {
  const date = new Date(timestamp);
  String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
  return [monthName, day];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let events;
  let $images, $$unsubscribe_images;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const imagesRef = collection(firestore, "images");
  const q = query(imagesRef, where("userId", "==", $page.params.userId));
  const images = collectionStore(firestore, q);
  validate_store(images, "images");
  $$unsubscribe_images = subscribe(images, (value) => $images = value);
  let searchTerm = "";
  events = $images.filter((imgDoc) => imgDoc.category == "events");
  $$unsubscribe_images();
  $$unsubscribe_page();
  return `<main class="container h-screen bg-surface-900 relative flex flex-col justify-start items-center px-8">${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Events" }, {}, {})} ${validate_component(HomeButton, "HomeButton").$$render($$result, {}, {}, {})} <div class="h-36"></div> <label class="label"><input class="input p-2 px-6 w-56 rounded-lg" type="text" placeholder="Search Notes"${add_attribute("value", searchTerm, 0)}></label> <section class="flex flex-col mt-6 gap-4">${each(events, (imgDoc) => {
    return `${`<a${add_attribute("href", `events/image/${imgDoc.id}`, 0)}><dl class="flex w-80"><div class="flex space-x-4"><div class="flex flex-col rounded-xl border-2 p-2 px-4 justify-center items-center"><div class="font-bold">${escape(getMonthDate(imgDoc.uploadTime)[0])}</div> <div class="font-bold">${escape(getMonthDate(imgDoc.uploadTime)[1])}</div></div> <span class="flex-auto"><dt class="font-extrabold text-lg">${escape(imgDoc.structurized_text.title)}</dt> <dd class="text-sm">${escape(imgDoc.structurized_text.location)}</dd> <dd class="text-sm">${escape(formatTimestamp(imgDoc.uploadTime))}</dd></span> </div></dl></a> <hr>`}`;
  })}</section></main>`;
});
export {
  Page as default
};
