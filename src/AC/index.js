import {} from "redux-thunk";

import {LOAD_ALL_TODOS, DELETE_TODOS, ADD_TODO, TOGGLE_TODO} from "../constants";


export function loadAllTodos(todos) {
	return {
		type: LOAD_ALL_TODOS,
		payload: {todos}
	}
}

export function addTodo(text) {
	return (dispatch) => {
		dispatch({
			type: ADD_TODO,
			payload: {title: text, id: Date.now().toString()}
		})
	}
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		payload: {id}
	}
}

export function deleteTodos() {
	return {
		type: DELETE_TODOS
	}
}