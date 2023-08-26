import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, f as add_attribute, g as each, e as escape } from "../../../chunks/ssr.js";
import { H as HomeButton } from "../../../chunks/HomeButton.js";
import { S as SunnyTitle } from "../../../chunks/SunnyTitle.js";
import "firebase/auth";
import { f as firestore, c as collectionStore, b as uploadImg } from "../../../chunks/firebase.js";
import "firebase/storage";
import { collection, query, where, limit } from "firebase/firestore";
import { p as page } from "../../../chunks/stores.js";
import { g as goto } from "../../../chunks/navigation.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { F as FileButton } from "../../../chunks/FileButton.js";
import { P as ProgressRadial } from "../../../chunks/ProgressRadial.js";
import "../../../chunks/functions.js";
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
    events = [
      ...$images.filter((imgDoc) => imgDoc.category == "events"),
      ...Array(2).fill(0)
    ].slice(0, 2);
    notes = [...$images.filter((imgDoc) => imgDoc.category == "notes"), ...Array(4).fill(0)].slice(0, 4);
    $$rendered = `<main class="container h-screen bg-surface-900 relative flex flex-col justify-start items-center px-8">${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Notes" }, {}, {})} ${validate_component(HomeButton, "HomeButton").$$render($$result, {}, {}, {})} <div class="h-28"></div> <div class="w-full flex justify-end"><a${add_attribute("href", `/notes/${$page.params.userId}`, 0)} class="underline">More Notes</a></div> <section class="grid grid-cols-2 gap-4 mt-4">${each(notes, (imgDoc) => {
      return `${imgDoc == 0 ? `<div class="card block card-hover p-4 rounded-xl"><div class="p-4 space-y-3"><div class="placeholder animate-pulse w-24"></div> <div class="placeholder animate-pulse w-24"></div></div> </div>` : `<a${add_attribute("href", `notes/image/${imgDoc.id}`, 0)} class="card block card-hover p-4 rounded-xl"><div class="font-extrabold text-lg">${escape(imgDoc.structurized_text.title)}</div> </a>`}`;
    })}</section> <div class="w-full flex justify-between items-end mt-8"><a${add_attribute("href", `/events/${$page.params.userId}`, 0)} class="underline">More Events</a> <h1 class="h1 text-4xl" data-svelte-h="svelte-14bg11t">Events</h1></div> <section class="flex flex-col mt-6 gap-4">${each(events, (imgDoc) => {
      return `${imgDoc == 0 ? `<div class="card block card-hover p-4 rounded-xl"><div class="p-4 space-y-4"><div class="placeholder animate-pulse w-24"></div> <div class="placeholder animate-pulse w-24"></div></div> </div>` : `<a${add_attribute("href", `events/image/${imgDoc.id}`, 0)}><dl class="flex w-80"><div class="flex space-x-4"><div class="flex flex-col rounded-xl border-2 p-2 px-4 justify-center items-center"><div class="font-bold">${escape(getMonthDate(imgDoc.uploadTime)[0])}</div> <div class="font-bold">${escape(getMonthDate(imgDoc.uploadTime)[1])}</div></div> <span class="flex-auto"><dt class="font-extrabold text-lg">${escape(imgDoc.structurized_text.title)}</dt> <dd class="text-sm">${escape(imgDoc.structurized_text.location)}</dd> <dd class="text-sm">${escape(formatTimestamp(imgDoc.uploadTime))}</dd></span> </div></dl> </a>`}`;
    })}</section> <div class="flex-grow flex flex-col space-y-3 items-center my-6">${pressAction ? `${validate_component(ProgressRadial, "ProgressRadial").$$render(
      $$result,
      {
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
  $$unsubscribe_images();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
