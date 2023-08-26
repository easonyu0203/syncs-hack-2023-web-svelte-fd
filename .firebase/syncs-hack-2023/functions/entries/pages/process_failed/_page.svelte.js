import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="container h-screen justify-center items-center"><h1 class="h1" data-svelte-h="svelte-156p5sd">Sorry we can&#39;t extract anything from the image</h1> <a href="/"><button type="button" class="btn variant-filled" data-svelte-h="svelte-1nt3jax">Home</button></a></main>`;
});
export {
  Page as default
};
