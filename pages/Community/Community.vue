<template>
	<view class="bga">
		<view class="bg">
			<text class="title">社区动态</text>
			<swiper circular="true" vertical="true" autoplay="true" interval="1500">
				<swiper-item v-for="(item, index) in noticeList" :key="index">
					<view v-text="item.message" @click="goMessage()"></view>
				</swiper-item>
			</swiper>
		</view>

		<view class="bgb">
			<view class="boxl" @click="goProperty()">
				<text class="fun">物业服务</text>
			</view>

			<view class="boxr" @click="goExpress()">
				<text class="fun">快件管理</text>
			</view>

			<view class="boxl" @click="goSof()">
				<text class="fun">友邻社交</text>
			</view>

			<view class="boxr" @click="goBusiness()">
				<text class="fun">商业推广</text>
			</view>

			<view class="boxl" @click="goCar()">
				<text class="fun">车辆管理</text>
			</view>

			<view class="boxr" @click="goDev()">
				<text class="fun">敬请期待</text>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeList: [{
						message: '物业通知11111111111111'
					},
					{
						message: '社区居委会通知222222222'
					},
					{
						message: '社区通知333333333333333'
					},
				],
			}
		},
		methods: {
			goMessage() {
				uni.navigateTo({
					url: 'Moving/Moving'
				})
			},
			goProperty() {
				uni.navigateTo({
					url: 'Property/Property'
				})
			},
			goExpress() {
				uni.navigateTo({
					url: 'Express/Express'
				})
			},
			goSof() {
				uni.navigateTo({
					url: 'Sof/Sof'
				})
			},
			goBusiness() {
				uni.navigateTo({
					url: 'Business/Business'
				})
			},
			goCar() {
				uni.navigateTo({
					url: 'Car/Car'
				})
			},
			goDev() {
				uni.showModal({
					content: '更多功能敬请期待',
					showCancel: false,
					// editable: true
				})
			}
		}
	}
</script>

<style>
	.bga {
		padding: 10px;
	}

	.bg {
		float: left;
		background-color: #FEFEFE;
		width: 710rpx;
		border-radius: 10rpx;
		/* padding: 5px; */
		/* padding-bottom: 10px; */
	}

	.bgb {
		float: left;
		background-color: #FEFEFE;
		margin-top: 10px;
		border-radius: 16px;
	}

	.title {
		float: left;
		width: 50px;
		color: #ff0000;
		font-weight: bold;
		padding: 5px;
	}

	/* 伪类选择器添加竖线 */
	.title:before {
		float: left;
		content: '';
		background-color: #3796EC;
		width: 4px;
		height: 40px;
		margin-right: 10px;
	}


	swiper {
		float: left;
		width: 400rpx;
		height: 20px;
		padding: 15px;
	}

	.boxl {
		float: left;
		margin: 10px;
		width: 315rpx;
		height: 100px;
		background-color: #FEFEFE;
		/* 设置阴影 */
		box-shadow: 0px 0px 5px #cccccf;
		font-size: 38rpx;
		border-radius: 16px;
	}

	.boxr {
		float: right;
		margin: 10px;
		width: 315rpx;
		height: 100px;
		background-color: #FEFEFE;
		box-shadow: 0px 0px 5px #cccccf;
		font-size: 38rpx;
		border-radius: 10px;
	}

	.fun {
		float: left;
		padding: 38px;
	}
</style>
