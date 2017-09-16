<template>
	<div class="header">
		<div class="top-logo">
			<router-link to="/">
				<img src="http://vartcdn.vart.la/pgc/activity/01130974284443148a15c2889ec71a4f.png" alt="">
			</router-link>
		</div>
		<div class="navbar flex-box font-theme" v-if="!pagename">
			<div class="flex-item">
				<div class="logo">
					<router-link to="/">
						<img src="http://vartcdn.vart.la/pgc/activity/01130974284443148a15c2889ec71a4f.png" alt="">
					</router-link>
				</div>
				<div class="menu">
					<router-link class="font-theme" to="/">票务</router-link>
				</div>
			</div>
			<div class="flex-item">
				<router-link :to="{name: 'profile'}">
					<icon name="user" scale="2" :color="theme"></icon>
				</router-link>
			</div>
		</div>
		<div class="delbar flex-box" v-else="pagename">
			<div class="flex-item font-theme">{{pagename}}</div>
			<div class="flex-item">
				<router-link :to="{name: 'profile'}">
					<icon name="user" scale="2" :color="theme"></icon>
				</router-link>	
			</div>
		</div>
	</div>
</template>
<script>
import Icon from 'vue-svg-icon/Icon.vue';
export default {
	props: ["pagename"],
	data() {
		return {
			theme: '#852C2B'
		}
	},
	components: {
		Icon
	}
}
	
</script>
<style lang="scss">
	.header{
		background: #fff;
	    padding: 10px;
	    box-sizing: border-box;
	    padding-bottom: 0;
		.top-logo{
			img{
				height: 50px;
				width: auto;
				cursor: pointer;
			}
		}
		.navbar{
			.logo{
				display: none;
				cursor: pointer;
			}
			line-height: 50px;
			border-bottom: 1px solid #ddd;
			justify-content: space-between;
		}
		.delbar{
			line-height: 50px;
			border-bottom: 1px solid #ddd;
			justify-content: space-between;
		}
		.flex-item{
	    	font-size: 16px;
			a{
		    	font-size: 16px;
			}
		}
	}
</style>