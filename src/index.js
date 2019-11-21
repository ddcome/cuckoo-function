import {
	plus,
	division,
	multiplication,
	subtraction
} from './arithmetic.util';
import {
	guid,
	trimLeft,
	trim,
	trimRight
} from './string.util';
import {
	codeToName,
	DictionaryUtil
} from './dic.util';
import {
	numberToChinese
} from './money.util';
import {
	checkPhone,
	checkTelephone,
	checkBankCard,
	checkEmail,
	checkIdCard,
	isObj,
	isArray,
	isEmpty,
	checkNumber,
	checkDecimal,
	checkInteger,
	checkNoCnString,
	checkChinese,
	checkQQ,
	checkIP,
	checkURL,
	checkQuote,
	checkDate,
	checkTime,
	checkFullTime,
	checkSexByIdCard,
	checkEnStrRange
} from "./verification.util";
import {
	unique
} from "./array.util";
import {
	getExplore
} from "./browser.util";
import {
	getPreDay,
	getNextDay,
	getPreWeek,
	getNextWeek,
	getPreMouth,
	getNextMouth,
	getPreYear,
	getNextYear,
	getPreThreeMouth,
	dateFormat,
	isLeapYear,
	getDaysForMonth,
	getDateDistance
} from "./date.util";

export default {
	// 数组类
	unique,
	// 四则运算类
	plus,
	division,
	multiplication,
	subtraction,
	// 日期类
	getPreDay,
	getNextDay,
	getPreWeek,
	getNextWeek,
	getPreMouth,
	getNextMouth,
	getPreYear,
	getNextYear,
	getPreThreeMouth,
	dateFormat,
	isLeapYear,
	getDaysForMonth,
	getDateDistance,
	// 浏览器类
	getExplore,
	// 字符串类
	guid,
	trimLeft,
	trim,
	trimRight,
	// 数据字典类
	codeToName,
	DictionaryUtil,
	// 货币类
	numberToChinese,
	// 校验类
	checkPhone,
	checkTelephone,
	checkBankCard,
	checkEmail,
	checkIdCard,
	isObj,
	isArray,
	isEmpty,
	checkNumber,
	checkDecimal,
	checkInteger,
	checkNoCnString,
	checkChinese,
	checkQQ,
	checkIP,
	checkURL,
	checkQuote,
	checkDate,
	checkTime,
	checkFullTime,
	checkSexByIdCard,
	checkEnStrRange
}