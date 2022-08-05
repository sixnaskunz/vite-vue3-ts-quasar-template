<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ContentDetail from '@/components/ContentDetail.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HomePage',
})
</script>

<template>
	<div>
		<ContentDetail title="Home Page" />
	</div>
</template>
