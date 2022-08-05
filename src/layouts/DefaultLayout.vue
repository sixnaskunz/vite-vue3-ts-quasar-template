<template>
	<q-layout view="hHh lpR fFf">
		<q-header class="bg-primary text-white">
			<q-img src="@/assets/vite-logo.png" spinner-color="white" style="height: 50px; max-width: 50px" />

			<div class="col-4 q-ma-md">
				<q-btn :to="{ path: '/' }" unelevated color="secondary" label="Home" />
			</div>
			<div class="col-4 q-ma-md">
				<q-btn :to="{ path: '/about' }" unelevated color="secondary" label="About" />
			</div>
			<div class="col-4 q-ma-md">
				<q-btn :to="{ path: '/todo' }" unelevated color="secondary" label="Todo" />
			</div>
		</q-header>

		<q-page-container>
			<router-view></router-view>
		</q-page-container>

		<q-footer class="bg-primary text-white">
			<q-toolbar>
				<q-toolbar-title> Footer </q-toolbar-title>
			</q-toolbar>
		</q-footer>
	</q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DefaultLayout',
})
</script>

<style lang="scss" scoped>
header {
	height: 110px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 25px 0 25px !important;
}

.q-page-container {
	margin-top: 110px;
	margin-bottom: 110px;
	padding: 25px 25px 25px 25px !important;
}

@media only screen and (max-width: 1163px) and (min-width: 768px) {
	header {
		height: 110px;
		padding: 0 50px 0 50px !important;
	}
	.q-page-container {
		padding: 25px 50px 25px 50px !important;
	}
}
@media only screen and (min-width: 1164px) {
	header {
		height: 110px;
		padding: 0 100px 0 100px !important;
	}
	.q-page-container {
		padding: 25px 100px 25px 100px !important;
	}
}
</style>
