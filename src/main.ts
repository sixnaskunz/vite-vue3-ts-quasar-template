import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'
import '@/styles/main.scss'
import 'normalize.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

createApp(App)
	.use(router)
	.use(Quasar, {
		plugins: {}, // import Quasar plugins and add here
	})
	.mount('#app')
