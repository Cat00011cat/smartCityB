<template>
	<view>
		<view>
			<view>反馈标题</view>
			<input type="text" class="input" v-model="feedbackTitle" />
			<view>反馈内容</view>
			<textarea placeholder="请输入您想说的话..." v-model="feedbackDesc"></textarea>
			<button type="default" class="button" @click="pushFeedback()">提交反馈</button>
		</view>
		<view class="feedbacklist">
			<view>意见反馈列表</view>
			<view class="listbg">
				<view>标题</view>
				<view>反馈内容</view>
			</view>
			<view class="listbg">
				<view>标题</view>
				<view>反馈内容</view>
			</view>
		</view>
	</view>
</template>

<script>
	import httpR from '../../../network/http_request.js'
	export default {
		data() {
			return {
				feedbackTitle: '',
				feedbackDesc: ''
			}
		},
		methods: {
			pushFeedback() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/common/feedback',
					method: 'POST',
					data: {
						'feedbackTitle': this.feedbackTitle,
						'feedbackDesc': this.feedbackDesc
					},
					header: {
						'Authorization': uni.getStorageSync('token'), //安全认证
						'content-type': 'application/json', //请求数据类型
					},
					success: (res) => {
						console.log(res.data['msg'])
						console.log(uni.getStorageSync('token'))
						uni.showToast({
							position: 'bottom',
							title: res.data['msg']
						})
					}
				})
			}
		}
	}
</script>

<style>
	.input {
		border-bottom: 1px solid #676761;
	}

	.button {
		margin-top: 10px;
	}

	.feedbacklist {
		margin-top: 10px;
	}

	.listbg {
		margin-top: 10px;
		background-color: #FEFEFE;
	}
</style>
