

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.76eaf116.js","_app/immutable/chunks/scheduler.73576e99.js","_app/immutable/chunks/index.1ecd7c33.js","_app/immutable/chunks/singletons.5790b253.js","_app/immutable/chunks/index.8b252e6a.js"];
export const stylesheets = [];
export const fonts = [];
