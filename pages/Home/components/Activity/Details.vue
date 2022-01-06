<template>
	<view>
		<view class="bg">
			<text class="title" v-text="name"></text>
			<view>
				<image :src="imgUrl" class="img"></image>
			</view>
			<text class="titlea">活动详情</text>
			<view>
				<text class="desc" v-html="content"></text>
			</view>
			<view>
				<button type="default" @click="go()">立即报名</button>
			</view>
			<text class="titlea">活动评价</text>
			<view>
				<textarea value="" placeholder="请输入评论" class="textarea" v-model="desc" />
				<button type="default" @click="goMessage()">提交评论</button>
			</view>
			<text class="titlea">评论列表</text>
			<view v-for="item of Message" class="messageBox">
				<view v-text="item.nickName"></view>
				<view class="desc" v-text="item.content"></view>
			</view>
			<text class="titlea">活动推荐</text>
			<view>
				<view class="bg">
					<!-- 内容体 -->
					<view>
						<view class="titlea">
							<image src="../../../../static/guide/guide3.jpg" class="imgb"></image>
							<text>名称</text>
						</view>
						<view>
							<text class="gonice">报名人数：</text>
						</view>
						<view>
							<text class="gonice">点赞数：</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				imgUrl: '',
				content: '',
				desc: '',
				Message: []
			}
		},
		onLoad() {
			this.getData()
			// this.getMessage()

		},
		methods: {
			getData() {
				uni.request({
						url: getApp().globalData.BASEURL + '/prod-api/api/activity/activity/50',
						success: (res) => {
							console.log(res.data.data['content'])
							this.name = res.data.data['name'];
							this.imgUrl = getApp().globalData.BASEURL + res.data.data['imgUrl'];
							this.content = res.data.data['content'];
						}
					}),
					uni.request({
						url: getApp().globalData.BASEURL + '/prod-api/api/activity/comment/list?activityId=50',
						success: (res) => {
							console.log(res.data)
							var getMessage = res.data.rows.map((item, index) => {
								return {
									...item,
									content: item.content,
									nickName: item.nickName
								}
							})
							this.Message = getMessage
						}
					})
			},
			go() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/activity/signup',
					method: 'POST',
					data: {
						"activityId": 50
					},
					header: {
						'Authorization': uni.getStorageSync('token'), //安全认证
						'content-type': 'application/json', //请求数据类型
					},
					success: (res) => {
						uni.showToast({
							title: res.data['msg']
						});
					}
				})
			},
			goMessage() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/activity/comment',
					method: 'POST',
					data: {
						"activityId": 50,
						"content": this.desc
					},
					header: {
						'Authorization': uni.getStorageSync('token'), //安全认证
						'content-type': 'application/json', //请求数据类型
					},
					success: (res) => {
						console.log()
						uni.showToast({
							title: res.data['msg']
						});
					}
				})
			},

		}
	}
</script>

<style>
	.bg {
		background-color: #FEFEFE;
	}

	.title {
		margin: 10px 10px 10px 10px;
		font-size: 24px;
	}

	.img {
		margin: 10px 10px 10px 10px;
		width: 355px;
		border-radius: 10px;
	}

	.titlea {
		margin: 10px 10px 10px 10px;
		font-size: 18px;
	}

	.desc {
		/* 谢个屁 */
	}

	.textarea {
		margin: 10px 10px 10px 10px;
		width: 355px;
		background-color: #F2F2F6;
	}

	.gonice {
		margin: 10px 10px 10px 10px;
		margin-top: 5px;
		font-size: 14px;
		color: #a6a6a6;
	}

	.imgb {
		width: 100px;
		height: 100px;
		border-radius: 5px;
	}

	.messageBox {
		margin: 10px;
		padding: 10px;
		background-color: #F2F2F6
	}
</style>
