<template>
	<view>
		<view>
			<view>请输入旧密码</view>
			<input type="text" class="input" v-model="oldPassword" />
			<view>请输入新密码</view>
			<input type="text" password="true" class="input" v-model="newPassword" />
			<button type="default" class="button" @click="resetpassword()">修改密码</button>
		</view>
	</view>
</template>

<script>
	import httpR from '../../../network/http_request.js'
	export default {
		data() {
			return {
				oldPassword: '',
				newPassword: ''
			}
		},
		methods: {
			resetpassword() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/common/user/resetPwd',
					method: 'PUT',
					data: {
						'oldPassword': this.oldPassword,
						'newPassword': this.newPassword
					},
					header: {
						'Authorization': uni.getStorageSync('token'), //安全认证
						'content-type': 'application/json', //请求数据类型
					},
					success: (res) => {
						uni.showToast({
							position: 'bottom',
							title: res.data['msg']
						})
						console.log(uni.getStorageSync('token'))
						console.log(res.data['msg'])
						console.log('1')
					}
				})
			}
		}
	}
</script>

<style>
	.input {
		border-bottom: 1px solid #4c4c4c;
	}

	.button {
		margin-top: 10px;
	}
</style>
