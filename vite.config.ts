import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	server: {
		host: '0.0.0.0',
		port: 9010,
	},
	preview: {
		host: '0.0.0.0',
		port: 9010,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [
		vue({
			template: { transformAssetUrls },
		}),
		quasar({
			sassVariables: 'src/styles/quasar-variables.sass',
		}),
	],
})
