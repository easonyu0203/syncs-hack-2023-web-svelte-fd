

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.aedeca9d.js","_app/immutable/chunks/scheduler.b5e21764.js","_app/immutable/chunks/index.731aee48.js","_app/immutable/chunks/stores.a6be284b.js","_app/immutable/chunks/singletons.d1be6290.js","_app/immutable/chunks/index.18605750.js"];
export const stylesheets = [];
export const fonts = [];
