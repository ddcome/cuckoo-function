/**
 * 检查是否是手机号
 * @param phone
 * @returns {boolean}
 */
export function checkPhone (phone) {
	const reg = /(1[3-9]\d{9}$)/;
	return reg.test(phone);
}

/**
 * 移动电话校验
 * @param phone
 * @returns {boolean}
 */
export function checkTelephone (phone) {
	const reg = /^\d{3,4}\-\d{7,8}$/;
	return reg.test(phone);
}

/**
 * 银行卡校验
 * @param bankCard
 * @returns {boolean}
 */
export function checkBankCard (bankCard) {
	const reg = /^[0-9]{16,19}$/;
	return reg.test(bankCard);
}

/**
 * email校验
 * @param email
 * @returns {boolean}
 */
export function checkEmail (email) {
	const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	return reg.test(email);
}

/**
 * 身份证校验
 * {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
 * @param id
 * @returns {boolean}
 */
export function checkIdCard (id) {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(id);
}

/**
 * 是否对象
 * @param value 值
 * */
export function isObj (value) {
	return Object.prototype.toString.call(value).slice(8, -1) === 'Object'
}

/**
 * 是否数组
 * @param value值
 * */
export function isArray (value) {
	return Object.prototype.toString.call(value).slice(8, -1) === 'Array'
}

/**
 * 判断空
 * @param value
 * @returns {boolean}
 */
export function isEmpty (value) {
	if ((!value || typeof(value) === 'undefined') && (value !== 0 || value !== '0')) {
		return true;
	} else {
		return false
	}
}

/**
 * 是否全部是数字
 * @param str 字符串
 * @returns {boolean}
 */
export function checkNumber (str) {
	return str.match(/\D/) == null;
}

/**
 * 是否为数字，包含小数
 * @param str 字符串
 * @returns {boolean}
 */
export function checkDecimal (str) {
	if (str.match(/^-?\d+(\.\d+)?$/g) == null) {
		return false;
	}
	else {
		return true;
	}
}

/**
 * 是否为整数
 * @param str 字符串
 * @returns {boolean}
 */
export function checkInteger (str) {
	if (str.match(/^[-+]?\d*$/) == null) {
		return false;
	}
	else {
		return true;
	}
}

/**
 * 是否是非汉字字符
 * @param str 字符串
 * @returns {boolean}
 */
export function checkNoCnString (str) {
	if (/[^\x00-\xff]/g.test(str)) {
		return false;
	}
	else {
		return true;
	}
}

/**
 * 是否包含汉字
 * @param str 字符串
 * @returns {boolean}
 */
export function checkChinese (str) {
	if (escape(str).indexOf("%u") != -1) {
		return true;
	}
	else {
		return false;
	}
}

/**
 * 是否是QQ号
 * @param str 字符串
 * @returns {boolean}
 */
export function checkQQ (str) {
	if (str.match(/^\d{5,10}$/) == null) {
		return false;
	}
	else {
		return true;
	}
}

/**
 * 是否是IP地址
 * @param str 字符串
 * @returns {boolean}
 */
export function checkIP (str) {
	let arg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	if (str.match(arg) == null) {
		return false;
	}
	else {
		return true;
	}
}

/**
 * 是否是URL
 * @param str 字符串
 * @returns {boolean}
 */
export function checkURL (str) {
	if (str.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i) == null) {
		return false
	}
	else {
		return true;
	}
}

/**
 * 是否包含特殊字符
 * @param str 字符串
 * @returns {boolean}
 */
export function checkQuote (str) {
	let items = new Array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "{", "}", "[", "]", "(", ")");
	items.push(":", ";", "'", "|", "\\", "<", ">", "?", "/", "<<", ">>", "||", "//");
	items.push("admin", "administrators", "administrator", "管理员", "系统管理员");
	items.push("select", "delete", "update", "insert", "create", "drop", "alter", "trancate");
	str = str.toLowerCase();
	for (let i = 0; i < items.length; i++) {
		if (str.indexOf(items[i]) >= 0) {
			return true;
		}
	}
	return false;
}

/**
 * 检查是否是日期,验证短日期（2019-11-11）
 * @param str 字符串
 * @returns {boolean}
 */
export function checkDate (str) {
	let value = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if (value == null) {
		return false;
	}
	else {
		let date = new Date(value[1], value[3] - 1, value[4]);
		return (date.getFullYear() == value[1] && (date.getMonth() + 1) == value[3] && date.getDate() == value[4]);
	}
}

/**
 * 是否是时间,验证时间(10:57:10)
 * @param str 字符串
 * @returns {boolean}
 */
export function checkTime (str) {
	let value = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/)
	if (value == null) {
		return false;
	}
	else {
		if (value[1] > 24 || value[3] > 60 || value[4] > 60) {
			return false
		}
		else {
			return true;
		}
	}
}

/**
 * 是否是时间（完整格式）, (2019-11-11 10:57:10)
 * @param str
 * @returns {boolean}
 */
export function checkFullTime (str) {
	let value = str.match(/^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/);
	if (value == null) {
		return false;
	}
	else {
		return true;
	}
}

/**
 * 判断性别
 * @param idCard 身份证号
 * @returns {number} 0[女] | 1[男] | -1[未知，原因是输入了不合法身份证]
 */
export function checkSexByIdCard (idCard) {
	let trim = function (str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	};
	idCard = trim(idCard.replace(/ /g, ""));// 对身份证号码做处理。包括字符间有空格。
	if (idCard.length == 15) {
		if (idCard.substring(14, 15) % 2 == 0) {
			return 0;
		}
		else {
			return 1;
		}
	}
	else if (idCard.length == 18) {
		if (idCard.substring(14, 17) % 2 == 0) {
			return 0;
		}
		else {
			return 1;
		}
	}
	else {
		return -1;
	}
}

/**
 * 是否是0-20个字母数字组合
 * @param str 字符串
 * @param start 最小个数，默认0，非必填
 * @param end 最大个数，默认20，非必填
 * @returns {boolean}
 */
export function checkEnStrRange (str, start, end) {
	let startT = 0; let endT = 20;
	if (typeof start !== 'undefined' && typeof end !== 'undefined' && Number.isInteger(start) && Number.isInteger(end)) {
		startT = start;
		endT = end;
	}
	const reg = new RegExp('^[a-z0-9A-Z]{' + startT + ',' + endT + '}$');
	if (reg.test(str)) {
		return true;
	} else {
		return false;
	}
}


/*
// 港澳回乡证
// 规则： H/M + 10位或6位数字
// 样本： H1234567890
/^([A-Z]\d{6,11}(\(\w{1}\))?)$/

// 台胞证
// 规则： 新版8位或18位数字， 旧版10位数字 + 英文字母
// 样本： 12345678 或 1234567890B
 /^\d{8}|^\d{18}|^[a-zA-Z0-9]{10}$/

// 护照
// 规则： 14/15开头 + 7位数字, G + 8位数字, P + 7位数字, S/D + 7或8位数字,等
// 样本： 141234567, G12345678, P1234567
/^([a-zA-z]|[0-9]){5,17}$/

// 军官证
// 规则： 军/兵/士/文/职/广/（其他中文） + "字第" + 4到8位字母或数字 + "号"
// 样本： 军字第2001988号, 士字第P011816X号
/^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/
 */