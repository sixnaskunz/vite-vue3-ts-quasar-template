<script setup lang="ts">
import { reactive, ref } from 'vue'

defineProps({
	title: String,
})

const dense = ref(false)
const state = reactive({ text: '', todoItem: { no: 0, text: '' }, todoList: [] as Array<Object> })
const addTodo = (text: string) => {
	state.todoItem.no = state.todoList.length + 1
	state.todoItem.text = text

	state.todoList.push(state.todoItem)
	resetTodo()
}
const resetTodo = () => {
	state.text = ''
	state.todoItem = { no: 0, text: '' }
}
const initialPagination: Object = {
	sortBy: 'desc',
	descending: false,
	page: 1,
	rowsPerPage: 10,
	// rowsNumber: xx if getting data from a server
}

const columns: any = [
	{
		name: 'no',
		required: true,
		label: 'No',
		align: 'left',
		field: (row: any) => row.no,
		format: (val: any) => `${val}`,
		sortable: true,
	},
	{
		name: 'task',
		required: true,
		label: 'Task',
		align: 'left',
		field: (row: any) => row.text,
		format: (val: any) => `${val}`,
		sortable: true,
	},
]
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
			<div class="col-12">
				<q-form @submit="addTodo(state.text)" @reset="resetTodo()" class="q-gutter-md">
					<div class="row flex justify-center content-center items-center">
						<div class="col-9 q-pa-md">
							<q-input filled v-model="state.text" label="Todo" />
						</div>
						<div class="col-3 q-pa-md">
							<q-btn unelevated label="Submit" type="submit" color="primary" />
							<q-btn unelevated label="Reset" type="reset" color="warning" flat class="q-ml-sm" />
						</div>
					</div>
				</q-form>
			</div>
		</div>
		<div class="row flex justify-center content-center items-start">
			<div class="col-12 q-pa-md">
				<q-table
					title="Todo List"
					:rows="state.todoList"
					:columns="columns"
					row-key="no"
					:pagination="initialPagination"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
