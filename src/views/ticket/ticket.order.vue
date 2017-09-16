<template>
	<section>
		<header-item :pagename="pagename"></header-item>
		<div class="ticket-order">
			<mt-swipe :auto="0" :continuous="false" :showIndicators="true">
			  <mt-swipe-item v-for="t in ticket.imageLists">
			  	<img :src="t|qiniu" alt="">
			  </mt-swipe-item>
			</mt-swipe>
			<div class="ticket-info">
				<div class="title">{{ticket.name}}</div>
				<div class="font-theme">{{ticket.startPrice|price}}-{{ticket.endPrice|price}}</div>
			</div>
			<div class="ticket-sku">
				
			</div>
			<div class="description" v-html="ticket.description"></div>
			<div><a :href="ticket.nativeUrl">展览详情</a></div>
			<div class="brief">
				<div></div>
				<div>{{ticket.reminder}}</div>
			</div>
			<div class="fix-bottom flex-box">
			<div class="flex-item">
				{{0|price}}
			</div>
			<div class="flex-item">
				<router-link class="btn-theme" :to="{ name: 'ticket-order', params: {id: ticket.id} }">立即购买</router-link>
			</div>
			</div>
		</div>	
	</section>
</template>
<script>
import { mapMutations } from 'vuex'
import TICKET from '@/_axios/ticket/index'
import headerItem from '@/components/header.item'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
	name: 'ticket-order',
	data() {
		return {
			ticket: {},
			pagename: null,
			id: 0
		}
	},
	methods: {
		...mapMutations([
	      'pushLoadStack',
	      'completeLoad'
	    ]),
	    load() {
	    	this.pushLoadStack()
	    	TICKET.getTicketDetail(this.$route.params.id).then(data => {
	    		this.ticket = data
	    	}).then(this.completeLoad)
	    }
	},
	created() {
		this.pagename = "票务详情"
		this.id = this.$route.params.id
		this.load()
	},
	components: {
		headerItem
	} 
}
	
</script>
<style lang="scss">

.ticket-order{
	padding-bottom: 60px;
	img{
		width: 100%;
		height: auto;
	}
	.fix-bottom{
		background: #fff;
    	&.flex-box{
    		display: flex;
    		justify-content: space-between;
    		.flex-item{
    			line-height: 48px;
    		}
    	}
		.btn-theme{
			display: block;
		    width: 100px;
		    text-align: center;
		    font-size: 14px;
		}
	}
}
</style>