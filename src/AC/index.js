import {} from "redux-thunk";

import {LOAD_ALL_TODOS, DELETE_TODO, ADD_TODO, COMPLETE_TODO} from "../constants";


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

export function completeTodo(id) {
	return {
		type: COMPLETE_TODO,
		payload: {id}
	}
}

export function deleteTodo(id) {

}