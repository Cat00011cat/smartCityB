<template>
	<view>
		<view class="box">
			<view class="title">物业部门联系方式</view>
			<view class="phone">物业服务中心：1688888888</view>
			<view class="phone">停车位服务中心：128888888</view>
			<view class="phone">24 小时值班热线：168-8888-111</view>
			<view class="phone">报修电话：168168168618</view>
			<view class="phone">便民服务：188888888888</view>
		</view>

		<view class="box">
			<view class="title">评价反馈</view>
			<textarea placeholder="请输入您的反馈内容"></textarea>
			<button type="default">提交</button>
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
	.box {
		margin: 10px;
		background-color: #FEFEFE;
		border-radius: 10px;
	}

	.title {
		font-size: 24px;
		padding: 5px;
	}

	.phone {
		padding: 5px;
	}
</style>
