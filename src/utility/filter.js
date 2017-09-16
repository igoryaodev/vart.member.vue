let qiniuBaseUrl = 'http://vartcdn.vart.la/'

export default {
	qiniu(value) {
		if(!value || !value.key) return
		if(value.key.startsWith('http')){
			return value
		}else{
			return qiniuBaseUrl + value.key
		}
	},
	price(value) {
		if(!value || isNaN(value)){
			return '¥ 0.00'
		}else{
			return '¥ ' + value.toFixed(2)
		}

	},
	priceN(value) {
		if(!value || isNaN(value)){
			return '0.00'
		}else{
			return value.toFixed(2)
		}

	},
	priceObj(obj) {
		if(!obj){
			return '免费'
		}else{
			if(obj.startPrice && obj.endPrice){
				if(obj.startPrice == obj.endPrice){
					return '¥ ' + obj.startPrice.toFixed(2)
				}else{
					return '¥ ' + obj.startPrice.toFixed(2) + ' - ¥ ' + obj.endPrice.toFixed(2)
				}
			}
			if(obj.endPrice){

			}
		}

	}
}