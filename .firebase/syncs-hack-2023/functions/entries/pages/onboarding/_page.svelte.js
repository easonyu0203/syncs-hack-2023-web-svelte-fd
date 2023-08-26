import { c as create_ssr_component, e as escape, d as add_attribute, i as add_styles, j as compute_slots, v as validate_component } from "../../../chunks/ssr.js";
import { g as goto } from "../../../chunks/navigation.js";
import { H as HomeButton } from "../../../chunks/HomeButton.js";
import { S as SunnyTitle } from "../../../chunks/SunnyTitle.js";
import { c as uploadImg } from "../../../chunks/firebase.js";
import { F as FileButton } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const cBase = "progress-radial relative overflow-hidden";
const cBaseTrack = "fill-transparent";
const cBaseMeter = "fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%]";
const baseSize = 512;
const ProgressRadial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$slots = compute_slots(slots);
  let { value = void 0 } = $$props;
  let { stroke = 40 } = $$props;
  let { font = 56 } = $$props;
  let { width = "w-36" } = $$props;
  let { meter = "stroke-surface-900 dark:stroke-surface-50" } = $$props;
  let { track = "stroke-surface-500/30" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { labelledby = "" } = $$props;
  const radius = baseSize / 2;
  let circumference = radius;
  let dashoffset;
  function setProgress(percent) {
    circumference = radius * 2 * Math.PI;
    dashoffset = circumference - percent / 100 * circumference;
  }
  setProgress(0);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.font === void 0 && $$bindings.font && font !== void 0)
    $$bindings.font(font);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.meter === void 0 && $$bindings.meter && meter !== void 0)
    $$bindings.meter(meter);
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${width} ${$$props.class ?? ""}`;
  return `  <figure class="${"progress-radial " + escape(classesBase, true)}" data-testid="progress-radial" role="meter"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-valuenow", value || 0, 0)}${add_attribute("aria-valuetext", value ? `${value}%` : "Indeterminate Spinner", 0)}${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 100, 0)}> <svg viewBox="${"0 0 " + escape(baseSize, true) + " " + escape(baseSize, true)}" class="${["rounded-full", value === void 0 ? "animate-spin" : ""].join(" ").trim()}"><circle class="${"progress-radial-track " + escape(cBaseTrack, true) + " " + escape(track, true)}"${add_attribute("stroke-width", stroke, 0)}${add_attribute("r", baseSize / 2, 0)} cx="50%" cy="50%"></circle><circle class="${"progress-radial-meter " + escape(cBaseMeter, true) + " " + escape(meter, true)}"${add_attribute("stroke-width", stroke, 0)}${add_attribute("r", baseSize / 2, 0)} cx="50%" cy="50%"${add_styles({
    "stroke-dasharray": `${circumference}
			${circumference}`,
    "stroke-dashoffset": dashoffset
  })}></circle>${value != void 0 && value >= 0 && $$slots.default ? `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-weight="bold"${add_attribute("font-size", font, 0)} class="${"progress-radial-text " + escape(fill, true)}">${slots.default ? slots.default({}) : ``}</text>` : ``}</svg></figure>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    $$rendered = `<main class="container h-screen bg-surface-900 relative flex flex-col justify-around items-center">${validate_component(HomeButton, "HomeButton").$$render($$result, {}, {}, {})} ${validate_component(SunnyTitle, "SunnyTitle").$$render($$result, { actionName: "Snap" }, {}, {})} <div class="flex-grow-0 h-52"></div> <div class="flex-grow relative flex items-center w-full justify-end"><img src="/snap.png" alt="snap pictur!" class="left-0 aspect-square h-64 absolute"> <div class="w-60 text-lg text-center pl-2 pr-8" data-svelte-h="svelte-1o8vv4z">Snap a picture or audio, and let us turn it into organized notes for you!</div></div> <div class="flex-grow relative flex items-center w-full justify-start"><h1 class="h1 text-4xl absolute top-[-10%] right-0 m-8" data-svelte-h="svelte-16tl27i">Events</h1> <img src="/nap.png" alt="nap tent!" class="right-0 aspect-square h-48 absolute"> <div class="w-60 text-lg text-center pl-8 pr-4" data-svelte-h="svelte-okyp8h">Snap a picture or audio, and let us turn it into organized notes for you!</div></div> <div class="flex-grow flex flex-col space-y-4 items-center">${pressAction ? `${validate_component(ProgressRadial, "ProgressRadial").$$render(
      $$result,
      {
        "...": true,
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
    )} <button type="button" class="btn p-3 variant-filled-primary text-2xl rounded-xl font-extrabold w-64" data-svelte-h="svelte-ejq72a">Add Audio</button>`}</div></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
