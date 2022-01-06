<template>
	<view>
		<!-- 轮播图 -->
		<view>
			<swiper indicator-dots="true" autoplay="true" circular="true">
				<block v-for="item of swiperList" :key="item.id">
					<swiper-item>
						<image :src="item.advImg"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<!-- 活动分类 -->
		<view>
			<view class="box">
				<scroll-view class="scroll-x" scroll-x="true">
					<text class="title" v-for="item of categoryLIst" :key="item.id">{{item.name}}</text>
				</scroll-view>
			</view>
		</view>
		<!-- 活动列表 -->
		<view class="bg">
			<!-- 内容体 -->
			<view v-for="item of dataList" :key="item.id">
				<view class="titlea">
					<image :src="item.imgUrl" class="img"></image>
					<text @click="activity()">{{item.name}}</text>
				</view>
				<view>
					<text class="gonice">报名人数：{{item.signupNum}}</text>
				</view>
				<view>
					<text class="gonice">点赞数：{{item.likeNum}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import httpR from '../../../../network/http_request.js';
	export default {
		data() {
			return {
				swiperList: [],
				dataList: [],
				imgUrl: [],
				categoryLIst: []
			}
		},
		onLoad() {
			this.getSwiperList()
			this.getCategory()
			this.getDataList()
		},
		methods: {
			getSwiperList() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/activity/rotation/list',
					success: (res) => {
						var swiperList = res.data.rows.map((item, index) => {
							return {
								//展开对象
								...item,
								advImg: getApp().globalData.BASEURL + item.advImg,
							}
						})
						this.swiperList = swiperList;
					}
				})
			},

			getCategory() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/activity/category/list',
					success: (res) => {
						// console.log(res.data.data)
						var categoryLIst = res.data.data.map((item, index) => {
							return {
								...item,
								name: item.name,
							}
						})
						this.categoryLIst = categoryLIst;
					}
				})
			},

			getDataList() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/activity/activity/list',
					success: (res) => {
						var dataList = res.data.rows.map((item, index) => {
							return {
								...item,
								imgUrl: getApp().globalData.BASEURL + item.imgUrl,
								name: item.name,
								signupNum: item.signupNum,
								likeNum: item.likeNum
							}
						})
						this.dataList = dataList;
					}
				})
			},
			activity() {
				uni.navigateTo({
					url:'./Details'
				})
				console.log('跳转详情页')
				
			}
		}

	}
</script>

<style>
	swiper {
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

	/* 滚动分类开始 */
	.box {
		margin: 10px 10px 10px 10px;
		background: #FEFEFE;
		border-radius: 5px;
	}

	.scroll-x {
		display: flex;
		white-space: nowrap;
	}

	.title {
		padding: 0 13px;
		font-size: 18px;
	}

	/* 滚动分类结束 */


	/* 内容题开始 */

	.bg {
		margin: 10px 10px 10px 10px;
		border-radius: 5px;
		background: #fefefe;
	}

	.titlea {
		font-size: 18px;
	}

	.img {
		width: 100%;
		height: 150px;
		border-radius: 5px;
	}

	.gonice {
		margin-top: 5px;
		font-size: 14px;
		color: #a6a6a6;
	}
</style>
