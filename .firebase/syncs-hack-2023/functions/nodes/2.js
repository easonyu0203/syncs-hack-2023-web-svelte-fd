import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.333380c4.js","_app/immutable/chunks/scheduler.078b4462.js","_app/immutable/chunks/index.0492f3ae.js","_app/immutable/chunks/HomeButton.febfff0a.js","_app/immutable/chunks/SunnyTitle.1d28e323.js","_app/immutable/chunks/firebase.4aaa81cb.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.064adaf7.js","_app/immutable/chunks/navigation.edb8e50e.js","_app/immutable/chunks/singletons.eb80e172.js"];
export const stylesheets = [];
export const fonts = [];
