<template>
	<view>
		<view class="HomeSearch">
			<view class="search-bg">
				<input type="text" placeholder="请输入搜索内容" class="search-max" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeHeader',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.HomeSearch {
		/* 搜索框左右边距 */
		padding-left: 10px;
		padding-right: 10px;
	}

	/* 搜索框样式 */
	.search-bg {
		background: #fefefe;
		border-radius: 5px;

	}

	/* 搜索框大小 */
	.search-max {
		padding: 10rpx;
	}
</style>
