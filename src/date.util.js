/**
 * 获取前一周
 * @param currentDate
 * @returns {string}
 */
export function getPreWeek (currentDate) {
	let currentDateTemp = new Date();
	if (currentDate) {
		currentDateTemp = new Date(currentDate);
	}
	let res = new Date();
	res.setDate(currentDateTemp.getDate() - 6);
	let d = res.getDate();
	let m = res.getMonth() + 1;
	let y = res.getFullYear();
	return y + '-' + m + '-' + d;
}

/**
 * 获取前一个月
 * @param currentDate
 * @returns {string}
 */
export function getPreOneMouth (currentDate) {
	let currentDateTemp = new Date();
	if (currentDate) {
		currentDateTemp = new Date(currentDate);
	}
	let res = new Date();
	res.setMonth(currentDateTemp.getMonth() - 1);
	let y = res.getFullYear();
	let m = res.getMonth() + 1;
	let d = res.getDate();
	return y + '-' + m + '-' + d;
}

/**
 * 获取前一年
 * @param currentDate
 * @returns {string}
 */
export function getPreYear (currentDate) {
	let currentDateTemp = new Date();
	if (currentDate) {
		currentDateTemp = new Date(currentDate);
	}
	let res = new Date();
	res.setFullYear(currentDateTemp.getFullYear() - 1);
	res = res.toLocaleDateString().replace(new RegExp('/', 'g'), '-');
	return res;
}

/**
 * 获取前一个季度
 * @param currentDate
 * @returns {string}
 */
export function getPreThreeMouth (currentDate) {
	let currentDateTemp = new Date();
	if (currentDate) {
		currentDateTemp = new Date(currentDate);
	}
	let res = new Date();
	res.setMonth(currentDateTemp.getMonth() - 2);
	let y = res.getFullYear();
	let m = res.getMonth() + 1;
	let d = res.getDate();
	return y + '-' + m + '-' + d;
}

/**
 * 格式化时间
 * @param {string} style 'yyyy-MM-dd hh:mm:ss'
 * @returns {string}
 */
export function formatDate (style) {
	if (!style || !(style = style.toString().trim())) style = 'yyyy-MM-dd hh:mm:ss';
	let o = {
		'M+': this.getMonth() + 1, //month
		'd+': this.getDate(),      //day
		'h+': this.getHours(),     //hour
		'm+': this.getMinutes(),   //minute
		's+': this.getSeconds(),   //second
		'q+': Math.floor((this.getMonth() + 3) / 3), //quarter
		'S': this.getMilliseconds() //millisecond
	};
	if (/(y+)/.test(style))
		style = style.replace(RegExp.$1, this.getFullYear().toString().substr(4 - RegExp.$1.length));
	for (let k in o)
		if (new RegExp('(' + k + ')').test(style))
			style = style.replace(RegExp.$1, RegExp.$1.length == 1
				? o[k]
				: ('00' + o[k]).substr(o[k].toString().length));
	return style;
}


/**
 * 判断是否是闰年
 * @param year 当前年份
 * */
export function isRunNian(year) {
	if ((!(year % 4) && year % 100) || !(year % 400)) return true;
	return false;
}

/**
 * 获取指定月份的天数
 * @param year  当前年份
 * @param month 当前月份
 * */
export function getDaysForMonth(year, month) {
	let datesDate = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (month === 2 && isRunnian(year)) return 29;
	return datesDate[month];
}