<template>
	<view class="HomeTheme">
		<view>
			<image
				src="http://124.93.196.45:10001/prod-api/profile/upload/image/2021/05/08/f8c06dfc-9da2-41cc-9784-8cf234c999f2.png"
				class="ThemeLeft"></image>
			<image
				src="http://124.93.196.45:10001/prod-api/profile/upload/image/2021/05/08/12d84c9a-fca8-488b-9d92-383cbe448555.png"
				class="ThemeRight"></image>

			<text class="theneName1">美食</text>
			<text class="theneName2">甜点饮品</text>
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
	.HomeTheme {
		margin: 10px 10px 10px 10px;
		height: 120px;
		background-color: #FEFEFE;
		border-radius: 5px;
	}

	.ThemeLeft {
		float: left;
		margin-left: 60px;
		width: 100px;
		height: 100px;
		border-radius: 20px;
	}

	.ThemeRight {
		float: right;
		margin-right: 60px;
		width: 100px;
		height: 100px;
		border-radius: 20px;

	}

	.theneName1 {
		float: left;
		margin-left: 80px;
	}

	.theneName2 {
		float: right;
		margin-right: 80px;
	}
</style>
