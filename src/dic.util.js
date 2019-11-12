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

/**
 *
 * @param {JSON} tree 输入的字典数据，json数据
 * @param {Array} keys ['一级'， '二级']
 * @returns {string}
 */
export function findDeepInTree(tree, keys) {
	let res = '';
	return res;
}
