<template>
	<section>
		<header-item :pagename="pagename"></header-item>
		<h1>profile</h1>
	</section>
</template>
<script>
import headerItem from '@/components/header.item'
import { mapMutations } from 'vuex'

	export default {
		data() {
			return {
				pagename: '个人中心'
			}
		},
		methods: {
			...mapMutations([
		      'pushLoadStack',
		      'completeLoad'
		    ]),
		    load() {
		    	this.pushLoadStack()
		    }
		},
		cretead() {
			this.load()
		},
		components: {
			headerItem
		}
	}
</script>
<style>
	
</style>