import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.833a1caa.js","_app/immutable/chunks/scheduler.6f08bd49.js","_app/immutable/chunks/index.23aed9fc.js","_app/immutable/chunks/HomeButton.92991326.js","_app/immutable/chunks/SunnyTitle.190692db.js","_app/immutable/chunks/firebase.adfd6ce4.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.af951d11.js","_app/immutable/chunks/navigation.dd553de8.js","_app/immutable/chunks/singletons.9a0f1c14.js"];
export const stylesheets = [];
export const fonts = [];
