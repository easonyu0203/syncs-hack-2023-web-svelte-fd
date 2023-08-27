import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.cced2f6f.js","_app/immutable/chunks/scheduler.078b4462.js","_app/immutable/chunks/index.0492f3ae.js","_app/immutable/chunks/HomeButton.645d24de.js","_app/immutable/chunks/SunnyTitle.71e1cc19.js","_app/immutable/chunks/navigation.ef3aaf29.js","_app/immutable/chunks/singletons.f54c875d.js","_app/immutable/chunks/index.064adaf7.js","_app/immutable/chunks/firebase.aa651bd7.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
