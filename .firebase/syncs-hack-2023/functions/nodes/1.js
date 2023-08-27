

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5ad3ea1c.js","_app/immutable/chunks/scheduler.078b4462.js","_app/immutable/chunks/index.0492f3ae.js","_app/immutable/chunks/stores.86735783.js","_app/immutable/chunks/singletons.c8bdf02a.js","_app/immutable/chunks/index.064adaf7.js"];
export const stylesheets = [];
export const fonts = [];
