import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component, d as add_attribute } from "../../../../chunks/ssr.js";
import { d as docStore, f as firestore } from "../../../../chunks/firebase.js";
import { p as page } from "../../../../chunks/stores.js";
import "firebase/auth";
import "firebase/storage";
import { S as SunnyTitle } from "../../../../chunks/SunnyTitle.js";
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
  return `<main class="container h-screen relative bg-surface-900 relative flex flex-col justify-around items-center">${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Snap" }, {}, {})} ${$imgDoc ? `<img${add_attribute("src", $imgDoc?.imgUrl, 0)} alt="image_snap" class="absolute top-0 right-0 mt-10 mr-6 w-48">` : ``}</main>`;
});
export {
  Page as default
};
