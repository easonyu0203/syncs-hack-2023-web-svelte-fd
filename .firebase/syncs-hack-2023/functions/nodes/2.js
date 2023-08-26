

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.239ae4ac.js","_app/immutable/chunks/scheduler.b5e21764.js","_app/immutable/chunks/index.731aee48.js","_app/immutable/chunks/HomeButton.47e13ceb.js","_app/immutable/chunks/SunnyTitle.3b440636.js","_app/immutable/chunks/firebase.77b34670.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.18605750.js","_app/immutable/chunks/navigation.587ec899.js","_app/immutable/chunks/singletons.d1be6290.js"];
export const stylesheets = [];
export const fonts = [];
