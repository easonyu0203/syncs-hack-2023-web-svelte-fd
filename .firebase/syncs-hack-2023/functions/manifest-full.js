export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/SpaceGrotesk.ttf","ghost.gif","home.png","logo.png","nap.png","snap.png"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.715d2d10.js","app":"_app/immutable/entry/app.3d5b3f3d.js","imports":["_app/immutable/entry/start.715d2d10.js","_app/immutable/chunks/scheduler.15758ddb.js","_app/immutable/chunks/singletons.72c43e95.js","_app/immutable/chunks/index.57870d64.js","_app/immutable/entry/app.3d5b3f3d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.15758ddb.js","_app/immutable/chunks/index.3f5eacb3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/adding/[imgDocId]",
				pattern: /^\/adding\/([^/]+?)\/?$/,
				params: [{"name":"imgDocId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/onboarding",
				pattern: /^\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/process_failed",
				pattern: /^\/process_failed\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/processing/[imgDocId]",
				pattern: /^\/processing\/([^/]+?)\/?$/,
				params: [{"name":"imgDocId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
