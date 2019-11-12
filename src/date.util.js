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
 * @param fmt {string} "YYYY-mm-dd HH:MM" 可缺省部分
 * @param date {date} 时间
 * @returns {*}
 */
export function dateFormat(fmt, date) {
	let ret;
	let opt = {
		"Y+": date.getFullYear().toString(),        // 年
		"m+": (date.getMonth() + 1).toString(),     // 月
		"d+": date.getDate().toString(),            // 日
		"H+": date.getHours().toString(),           // 时
		"M+": date.getMinutes().toString(),         // 分
		"S+": date.getSeconds().toString()          // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}


/**
 * 判断是否是闰年
 * @param year {number} 当前年份
 * */
export function isLeapYear(year) {
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
	if (month === 2 && isLeapYear(year)) return 29;
	return datesDate[month];
}