

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.cc7cbd09.js","_app/immutable/chunks/index.0ecf0eff.js"];
export const stylesheets = [];
export const fonts = [];
