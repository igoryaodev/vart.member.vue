import axios from 'axios'
import Qs from 'qs'
import CN from '@/_axios/config'

export default {
	getTicketLists(page) {//新票务列表
		return axios.get(`/ticketProducts?page=${page}&tenantId=${CN.TENANTID}`).then(res => res.data)
	},
	getTicketDetail(id) {//票务详情
		return axios.get(`/ticketProducts/${id}`).then(res => res.data)
	},
	getTicketSku(id) {//票务sku
		return axios.get(`/ticketProductPropertys/${id}`).then(res => res.data)
	},
	getTicketSkuList(id) {//当前票务下配置的sku列表
		return axios.get(`/ticketProductSpec/${id}`).then(res => res.data)
	},
	getTicketSkuDetail(criteria) {//获取sku详情
		return axios.get(`/ticketProductSpec?` + Qs.stringify(criteria)).then(res => res.data)
	},
	getTicketOrder(id) {//
		return axios.get(`/`)
	}
}