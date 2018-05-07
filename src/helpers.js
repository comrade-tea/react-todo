import {OrderedMap} from "immutable";


export function arrToMap(array) {
	return array.reduce((acc, item) => {
		return acc.set([item.id], item)
	}, new OrderedMap({}))
}

export function mapToArr() {

}