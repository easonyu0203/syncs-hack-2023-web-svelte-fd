

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9ce68250.js","_app/immutable/chunks/index.0ecf0eff.js"];
export const stylesheets = ["_app/immutable/assets/0.4656135f.css"];
export const fonts = [];
