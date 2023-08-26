import { c as create_ssr_component } from "./ssr.js";
const HomeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="button" class="btn variant-ringed rounded-full absolute top-0 right-0 m-6 border-2"><a href="/home"><img class="aspect-square w-12" src="/home.png" alt="home button"></a></button>`;
});
export {
  HomeButton as H
};
