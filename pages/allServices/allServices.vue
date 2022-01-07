<template>
	<view>
		<view class="HomeIcons">
			<!-- 	<view class="HomeIcons-top-item">
				<view class="HomeIcons-top-item-icon">
					<view class="HomeIcons-top-item-icon-desc">服务</view>
				</view>
			</view> -->


			<!--aa 
			 -->
			<view v-for="item of Rows" :key="item.id">
				<view class="HomeIcons-top-item">
					<view>
						<image :src="item.imgUrl" class="HomeIcons-top-item-icon"></image>
						<view class="HomeIcons-top-item-icon-desc">{{item.serviceName}}</view>
					</view>
				</view>
			</view>



		</view>
	</view>
</template>

<script>
	const BASE_URL = "http://124.93.196.45:10001";
	export default {
		name: "HomeIcons",
		data() {
			return {
				Rows: []
			}
		},
		created() {
			this.getRows()
		},
		methods: {
			getRows() {
				uni.request({
					url: BASE_URL + '/prod-api/api/service/list',
					success: (res) => {
						var resData = res.data.rows.map((item, index) => {
							return {
								// 展开对象
								...item,
								imgUrl: BASE_URL + item.imgUrl,
								serviceName: item.serviceName
							}
						})
						this.Rows = resData;
					}
				})
			}
		}
	}
</script>

<style>
	/* 服务板块 */
	.HomeIcons {
		margin: 10px 10px 10px 10px;
		height: 650rpx;
		background-color: #FEFEFE;
		border-radius: 5px;
	}

	.HomeIcons-top-item {
		/*  向左浮动  目的 图标一行显示*/
		float: left;
		margin: 10px 0px 0px 0px;
		width: 20%;
	}

	.HomeIcons-top-item-icon {
		width: 50px;
		height: 50px;
		margin: 0 auto;
		padding: 10px;
		/* background: url(../../../static/tabBar/selallservices.png) no-repeat; */
		/* background-size: 50px; */
	}

	.HomeIcons-top-item-icon-desc {
		text-align: center;
	}
</style>
