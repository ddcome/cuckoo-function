/**
 * 存储
 * @param key 键
 * @param value 值
 **/
export function setLocalStorage(key, value) {
	value = typeof value != "object" ? value : JSON.stringify(value);
	window.localStorage.setItem(key, value);
}

/**
 * 获取
 * @params key 键
 **/
export function getLocalStorage(key) {
	let obj = window.localStorage.getItem(key);
	return obj && (obj.indexOf('{') === 0 || obj.indexOf("[") === 0) ? eval("(" + obj + ")") : obj;
}

/**
 * 删除
 * @param key: 键
 * 不传参数则清除所有
 **/
export function deleteLocalStorage(key) {
	key ? window.localStorage.removeItem(key) : window.localStorage.clear();
}

/**
 * 存储
 * @param key 键
 * @param value 值
 **/
export function setSessionStorage(key, value) {
	value = typeof value !== "object" ? value : JSON.stringify(value);
	window.sessionStorage.setItem(key, value);
}

/**
 * 获取
 * @param key 键
 **/
export function getSessionStorage(key) {
	let obj = window.sessionStorage.getItem(key);
	return obj && (obj.indexOf("{") === 0 || obj.indexOf("[") === 0) ? eval("(" + obj + ")") : obj;
}

/**
 * 删除
 * @param key: 键
 * 不传参数则清除所有
 **/
export function deleteSessionStorage(key) {
	key ? window.sessionStorage.removeItem(key) : window.sessionStorage.clear();
}


/**
 * 存储
 * @param key 键
 * @param value 值
 * @param days 时间，单位为天，为0或者为空时不设定过期时间，浏览器关闭时cookie自动消失
 **/
export function setCookie(key, value, days, otherParams) {
	let str = key + '=' + escape(value) + ';path=/';
	let nowTime = new Date().getTime();
	let addDate = new Date(nowTime + days * 24 * 60 * 60 * 1000)
	if (!isNaN(days) && days > 0) str += '; expires=' + addDate.toGMTString();
	if (otherParams && typeof otherParams === 'object')
		for (let i in otherParams) str += ';' + i + '=' + otherParams[i];
	document.cookie = str;
}

/**
 * 获取
 * @param key 键
 * */
export function getCookie(key) {
	let arr = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
	if (!arr || !arr.length) return null;
	return unescape(arr[2]);
}

/**
 * 删除
 * @param key 键
 * */
export function deleteCookie(key) {
	document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}