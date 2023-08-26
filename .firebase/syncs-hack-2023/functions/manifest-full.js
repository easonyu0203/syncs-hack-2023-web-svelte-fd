export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/SpaceGrotesk.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.df555eea.js","app":"_app/immutable/entry/app.dc848acf.js","imports":["_app/immutable/entry/start.df555eea.js","_app/immutable/chunks/scheduler.73576e99.js","_app/immutable/chunks/singletons.5790b253.js","_app/immutable/chunks/index.8b252e6a.js","_app/immutable/entry/app.dc848acf.js","_app/immutable/chunks/scheduler.73576e99.js","_app/immutable/chunks/index.1ecd7c33.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
