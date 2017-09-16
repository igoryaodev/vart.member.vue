<template>
<div class="ticketList">
	<header-item></header-item>
	<ticket-item test="123"></ticket-item>
</div>
</template>
<script>
import headerItem from '@/components/header.item'
import ticketItem from '@/components/ticket/ticket.item'
	export default{
		name: 'ticket-list',
		data() {
			return {
				test: [1,2,3,4]
			}
		},
		methods: {
			
		},
		created() {
			
		},
		components: {
			headerItem,
			ticketItem
		}
	}
</script>
<style lang="scss">
	
</style>