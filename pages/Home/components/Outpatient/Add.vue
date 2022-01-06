<template>
	<view>
		<view class="jzBox">
			<view>请完善就诊人信息</view>
			<input type="text" v-model="name" placeholder="姓名" class="input" />
			<input type="text" v-model="sex" placeholder="性别" class="input" />
			<input type="text" v-model="cardId" placeholder="身份证号" class="input" />
			<input type="text" v-model="birthday" placeholder="出生日期" class="input" />
			<input type="text" v-model="tel" placeholder="手机号" class="input" />
			<input type="text" v-model="address" placeholder="地址" class="input" />
			<button type="default" @click="goRegister()" class="button">确定</button>
		</view>
	</view>
</template>

<script>
	import httpR from '../../../../network/http_request.js'
	export default {
		data() {
			return {
				name: '',
				sex: '',
				cardId: '',
				birthday: '',
				tel: '',
				address: '',
			}
		},
		methods: {
			goRegister() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/hospital/patient',
					method: 'POST',
					data: {
						'name': this.name,
						'sex': this.sex,
						'cardId': this.cardId,
						'birthday': this.birthday,
						'tel': this.tel,
						'address': this.address,
					},
					header: {
						'Authorization': uni.getStorageSync('token'), //安全认证
						'content-type': 'application/json', //请求数据类型
					},
					success: (res) => {
						console.log(res.data['msg'])
						//注册成功跳转
						uni.showToast({
								position: 'bottom',
								title: res.data['msg']
							}),
							uni.navigateBack({
								delta: 1
							})
					}
				})
			}
		}
	}
</script>

<style>
	.jzBox {
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
