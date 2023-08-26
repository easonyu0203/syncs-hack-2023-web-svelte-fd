

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.8a42ba8f.js","_app/immutable/chunks/scheduler.15758ddb.js","_app/immutable/chunks/index.3f5eacb3.js","_app/immutable/chunks/spread.84d39b6c.js","_app/immutable/chunks/firebase.c906b4c9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.57870d64.js","_app/immutable/chunks/navigation.7f64dde7.js","_app/immutable/chunks/singletons.72c43e95.js"];
export const stylesheets = [];
export const fonts = [];
