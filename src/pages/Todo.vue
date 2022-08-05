<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Todo from '@/components/Todo.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'TodoPage',
})
</script>

<template>
	<q-page>
		<Todo title="Todo Page" />
	</q-page>
</template>
