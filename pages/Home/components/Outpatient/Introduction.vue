<template>
	<view>
		<!-- 
		 页面布局 2/3 为医院幻灯片展示
		 1/2 为医院简介的文字
		 1/3 为“预约挂号”功能。
		 -->
		<view class="bg">
			<view class="title" v-text="hospitalName"></view>
			<image :src="imgUrl" class="img"></image>
			<view v-html="brief" class="desc"></view>
			<button type="default" @click="toCard()">预约挂号</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hospitalName: '',
				imgUrl: '',
				brief: ''
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/hospital/hospital/1',
					success: (res) => {
						console.log('医院简介获取成功')
						// ...{ res.data.data,      后面在写你想要添加的键值对 }
						this.hospitalName = res.data.data['hospitalName'];
						this.imgUrl = getApp().globalData.BASEURL + res.data.data['imgUrl'];
						this.brief = res.data.data['brief'];
					}
				})
			},
			toCard() {
				uni.navigateTo({
					url: 'Card'
				})
			}
		}
	}
</script>

<style>
	.bg {
		background-color: #FEFEFE;
		margin: 10px 10px 10px 10px;
		border-radius: 10px;
	}

	.title {
		padding: 10px;
		font-size: 24px;
	}

	.img {
		width: 100%;
	}

	.desc {
		padding: 10px;
	}
</style>
