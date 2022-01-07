<!-- 
http://124.93.196.45:10001/prod-api/profile/upload/image/2021/05/08/f8c06dfc-9da2-41cc-9784-8cf234c999f2.png 美食
http://124.93.196.45:10001/prod-api/profile/upload/image/2021/05/08/12d84c9a-fca8-488b-9d92-383cbe448555.png 甜点饮品
 -->

<template>
	<view>
		<view class="homeBox1">
			<image
				src="http://124.93.196.45:10001/prod-api/profile/upload/image/2021/05/08/f8c06dfc-9da2-41cc-9784-8cf234c999f2.png"
				class="img1"></image>
			<view class="desc1">美食</view>
		</view>
		<view class="homeBox2">
			<image class="img2"
				src="http://124.93.196.45:10001/prod-api/profile/upload/image/2021/05/08/12d84c9a-fca8-488b-9d92-383cbe448555.png">
			</image>
			<view class="desc2">甜点饮品</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "HomeTheme",
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.homeBox1 {
		float: left;
		background-color: #7569ff;
		width: 350rpx;
		height: 220rpx;
		margin-left: 20rpx;
		border-radius: 20px;
	}

	.homeBox2 {
		float: left;
		background-color: #0cdfc0;
		width: 350rpx;
		height: 220rpx;
		left: 10px;
		margin-left: 10rpx;
		border-radius: 20px;
		/* padding: 8px; */
	}

	.img1 {
		width: 80px;
		height: 80px;
		margin-left: 90rpx;
	}

	.img2 {
		width: 80px;
		height: 80px;
		margin-left: 90rpx;
	}

	.desc1 {
		color: #FEFEFE;
		text-align: center;
	}

	.desc2 {
		color: #FEFEFE;
		text-align: center;
	}
</style>
