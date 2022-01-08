<template>
	<view>
		<!-- 可浏览相关的广告活动文章及咨询 -->
		<view>
			<swiper indicator-dots="true">
				<swiper-item>
					<text class="nav">广告位1</text>
				</swiper-item>
				<swiper-item>
					<text class="nav">广告位2</text>
				</swiper-item>
				<swiper-item>
					<text class="nav">广告位3</text>
				</swiper-item>
			</swiper>
		</view>
		<view>
			<view class="bgg">
				<view>广告位招租中....</view>
			</view>
			<!--  -->
			<view class="bgg">
				<view>广告位招租中....</view>
			</view>
			<view class="bgg">
				<view>广告位招租中....</view>
			</view>
			<!--  -->
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
	swiper-item {
		background-color: #007AFF;
	}

	.bgg {
		background-color: #ff5500;
		height: 150px;
		margin: 20px;
	}
</style>
