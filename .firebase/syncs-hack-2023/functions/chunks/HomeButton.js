import { c as create_ssr_component } from "./ssr.js";
const HomeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="button" class="btn variant-ringed rounded-full h-12 m-4 border-2"><a href="/"><img class="aspect-square w-6" src="/home.png" alt="home button"></a></button>`;
});
export {
  HomeButton as H
};
