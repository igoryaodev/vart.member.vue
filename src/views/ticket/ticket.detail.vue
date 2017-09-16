<template>
	<section>
		<header-item :pagename="pagename"></header-item>
		<div class="ticket-detail">
			<mt-swipe :auto="0" :continuous="false" :showIndicators="true">
			  <mt-swipe-item v-for="t in ticket.imageLists">
			  	<img :src="t|qiniu" alt="">
			  </mt-swipe-item>
			</mt-swipe>
			<div class="ticket-info">
				<div class="title">{{ticket.name}}</div>
				<div class="font-theme">{{ticket.startPrice|price}}-{{ticket.endPrice|price}}</div>
			</div>
			<div class="flex-box cell" @click="chooseSku">
				<div class="flex-item">{{selectedSku}}</div>
				<div class="flex-item cell-ft"></div>
			</div>
			<div class="description" v-html="ticket.description"></div>
			<div class="flex-box cell">
				<div class="flex-item">
				</div>
				<div class="flex-item flex-box">
					<span>
						<a class="font-theme" :href="ticket.nativeUrl">展览详情</a>
					</span>
					<span class="border-theme cell-ft"></span>
				</div>
			</div>
			<div class="brief">
				<div></div>
				<div class="pre-line">{{ticket.reminder}}</div>
			</div>
			<div class="fix-bottom">
				<a class="btn-theme" @click="buyNow">立即购买</a>
			</div>
			<div class="fix-modal" :class="{show: show }">
				<div class="fix-cover" @click="changeModal"></div>
				<div class="fix-content">
					<div class="header flex-box">
						<div class="flex-item">
							<img class="title-image" src="http://7xkcpc.com2.z0.glb.qiniucdn.com/pgc/activity/191de598e56d44eab16b8e1632176489.jpg" alt="">
						</div>
						<div class="flex-item item-content">
							<div class="item ">
								<p class="title font-theme">{{ticket.startPrice|price}}-{{ticket.endPrice|price}}</p>
								<p>库存：{{ticket.stock}}</p>
								<p>请选择：{{selectedSku}}</p>
							</div>
							<div class="item">
								<span @click="changeModal">
									<icon name="close" scale="2" :color="theme"></icon>
								</span>
							</div>
						</div>
					</div>
					<div class="body">
						<ul>
							<li class="cell-li" v-for="s in sku">
								<div class="parent-node">{{s.propertyName}}</div>
								<div class="child-node">
									<span class="cell-sku" v-for="c in s.TicketProductPropertys">{{c.propertyName}}</span>
								</div>
							</li>
						</ul>
					</div>
					<div class="footer flex-box">
						<div class="flex-item">
							数量
						</div>
						<div class="flex-item">
							<div class="cell-quantity">
								<button class="item reduce">-</button>
								<input type="text" class="item change">
								<button class="item plus">+</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</section>
</template>
<script>
import { mapMutations } from 'vuex'
import TICKET from '@/_axios/ticket/index'
import headerItem from '@/components/header.item'
import Icon from 'vue-svg-icon/Icon.vue';
import { Swipe, SwipeItem } from 'mint-ui'
export default {
	name: 'ticket-detail',
	data() {
		return {
			show: false,
			selectedSku: null,
			selectedPrice: 0,
			ticket: {},
			sku: [],
			pagename: null,
			id: 0,
			theme: '#666'
		}
	},
	methods: {
		...mapMutations([
	      'pushLoadStack',
	      'completeLoad'
	    ]),
	    load() {
	    	this.pushLoadStack()
	    	TICKET.getTicketDetail(this.id).then(data => {
	    		this.ticket = data
	    	})
	    	.then(() => {
	    		TICKET.getTicketSku(this.id).then(data => {
		    		this.sku = data;
		    		this.selectedSku = data.map(d => d.propertyName).join('/')
		    	})
	    	})
	    	.then(this.completeLoad)
	    },
	    changeModal() {//控制弹出页面层
	    	if(this.show === true){
	    		this.show = false
	    	}else{
	    		this.show = true
	    	}
	    },
	    chooseSku() {//选择sku
	    	this.changeModal()

	    },
	    buyNow() {//立即购买
	    	this.changeModal()
	    }
 	},
	created() {
		this.pagename = "票务详情"
		this.id = this.$route.params.id
		this.load()
	},
	components: {
		headerItem,
		Icon
		// close
	} 
}
	
