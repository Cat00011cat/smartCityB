<template>
	<view>
		<view class="HomeSwiper">
			<swiper indicator-dots="true" autoplay="true" circular="true">
				<block v-for="item of swiperList.slice(1)" :key="item.id">
					<swiper-item>
						<image :src="item.advImg"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	const BASE_URL = "http://124.93.196.45:10001";
	export default {
		name: 'HomeSwiper',
		data() {
			return {
				swiperList: []
			}
		},
		created() {
			this.getList()
		},
		methods: {
			getList() {
				uni.request({
					url: BASE_URL + '/prod-api/api/rotation/list',
					success: (res) => {
						var resData = res.data.rows.map((item, index) => {
							return {
								// 展开对象
								...item,
								advImg: BASE_URL + item.advImg
							}
						})
						this.swiperList = resData;
					}
				})

			}
		}
	}
</script>

<style>
	.HomeSwiper {
		margin: 10px 10px 0px 10px;
		height: 151px;
		background-color: rgba(254, 254, 254, 1);
		border-radius: 5px;

	}

	image {
		width: 710rpx;
		height: 151px;
		border-radius: 5px;
	}
</style>
