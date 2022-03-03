//import adapter from '@sveltejs/adapter-auto';

// @type {import('@sveltejs/kit').Config}
/*
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
*/

import adapter from '@sveltejs/adapter-static';
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        //target: '#svelte',
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        /*
        If you need to serve your file from a sub directory
        paths: {
            base: '/your-sub-dir',
        },
        */
    }
};

export default config;