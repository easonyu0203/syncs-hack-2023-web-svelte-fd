

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.12052679.js","_app/immutable/chunks/scheduler.6f08bd49.js","_app/immutable/chunks/index.23aed9fc.js","_app/immutable/chunks/stores.f1232561.js","_app/immutable/chunks/singletons.e64be62c.js","_app/immutable/chunks/index.af951d11.js"];
export const stylesheets = [];
export const fonts = [];
