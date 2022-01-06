<template>
	<view>
		<view class="loginBox">
			<view>用户名</view>
			<input type="text" v-model="username" placeholder="请输入用户名" class="input" />
			<view>用户密码</view>
			<input type="text" v-model="password" password="true" placeholder="请输入用户密码" class="input" />
			<button class="button" @click="login()">立即登录</button>
			<button class="button" @click="register()">没有账户？</button>
		</view>
	</view>
</template>

<script>
	// 导入请求库
	import httpR from '../../../network/http_request.js'
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			login() {
				uni.request({
					method: "POST",
					url: getApp().globalData.BASEURL + '/prod-api/api/login',
					data: {
						'username': this.username,
						'password': this.password
					},
					success: (res) => {
						if (res.data['code'] == 200) {
							uni.setStorageSync('token', res.data['token']);
							uni.showToast({
								title: res.data['msg'],
								position: 'bottom'
							});
							//登录成功返回首页
							uni.navigateBack({
								url: '../Mine'
							});
							console.log(res.data['msg'])
							console.log(res.data['token'])
						} else {
							uni.showToast({
								position: 'bottom',
								title: res.data['msg']
							})
							console.error(res.data['msg'])
						}
					}
				})
			},
			register() {
				uni.navigateTo({
					url: 'register',
				})
			}
		}
	}
</script>

<style>
	.loginBox {
		padding: 10px;
	}

	.input {
		height: 50px;
		background-color: #FEFEFE;
	}

	.button {
		margin-top: 10px;
	}
</style>
