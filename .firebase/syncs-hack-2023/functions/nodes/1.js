

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cc71c614.js","_app/immutable/chunks/scheduler.078b4462.js","_app/immutable/chunks/index.0492f3ae.js","_app/immutable/chunks/stores.b59c6477.js","_app/immutable/chunks/singletons.f54c875d.js","_app/immutable/chunks/index.064adaf7.js"];
export const stylesheets = [];
export const fonts = [];
