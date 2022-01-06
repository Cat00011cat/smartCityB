<template>
	<view>
		<home-header></home-header> <!-- 头部搜索框 -->
		<home-swiper></home-swiper> <!-- 轮播图板块 -->
		<home-icons></home-icons> <!-- 全部服务板块 -->
		<home-theme></home-theme> <!-- 热门主题板块 -->
		<home-news></home-news><!-- 新闻模块 -->
	</view>
</template>

<script>
	import HomeHeader from './components/Header'
	import HomeIcons from './components/Icons'
	import HomeSwiper from './components/Swiper'
	import HomeTheme from './components/Theme'
	import HomeNews from './components/News'
	export default {
		components: {
			HomeHeader,
			HomeIcons,
			HomeSwiper,
			HomeTheme,
			HomeNews
		},
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	/* 模块颜色fefefe */
	page {
		background: #F2F2F6;
	}
</style>
