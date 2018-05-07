import {ADD_TODO, TOGGLE_TODO, DELETE_TODOS, LOAD_ALL_TODOS} from "../constants";
import {OrderedMap, Record} from "immutable";
import {arrToMap, mapToArr} from "../helpers";


const TodoRecord = Record({
	id: null,
	title: null,
	isCompleted: false
})


export default (reducerState = new OrderedMap({}), action) => {
	const {type, payload} = action

	switch (type) {
		case LOAD_ALL_TODOS:
			return arrToMap(payload.todos, TodoRecord);

		case ADD_TODO:
			return reducerState.set(payload.id, new TodoRecord({
				title: payload.title,
				id: payload.id,
				isCompleted: false
			}))

		case TOGGLE_TODO:
			const currentState = reducerState.getIn([payload.id, 'isCompleted'])
			return reducerState.setIn([payload.id, 'isCompleted'], !currentState)
		
		case DELETE_TODOS:

			return reducerState.filterNot(item => {
				console.log("---", item.isCompleted)
				return item.isCompleted
			})
			// return reducerState
	}

	return reducerState
}
