

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.258e33bd.js","_app/immutable/chunks/scheduler.15758ddb.js","_app/immutable/chunks/index.3f5eacb3.js","_app/immutable/chunks/stores.e50b9230.js","_app/immutable/chunks/singletons.72c43e95.js","_app/immutable/chunks/index.57870d64.js"];
export const stylesheets = [];
export const fonts = [];
