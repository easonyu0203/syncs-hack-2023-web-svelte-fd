

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.52692202.js","_app/immutable/chunks/scheduler.078b4462.js","_app/immutable/chunks/index.0492f3ae.js","_app/immutable/chunks/stores.b53e8de9.js","_app/immutable/chunks/singletons.fa2c4f05.js","_app/immutable/chunks/index.064adaf7.js"];
export const stylesheets = [];
export const fonts = [];
