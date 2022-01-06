<template>
	<view>
		<view class="registerBox">
			<view>录入信息进行注册</view>
			<input type="text" v-model="avatar" placeholder="./Cat00011cat.png" class="input" />
			<input type="text" v-model="userName" placeholder="请输入用户名" class="input" />
			<input type="text" v-model="nickName" placeholder="请输入昵称" class="input" />
			<input type="text" v-model="password" placeholder="请输入密码" class="input" />
			<input type="text" v-model="phonenumber" placeholder="请输入手机号" class="input" />
			<input type="text" v-model="sex" placeholder="请输入性别" class="input" />
			<input type="text" v-model="email" placeholder="请输入邮箱" class="input" />
			<input type="text" v-model="idCard" placeholder="请输入身份证号" class="input" />
			<button type="default" @click="goRegister()" class="button">立即注册</button>
		</view>
	</view>
</template>

<script>
	// 导入封装的请求库
	import httpR from '../../../network/http_request.js'
	export default {
		data() {
			return {
				avatar: '',
				userName: '',
				nickName: '',
				password: '',
				phonenumber: '',
				sex: '',
				email: '',
				idCard: ''
			}
		},
		methods: {
			goRegister() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/register',
					method: 'POST',
					data: {
						'avatar': this.avatar,
						'userName': this.userName,
						'nickName': this.nickName,
						'password': this.password,
						'phonenumber': this.phonenumber,
						'sex': this.sex,
						'email': this.email,
						'idCard': this.idCard
					},
					success: (res) => {
						console.log(res.data['msg'])
						//注册成功跳转
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
	.registerBox {
		padding: 10px;
	}

	.input {
		height: 50px;
		border-bottom: 1px solid #000000;
	}

	.button {
		margin-top: 10px;
	}
</style>