</script>
<style lang="scss">



.cell-quantity{
	display: flex;
	.item{
		flex: 1;
	    width: 32px;
	    height: 32px;
	    border: 1px solid #ddd;
	    background: none;
	    padding: 0 !important;
	    margin: 0 !important;
	    text-align: center;
	    font-size: 14px;
	    box-sizing: border-box;
	    line-height: 32px;
	    outline: none;
	    -webkit-tap-highlight-color: transparent;
	}
	.change{
	    border-left: 0;
    	border-right: 0;
	}
}

.ticket-detail{
	padding-bottom: 60px;
	img{
		width: 100%;
		height: auto;
	}
	.fix-bottom{
		.btn-theme{
			display: block;
			width: 100%;
		}
	}
	.cell{
		padding: 15px 10px;
		justify-content: space-between;
		background: #fff;
	}
	.cell-ft:after{
	    content: " ";
	    display: inline-block;
	    height: 6px;
	    width: 6px;
	    border-width: 2px 2px 0 0;
	    border-color: #c8c8cd;
	    border-style: solid;
	    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
	    transform: matrix(.71,.71,-.71,.71,0,0);
	}
	.brief,
	.description,
	.ticket-info,
	.mint-swipe{
	    padding: 10px;
	    background: #fff;
	    box-sizing: border-box;
	}
	.brief,
	.description,
	 .cell{
	 	margin-top:10px;
	 }
	 .mint-swipe{
		 padding-bottom: 0;
	 }
	.ticket-info{
		padding-top: 0; 
	}
}
.show{
	display: block !important;
}
.fix-modal{
	display: none;
	.fix-cover{
		position: fixed;
		z-index: 99;
	    top: 0;
	    background: rgba(0,0,0,.6);
	    width: 100%;
	    height: 100%;
	}
	.fix-content{
	    position: fixed;
	    z-index: 999;
	    bottom: 0;
	    background: #fff;
	    width: 100%;
	    padding: 10px;
	    padding-bottom: 120px;
	    box-sizing: border-box;
		.cell-sku{
		    padding: 6px 10px;
		    font-size: 12px;
		    margin-right: 10px;
		    border-radius: 4px;
		    box-sizing: border-box;
		    cursor: pointer;
		    background: #e6e6e6;
		    word-wrap: normal;
	    	white-space: nowrap;
		}
		.cell-sku.active{
			color: #fff;
		    background: #852C2B;
		}
		.cell-li{
		    border-bottom: 1px solid #e6e6e6;
			.parent-node{
				padding-bottom: 10px;
			}
			.child-node{
		        overflow: hidden;
				overflow-x: scroll;
				line-height: 28px;
			}
			.child-node::-webkit-scrollbar {
				-webkit-overflow-scrolling: touch;
				width: 0;
				height:0;
				display: none;
			}
			span{
				cursor: pointer;
			}
		}
		.title-image{
			width: 100px;
			height: auto;
			margin-top: -34px;
			border: 1px solid #ddd;
	    	border-radius: 5px;
		}
	    .header{
	    	.item-content{
    		    display: flex;
			    justify-content: space-between;
			    width: 100%;
			    padding-left: 10px;
			    .item{
			    	.title{
			    		font-size: 14px;
			    	}
			    }
			    p{
			    	font-size: 12px;
			    	margin: 0;
			    	padding: 0;
			    }
	    	}
	    }
	    .footer{
	    	justify-content: space-between;
	    	padding: 10px 0;
    	    border-bottom: 1px solid #ddd;
    		.flex-item{
    			line-height: 32px;
    		}
	    }
	}
}
</style>