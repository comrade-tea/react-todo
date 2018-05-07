import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, LOAD_ALL_TODOS} from "../constants";
import {List} from "immutable";
import {arrToMap} from "../helpers";


export default (reducerState = new List(), action) => {
	const {type, payload} = action

	switch (type) {
		case LOAD_ALL_TODOS:
			return new List(payload.todos)

		case ADD_TODO:
			return reducerState.push({
				title: payload.title,
				id: payload.id,
				completed: false
			})

		case COMPLETE_TODO:
			reducerState
	}

	return reducerState
}
