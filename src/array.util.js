/**
 * 数组去重复
 * @param arr
 * @returns {*[]}
 */
export function unique (arr) {
	return [...new Set(arr)];
}