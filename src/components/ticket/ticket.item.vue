<template>
	<section>
		<div class="ticket-item"
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loadStatus"
			infinite-scroll-distance="10"
		>
			<div class="ticket" v-for="t in ticketList">
				<router-link class="cover-image" :to="{ name: 'ticket-detail', params: {id: t.id} }">
					<img :src="t.covetImages|qiniu" alt="">
				</router-link>
				<div class="ticket-brief">
					<p class="ticket-title font-theme">{{t.name}}</p>
					<p class="brief-default">{{t.summary}}</p>
				</div>
				<div class="buy-box flex-box">
					<div class="flex-item">
						<span class="font-theme font-arial">{{t|priceObj}}</span>
					</div>
					<div class="flex-item">
						<router-link :to="{ name: 'ticket-detail', params: {id: t.id} }" class="btn-default btn-theme">立即购买</router-link :to="{id: t.id}">
					</div>
				</div>
			</div>
			<div class="white-space">
				<p class="loaded"></p>
				<p class="title">无更多加载</p>
			</div>
		</div>
	</section>
</template>
<script>
import { mapMutations } from 'vuex'
import TICKET from '@/_axios/ticket/index'

	export default {
		data() {
			return {
				ticketList: [],
				totalPages: 1,
				page: 1
			}
		},
		methods: {
			...mapMutations([
		      'pushLoadStack',
		      'completeLoad'
		    ]),
			load() {
		    	this.pushLoadStack()
				TICKET.getTicketLists(1).then(data => {
					this.ticketList = data.list
					this.totalPages = data.totalPages
				}).then(this.completeLoad)
			},
			loadMore() {
				if(this.page < this.totalPages) {
					this.pushLoadStack()
					TICKET.getTicketLists(++this.page).then(data => {
						this.ticketList = data.list.concat(this.ticketList)
						this.loadStatus = false
					}).then(this.completeLoad)
				}else{
					this.loadStatus = true
				}
			}
		},
		created() {
			this.load()
		}
	}
</script>
<style lang="scss">
.ticket-item{
	.white-space{
		.title{
			text-align: center;
			color: #999;
		}
	}
	.ticket{
		box-sizing: border-box;
    	width: 100%;
	    margin-bottom: 10px;
	    background: #fff;
	    box-sizing: border-box;
	    padding: 10px;
    	.cover-image{
    		img{
    			width: 100%;
    			height: auto;
    		}
    	}
    	.ticket-brief{
    		.ticket-title{
				font-size: 16px;
    		}
    		.brief-default{
    			white-space: pre-line;
    			color: #666;
    		}
    	}
    	.flex-box{
			justify-content: space-between;
    		.flex-item{
    			line-height: 32px;
    			.font-arial{
    				font-size: 16px;
    			}
    		}
    	}
	}
}
</style>