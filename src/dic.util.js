/**
 *
 * 利用dic，将data中的数据code装换成中文.
 * @param {JSON} data 输入数据
 * @param {JSON} dic 字典数据
 * @param {JSON} config
 * @returns {*} 已被替换的数据
 */
export function codeToName (data, dic, config) {
	let standard = {
		name: 'title',
		code: 'code',
		children: 'childrens'
	};

	if (config) {
		standard = Object.assign(standard, config);
	}

	// 简化字典结构
	let simpleDicDeep = function (d, res) {
		if (Array.isArray(d)) {
			d.forEach((c) => {
				if (c[standard['name']] && c[standard['code']]) {
					res[c[standard['code']]] = c[standard['name']];
				}
				if (c[standard['children']] && c[standard['children']].length > 0) {
					simpleDicDeep(c[standard['children']], res);
				}
			});
		} else {
			if (d[standard['name']] && d[standard['code']]) {
				res[d[standard['code']]] = d[standard['name']];
			}
			if (d[standard['children']] && d[standard['children']].length > 0) {
				simpleDicDeep(d[standard['children']], res);
			}
		}

	};

	// 简化字典结构
	let simpleDic = function (d) {
		let res = {};
		simpleDicDeep(d, res);
		return res;
	};

	// 为str增加双引号
	let addSYH = function (str) {
		return '"' + str + '"';
	};

	try {
		let temp = JSON.stringify(data);
		// 1.将数据字典处理成简单结构的数据
		let res = simpleDic(dic);
		// 2.正则替换
		for (let i in res) {
			temp = temp.replace(new RegExp(addSYH(i), 'g'), addSYH(res[i]));
		}
		return JSON.parse(temp);
	} catch (e) {
		console.log('[error in areaCodeToChinese]', e);
		return data;
	}
}

export class DictionaryUtil {
	dicData = null;
	dicId = null;
	config = {
		label: 'label',
		value: 'value',
		childrens: 'childrens',
		name: 'title',
		code: 'code',
		children: 'childrens'
	};

	/**
	 * 构造器
	 * @param dicId 字典ID
	 * @param data 初始化字典数据
	 * @param config 字典KEY值配置
	 */
	constructor (dicId, data, config) {
		this.dicId = dicId;
		if (data) {
			this.setDicData(data);
		}
		if (config) {
			this.config = Object.assign(this.config, config);
		}
	}

	/**
	 * 设置字典数据
	 * @param data
	 */
	setDicData (data) {
		this.dicData = data;
	}

	/**
	 * 查询节点信息
	 * @param label
	 * @param value [array|object]
	 * @returns {*}
	 */
	find (label, value) {
		const $this = this;
		let res = null;
		let findDeep = (data, label, value) => {
			if (Array.isArray(data)) {
				data.forEach((c) => {
					if (c[$this.config.childrens] && c[$this.config.childrens].length > 0) {
						findDeep(c[$this.config.childrens], label, value);
					}
					if (c[$this.config.label] === label && c[$this.config.value] === value) {
						res = c;
						return;
					}
				});
			} else {
				if (data[$this.config.label] === label && data[$this.config.value] === value) {
					res = data;
					return;
				}
				if (data[$this.config.childrens] && data[$this.config.childrens].length > 0) {
					findDeep(data[$this.config.childrens], label, value);
				}
			}
		};
		try {
			findDeep($this.dicData, label, value);
			return res;
		} catch (e) {
			console.log('[error happened in find()]', e);
			return null;
		}
	}

	/**
	 * 数据转换成中文
	 * @param dic
	 * @param data
	 * @param config
	 * @returns {*}
	 */
	toCnName (data, dic = this.dicData, config) {
		const $this = this;

		if (config) {
			$this.config = Object.assign($this.config, config);
		}

		// 简化字典结构
		let simpleDicDeep = function (d, res) {
			if (Array.isArray(d)) {
				d.forEach((c) => {
					if (c[$this.config.name] && c[$this.config.code]) {
						res[c[$this.config.code]] = c[$this.config.name];
					}
					if (c[$this.config.children] && c[$this.config.children].length > 0) {
						simpleDicDeep(c[$this.config.children], res);
					}
				});
			} else {
				if (d[$this.config.name] && d[$this.config.code]) {
					res[d[$this.config.code]] = d[$this.config.name];
				}
				if (d[$this.config.children] && d[$this.config.children].length > 0) {
					simpleDicDeep(d[$this.config.children], res);
				}
			}

		};

		// 简化字典结构
		let simpleDic = function (d) {
			let res = {};
			simpleDicDeep(d, res);
			return res;
		};

		// 为str增加双引号
		let addSYH = function (str) {
			return '"' + str + '"';
		};

		try {
			let temp = JSON.stringify(data);
			// 1.将数据字典处理成简单结构的数据
			let res = simpleDic(dic);
			// 2.正则替换
			for (let i in res) {
				temp = temp.replace(new RegExp(addSYH(i), 'g'), addSYH(res[i]));
			}
			return JSON.parse(temp);
		} catch (e) {
			console.log('[error happened in toCnName()]', e);
			return data;
		}
	}
}

