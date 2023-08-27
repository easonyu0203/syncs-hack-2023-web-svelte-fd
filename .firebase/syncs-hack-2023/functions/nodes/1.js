

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.881dfcae.js","_app/immutable/chunks/scheduler.6f08bd49.js","_app/immutable/chunks/index.23aed9fc.js","_app/immutable/chunks/stores.3f9f2865.js","_app/immutable/chunks/singletons.9a0f1c14.js","_app/immutable/chunks/index.af951d11.js"];
export const stylesheets = [];
export const fonts = [];
