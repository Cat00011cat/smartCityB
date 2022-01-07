<template>
	<view>
		<view class="Box">
			<view v-for="(item,index) in noticeList" :key="index">
				<view class="title" v-text="item.title">公告标题</view>
				<view class="time" v-text="item.time">公告时间</view>
				<view class="desc" v-text="item.desc">公告内容</view>
				<view class="info" v-text="item.info">发布人</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeList: [{
						title: '致朴茂苑业主的一封信​'
					},
					{
						time: '2022-01-07 11:44'
					},
					{
						desc: '您好！我们即将迎来2022年，首先感谢您一年来对物业工作的支持认可……元旦节日假期将至，您是怎样安排呢？是探亲访友、外出旅行？还是在家中享受宁静安逸的休闲生活？为了您和家人愉快的度过假期，物业在此温馨提示您：时刻做好安全防范和疫情防控，不要让隐患有机可乘。无论您在哪里， 家就在这， 我们， 一直都在， 为您保家护航！'
					},
					{
						info: '朴茂苑509物业管理处'
					}
				],
			}
		},
		methods: {

		}
	}
</script>

<style>
	.Box {
		background-color: #FEFEFE;
		padding: 10px;
		border-radius: 10px;
	}

	.title {
		font-size: 24px;
		padding: 1px;
	}

	.time {
		padding: 1px;
	}

	.desc {
		font-size: 18px;
		margin: 10px;
	}

	.info {
		text-align: right;
		padding: 1px;
	}
</style>
