export function guid () {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

/**
 * 删除左右两端的空格
 * @param str
 * @returns {*}
 */
export function trim (str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 删除左边的空格
 * @param str
 * @returns {*}
 */
export function trimLeft (str) {
	return str.replace(/(^\s*)/g, "");
}

/**
 * 删除右边的空格
 * @param str
 * @returns {*}
 */
export function trimRight (str) {
	return str.replace(/(\s*$)/g, "");
}



