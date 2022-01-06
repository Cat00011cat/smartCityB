<template>
	<view>
		<view class="mineBackground">
			<view class="mineBackground">
				<image class="mineAvatar" src="../../static/Jack.png" v-on:click="loginPage()"></image>
				<text class=" mineName" @click="loginPage()" v-text="userName">立即登录</text>
			</view>
			<view class="mineMenu">
				<view class="mineInfo" @click="mineInfo()">
					<text>个人信息</text>
					<text class="right">></text>
				</view>


				<view class="mineInfo" @click="dingdanlist()">
					<text>订单列表</text>
					<text class="right">></text>
				</view>

				<view class="mineInfo" @click="resetPassword()">
					<text>修改密码</text>
					<text class="right">></text>
				</view>

				<view class="mineInfo" @click="feedback()">
					<text>意见反馈</text>
					<text class="right">></text>
				</view>

				<view class="mineInfo" @click="guide()">
					<text>引导页</text>
					<text class="right">></text>
				</view>

				<view class="mineInfo" @click="loginout()">
					<button type="default" plain="true">退出登录</button>
				</view>


			</view>
		</view>
	</view>
</template>

<script>
	import httpR from '../../network/http_request.js'
	export default {
		onLoad() {
			httpR({
				url: '/prod-api/api/common/user/getInfo',
				success: (res) => {
					this.userName = res.data['user'].userName
					console.log(res.data[user].userName)
				}
			})
		},
		data() {
			return {
				userName: ''
			}
		},
		methods: {
			mineInfo: function() {
				uni.navigateTo({
					url: 'pages/mineinfo'
				})
				console.log("infoSuccess")
			},
			loginPage: function() {
				uni.navigateTo({
					url: 'pages/login'
				})
				console.log('loginPageSuccess')
			},
			resetPassword: function() {
				uni.navigateTo({
					url: 'pages/resetpassword'
				})
				console.log("resetpasswordSuccess")
			},
			feedback: function() {
				uni.navigateTo({
					url: 'pages/feedback'
				})
				console.log('success')
			},
			loginout: function() {
				uni.showModal({
					content: '是否退出',
					success: (res) => {
						uni.showToast({
							position: 'bottom',
							title: '退出成功'
						})
					}
				})
			},
			dingdanlist: function() {
				uni.navigateTo({
					url: 'pages/dingdanlist'
				})
				console.log('1')
			},
			guide() {
				uni.navigateTo({
					url: '../guide',
				})
				console.log('1')
			}
		}
	}
</script>

<style>
	page {
		background: #F2F2F6;
	}

	.mineBackground {
		height: 100px;
		margin: 30px 10px 10px 10px;
		background-color: #FEFEFE;
		border-radius: 5px;
	}

	.mineAvatar {
		float: left;
		width: 88px;
		height: 88px;
		top: 5px;
		border-radius: 100%;
	}

	.mineName {
		font-size: 18px;
		float: left;
		margin: 30px 30px 30px 20px;
	}

	.loginout {
		padding: 120px;
	}

	.mineInfo {
		padding: 10px;
		margin: 30px 10px 10px 10px;
		background-color: #FEFEFE;
		border-radius: 5px;
	}

	.right {
		float: right;
	}
</style>
