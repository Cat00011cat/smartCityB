<template>
	<view>
		<view class="bg" v-for="item of outList" :key="item.id">
			<view class="left">
				<image :src="item.imgUrl" @click="go()"></image>
			</view>
			<view class="right">
				<text class="name">{{item.hospitalName}}</text>
				<view class="star">星级：
					<template v-for="(val, index) in item.level">
						<image class="img" src="../../../../static/selcollect.png" mode="aspectFill"></image>
					</template>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				outList: [],

			}
		},
		onLoad() {
			this.list()
		},
		methods: {
			// 发起网络请求
			list() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/hospital/hospital/list',
					success: (res) => {
						// console.log(res.data.rows['0'].level)
						console.log('医院列表获取成功')
						var outList = res.data.rows.map((item, index) => {
							return {
								// 展开对象
								...item,
								imgUrl: getApp().globalData.BASEURL + item.imgUrl,
								hospitalName: item.hospitalName,
								level: item.level
							}
						})
						this.outList = outList;
					}
				})
			},
			go() {
				uni.navigateTo({
					url: 'Introduction'
				})
			}
		}
	}
</script>

<style>
	.bg {
		background-color: #fefefe;
		height: 100px;
		margin: 10px;
	}



	.left {
		float: left;
	}

	.right {
		float: left;
		padding-left: 10px;
	}

	.name {
		font-size: 18px;
	}

	image {
		width: 100px;
		height: 100px;
	}

	.star {
		margin-top: 30px;
	}

	.img {
		width: 43rpx;
		height: 43rpx;
		margin-left: 20rpx;
	}
</style>
