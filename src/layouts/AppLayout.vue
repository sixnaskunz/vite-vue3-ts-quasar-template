<template>
	<component :is="layout">
		<slot />
	</component>
</template>

<script lang="ts">
/**
 * NOTES: https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b
 */
import { defineComponent, shallowRef, watch, Component } from 'vue'
import { useRoute, RouteMeta } from 'vue-router'

import DefaultLayout from './DefaultLayout.vue'

export default defineComponent({
	name: 'AppLayout',
	setup() {
		const layout = shallowRef<Component>(DefaultLayout)
		const route = useRoute()

		watch(
			() => route.meta,
			(meta: RouteMeta) => {
				layout.value = meta.layout ? meta.layout : DefaultLayout
			},
			{ immediate: true }
		)

		return {
			layout,
		}
	},
})
</script>
