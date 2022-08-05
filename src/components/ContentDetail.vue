<script setup lang="ts">
import { reactive } from 'vue'
defineProps({
	title: String,
})
const state = reactive({ count: 0 })
const increment = () => {
	state.count += 1
}
</script>

<template>
	<div>
		<h2>{{ title }}</h2>
		<div class="row">
			<div class="col-8">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cum totam, explicabo suscipit, odio
				eaque ducimus sed temporibus optio a perspiciatis quam distinctio necessitatibus voluptas fuga nam. Qui,
				sint nesciunt. count: {{ state.count }}
			</div>
			<div class="col-4 flex justify-center items-start">
				<q-btn unelevated color="primary" label="Primary" @click="increment()" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
