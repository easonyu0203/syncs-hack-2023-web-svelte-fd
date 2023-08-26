

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.2908cecf.js","_app/immutable/chunks/scheduler.73576e99.js","_app/immutable/chunks/index.1ecd7c33.js","_app/immutable/chunks/firebase.edf04377.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8b252e6a.js"];
export const stylesheets = ["_app/immutable/assets/2.bd53154f.css"];
export const fonts = [];
