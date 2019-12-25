/**
 * 获取前一周时间点
 * @param currentDate 字符串时间
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
 * 获取后一周时间点
 * @param currentDate 字符串时间
 * @returns {string}
 */
export function getNextWeek (currentDate) {
	let currentDateTemp = new Date();
	if (currentDate) {
		currentDateTemp = new Date(currentDate);
	}
	let res = new Date();
	res.setDate(currentDateTemp.getDate() + 6);
	let d = res.getDate();
	let m = res.getMonth() + 1;
	let y = res.getFullYear();
	return y + '-' + m + '-' + d;
}

/**
 * 获取前一个月时间点
 * @param currentDate 字符串时间
 * @returns {string}
 */
export function getPreMouth (currentDate) {
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
 * 获取后一个月时间点
 * @param currentDate 字符串时间
 * @returns {string}
 */
export function getNextMouth (currentDate) {
	let arr = currentDate.split('-');
	let year = arr[0]; //获取当前日期的年份
	let month = arr[1]; //获取当前日期的月份
	let day = arr[2]; //获取当前日期的日
	let year2 = year;
	let month2 = parseInt(month) + 1;
	if (month2 === 13) {
		year2 = parseInt(year2) + 1;
		month2 = 1;
	}
	let day2 = day;
	let days2 = new Date(year2, month2, 0);
	days2 = days2.getDate();
	if (day2 > days2) {
		day2 = days2;
	}
	if (month2 < 10) {
		month2 = '0' + month2;
	}

	let t2 = year2 + '-' + month2 + (day2 ? "'-' + day2" : '');
	return t2;
}

/**
 * 获取前一年时间点
 * @param currentDate 字符串时间
 * @returns {string}
 */
export function getPreYear (currentDate) {
	let currentDateTemp = new Date();
	if (currentDate) {
		currentDateTemp = new Date(currentDate);
	}
	let res = new Date();
	res.setFullYear(currentDateTemp.getFullYear() - 1);
	// res = res.toLocaleDateString().replace(new RegExp('/', 'g'), '-');
	return dateFormat('YYYY-mm-dd', res);
}

/**
 * 获取后一年时间点
 * @param currentDate 字符串时间
 * @returns {string}
 */
export function getNextYear (currentDate) {
	let currentDateTemp = new Date();
	if (currentDate) {
		currentDateTemp = new Date(currentDate);
	}
	let res = new Date();
	res.setFullYear(currentDateTemp.getFullYear() + 1);
	res = res.toLocaleDateString().replace(new RegExp('/', 'g'), '-');
	return res;
}

/**
 * 获取前一个季度时间点
 * @param currentDate 字符串时间
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
 * 获取前一天时间点
 * @param currentDate 字符串时间
 * @returns {string} 前一天时间点
 */
export function getPreDay (currentDate) {
	let curDate = new Date(currentDate);
	return dateFormat(
		'YYYY-mm-dd',
		new Date(curDate.getTime() - 24 * 60 * 60 * 1000)
	);
}

/**
 * 获取后一天时间点
 * @param currentDate 字符串时间
 * @returns {string} 后一天时间点
 */
export function getNextDay (currentDate) {
	let curDate = new Date(currentDate);
	return dateFormat(
		'YYYY-mm-dd',
		new Date(curDate.getTime() + 24 * 60 * 60 * 1000)
	);
}

/**
 * 格式化时间
 * @param fmt {string} "YYYY-mm-dd HH:MM" 可缺省部分
 * @param date {date} 时间
 * @returns {*}
 */
export function dateFormat (fmt, date) {
	let ret;
	let opt = {
		'Y+': date.getFullYear().toString(), // 年
		'm+': (date.getMonth() + 1).toString(), // 月
		'd+': date.getDate().toString(), // 日
		'H+': date.getHours().toString(), // 时
		'M+': date.getMinutes().toString(), // 分
		'S+': date.getSeconds().toString() // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp('(' + k + ')').exec(fmt);
		if (ret) {
			fmt = fmt.replace(
				ret[1],
				ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
			);
		}
	}
	return fmt;
}

/**
 * 判断是否是闰年
 * @param year {number} 当前年份
 * */
export function isLeapYear (year) {
	if ((!(year % 4) && year % 100) || !(year % 400)) return true;
	return false;
}

/**
 * 获取指定月份的天数
 * @param year  当前年份
 * @param month 当前月份
 * */
export function getDaysForMonth (year, month) {
	let datesDate = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (month === 2 && isLeapYear(year)) return 29;
	return datesDate[month];
}

/**
 * 获取开始时间到结束时间的时间段数据，返回时间字符串集合.
 * @param startDateStr 开始字符串时间 'YYYY-mm-dd' 或 'YYYY-mm' 或 'YYYY'
 * @param endDateStr 结束字符串时间
 * @returns {Array} 时间字符串集合
 */
export function getDateDistance (startDateStr, endDateStr) {
	let distance = [];
	let temp = '';
	const len = startDateStr.length;

	let reCalcu = (startDateStr, endDateStr) => {
		if (Date.parse(startDateStr) >= Date.parse(endDateStr)) {
			return;
		} else {
			if (len >= 4 && len <= 5) {
				temp = dateFormat('YYYY', new Date(getNextYear(startDateStr)));
			} else if (len >= 6 && len <= 7) {
				temp = dateFormat('YYYY-mm', new Date(getNextMouth(startDateStr)));
			} else if (len >= 8 && len <= 10) {
				temp = dateFormat('YYYY-mm-dd', new Date(getNextDay(startDateStr)));
			}
			distance.push(temp);
			reCalcu(temp, endDateStr);
		}
	};
	distance.push(startDateStr);
	reCalcu(startDateStr, endDateStr);
	return distance;
}
