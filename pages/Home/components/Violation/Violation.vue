<template>
	<view>
		<view class="title">违章详情</view>
		<view class="table-tr">
			<text class="desc">违法时间</text>
			<text>2021年12月31日</text>
		</view>
		<view class="table-tr">
			<text class="desc">违法地点</text>
			<text>云南昆明海安路风景区车库出口路段</text>
		</view>
		<view class="table-tr">
			<text class="desc">违法行为</text>
			<text>汽车在道路上违反停车规定，妨碍其他车辆通行</text>
		</view>
		<view class="title">处罚详情</view>
		<view class="table-tr">
			<text class="desc">通知书号</text>
			<text>32498324982754</text>
		</view>
		<view class="table-tr">
			<text class="desc">违章记分</text>
			<text>0</text>
		</view>
		<view class="table-tr">
			<text class="desc">罚款金额</text>
			<text>100</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #F2F2F6;
	}

	.table-tr {
		padding: 10px;
		margin: 0px 10px 0px 10px;
		background-color: #FEFEFE;
		border: 1px solid #000000;
		font-size: 18px;
	}

	.title {
		padding: 10px;
		margin: 0px 10px 0px 10px;
		font-size: 24px;
	}

	.desc {
		padding: 10px;
	}
</style>
