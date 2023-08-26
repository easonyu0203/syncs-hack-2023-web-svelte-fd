

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/onboarding/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.86e44d3b.js","_app/immutable/chunks/scheduler.15758ddb.js","_app/immutable/chunks/index.3f5eacb3.js","_app/immutable/chunks/navigation.7f64dde7.js","_app/immutable/chunks/singletons.72c43e95.js","_app/immutable/chunks/index.57870d64.js","_app/immutable/chunks/HomeButton.b45f7d26.js","_app/immutable/chunks/SunnyTitle.a588e81a.js","_app/immutable/chunks/firebase.c906b4c9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.75ea4180.js","_app/immutable/chunks/spread.84d39b6c.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.bd53154f.css"];
export const fonts = [];
