import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, LOAD_ALL_TODOS} from "../constants";
import {List} from "immutable";
import {arrToMap} from "../helpers";


export default (reducerState = [], action) => {
	const {type, payload} = action

	switch (type) {
		case LOAD_ALL_TODOS:
			// return new List(payload.todos)
			return arrToMap(payload.todos)

		case ADD_TODO:
			return reducerState.push({
				title: payload.title,
				id: payload.id,
				completed: false
			})

		case TOGGLE_TODO:
			console.log("----", 'toggle')
			return reducerState
	}

	return reducerState
}
