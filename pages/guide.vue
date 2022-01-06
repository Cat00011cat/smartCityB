<template>
	<view>
		<swiper class="a" indicator-dots="ture">
			<swiper-item class="b">
				<image src="../static/guide/guide1.png"></image>
			</swiper-item>
			<swiper-item class="b">
				<image src="../static/guide/guide2.jpg"></image>
			</swiper-item>
			<swiper-item class="b">
				<image src="../static/guide/guide3.jpg"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jumpover: '跳过',
				experience: '立即体验'
			}
		},
		methods: {

		}
	}
</script>
<style>
	.a {
		position: absolute;
		width: 750rpx;
		height: 1300rpx;
	}

	image {
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
