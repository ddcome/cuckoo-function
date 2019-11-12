import {plus, division, multiplication, subtraction} from './arithmetic.util';
import {guid, trimLeft, trim, trimRight} from './string.util';
import {codeToName} from './dic.util';
import {numberToChinese} from './money.util';
import {
	checkPhone,
	checkTelephone,
	checkBankCard,
	checkEmail,
	checkIdCard,
	isObj,
	isArray,
	isEmpty
} from "./verification.util";
import {unique} from "./array.util";
import {getExplore} from "./browser.util";
import {
	getPreWeek,
	getPreOneMouth,
	getPreYear,
	getPreThreeMouth,
	dateFormat,
	isLeapYear,
	getDaysForMonth
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
	getPreWeek,
	getPreOneMouth,
	getPreYear,
	getPreThreeMouth,
	dateFormat,
	isLeapYear,
	getDaysForMonth,
	// 浏览器类
	getExplore,
	// 字符串类
	guid,
	trimLeft,
	trim,
	trimRight,
	// 数据字典类
	codeToName,
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
	isEmpty
}