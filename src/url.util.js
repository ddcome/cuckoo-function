/**
 * 指定key获取
 * @param name 键
 * */
export function getUrlParam(name){
	let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	let r = decodeURI(window.location.search).substr(1).match(reg);
	if(r != null) return  r[2]; return null;
}

/**
 * 获取全部url参数,并转换成对象
 * */
export function getUrlParams(url) {
	url = url ? url : window.location.href;
	let _pa = url.substring(url.indexOf('?') + 1),
		_arrS = _pa.split('&'),
		_rs = {};
	for (let i = 0, _len = _arrS.length; i < _len; i++) {
		let pos = _arrS[i].indexOf('=');
		if (pos == -1) {
			continue;
		}
		let name = _arrS[i].substring(0, pos),
			value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
		_rs[name] = value;
	}
	return _rs;
}