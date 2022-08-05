<script setup lang="ts">
defineProps({
	title: String,
})
</script>

<template>
	<div>
		<h2>{{ title }}</h2>
		<div class="row">
			<div class="col-12">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cum totam, explicabo suscipit, odio
				eaque ducimus sed temporibus optio a perspiciatis quam distinctio necessitatibus voluptas fuga nam. Qui,
				sint nesciunt.
			</div>
		</div>
		<div class="row">
			<ul>
				<li><router-link :to="{ path: '/' }">Home</router-link></li>
				<li><router-link :to="{ path: '/about' }">About</router-link></li>
			</ul>
		</div>
	</div>
</template>

<style scoped></style>
