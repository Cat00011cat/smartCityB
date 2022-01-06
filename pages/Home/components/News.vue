<template>
	<view>
		<view class="box">
			<scroll-view class="scroll-x" scroll-x="true">
				<text class="title">今日要闻</text>
				<text class="title">专题聚焦</text>
				<text class="title">政策解读</text>
				<text class="title">经济发展</text>
				<text class="title">文化旅游</text>
				<text class="title">科技创新</text>
			</scroll-view>

			<!-- 内容体 -->
			<view v-for="item of swiperList" :key="item.id" class="bg">
				<view class="titlea">{{item.title}}
					<image :src="item.cover" class="img"></image>
				</view>
				<view>
					<text class="desc" v-text="item.content"></text>
				</view>
				<view>
					<text class="time">评论总数：{{item.commentNum}}</text>
				</view>
				<view>
					<text class="time">发布时间：{{item.createTime}}</text>
				</view>
			</view>



		</view>
	</view>
</template>

<script>
	const BASE_URL = 'http://124.93.196.45:10001';
	export default {
		// 定义一个导出的名字
		name: 'HomeSwiper',
		data() {
			return {
				swiperList: [],
				updateTime: [],
				cover: [],
				content: [],
				createTime: [],
				commentNum: []

			}
		},
		created() {
			this.getList()
		},
		methods: {
			getList() {
				uni.request({
					url: BASE_URL + '/prod-api/press/press/list',
					success: (res) => {
						// var a = res.data.rows[1].advImg;
						// console.log(BASE_URL + a)
						// console.log(a)
						var resData = res.data.rows.map((item, index) => {
							return {
								// 展开对象
								...item,
								title: item.title,
								cover: BASE_URL + item.cover,
								content: item.content,
								createTime: item.createTime,
								commentNum: item.commentNum
							}
						})
						console.log(resData)
						this.swiperList = resData
						//this.cover = cover
						//this.content = content
						//this.createTime = createTime
					}
				})
			},
		}
	}
</script>

<style>
	page {
		background: #F2F2F6;
	}

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
		padding: 0 10px;
		font-size: 18px;
	}

	/* 新闻内容 */

	/* 模块背景用这个 fefefe   ios简约标准*/
	.bg {
		margin: 10px 10px 10px 10px;
		border-radius: 5px;
		background: #fefefe;
		padding: 10px;
	}

	.titlea {
		font-size: 18px;
	}

	.img {
		margin-top: 5px;
		width: 100%;
		height: 150px;
		border-radius: 5px;
	}

	.desc {
		margin-top: 5px;
		font-size: 16px;

		/*  */
		overflow: hidden;
		word-break: break-all;
		/* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;
		/* 超出部分省略号 */
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		/*! autoprefixer: off */
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.time {
		margin-top: 5px;
		font-size: 14px;
		color: #a6a6a6;
	}
</style>
