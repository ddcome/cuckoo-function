export function checkPhone(phone){
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