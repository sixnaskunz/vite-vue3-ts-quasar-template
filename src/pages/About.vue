<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AboutDetail from '@/components/AboutDetail.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AboutPage',
})
</script>

<template>
	<div>
		<AboutDetail title="About Page" />
	</div>
</template>
