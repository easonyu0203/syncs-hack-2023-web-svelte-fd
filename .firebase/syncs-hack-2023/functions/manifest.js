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
		client: {"start":"_app/immutable/entry/start.a4c5dc6c.js","app":"_app/immutable/entry/app.b999543b.js","imports":["_app/immutable/entry/start.a4c5dc6c.js","_app/immutable/chunks/scheduler.6f08bd49.js","_app/immutable/chunks/singletons.e64be62c.js","_app/immutable/chunks/index.af951d11.js","_app/immutable/entry/app.b999543b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.6f08bd49.js","_app/immutable/chunks/index.23aed9fc.js","_app/immutable/chunks/dev-browser.becde89a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
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
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/events/image/[imgDocId]",
				pattern: /^\/events\/image\/([^/]+?)\/?$/,
				params: [{"name":"imgDocId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/events/[userId]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/notes/image/[imgDocId]",
				pattern: /^\/notes\/image\/([^/]+?)\/?$/,
				params: [{"name":"imgDocId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/notes/[userId]",
				pattern: /^\/notes\/([^/]+?)\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/onboarding",
				pattern: /^\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/process_failed",
				pattern: /^\/process_failed\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/processing/[imgDocId]",
				pattern: /^\/processing\/([^/]+?)\/?$/,
				params: [{"name":"imgDocId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/[userId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
