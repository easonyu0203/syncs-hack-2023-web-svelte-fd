

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/images/_imgId_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.b71d01f7.js","_app/immutable/chunks/scheduler.b5e21764.js","_app/immutable/chunks/index.731aee48.js"];
export const stylesheets = [];
export const fonts = [];
