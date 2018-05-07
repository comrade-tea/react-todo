import {OrderedMap} from "immutable";

export function arrToMap(array, model = OrderedMap) {
	return array.reduce((acc, item) => {
		return acc.set(item.id, new model(item))
	}, new OrderedMap({}))
}

export function mapToArr(map) {
	return map.toSeq().toArray()
}