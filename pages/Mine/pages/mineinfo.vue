<template>
	<view>
		<view>
			<view class="infotitle">个人信息</view>
			<view class="mineinfoBox">
				<view class="info">用户ID：{{userId}}</view>
				<view class="info">用户名：{{userName}}</view>
				<view class="info">用户昵称：{{nickName}}</view>
				<view class="info">邮箱：{{email}}</view>
				<view class="info">性别：{{sex}}</view>
				<view class="info">头像：{{avatar}}</view>
				<view class="info">身份证号：{{idCard}}</view>
				<view class="info">账户余额：{{balance}}</view>
				<view class="info">用户积分：{{score}}</view>
			</view>
			<view class="infotitle">修改个人信息</view>
			<view class="mineinfoBox">
				<view class="info">邮箱</view>
				<input type="text" class="infoinput" v-model="email" />
				<view class="info">身份证号</view>
				<input type="text" class="infoinput" v-model="idCard" />
				<view class="info">用户昵称</view>
				<input type="text" class="infoinput" v-model="nickName" />
				<view class="info">手机号</view>
				<input type="text" class="infoinput" v-model="phonenumber" />
				<view class="info">性别</view>
				<input type="text" class="infoinput" v-model="sex" />
				<button type="default" @click="">修改信息</button>
			</view>
		</view>
	</view>
</template>

<script>
	//导入请求库
	import httpR from '../../../network/http_request.js'
	export default {
		onLoad() {
			httpR({
				url: '/prod-api/api/common/user/getInfo',
				methos: 'GET',
				data: {},
				success: (res) => {
					console.log(res.data)
					this.userId = res.data['user'].userId
					this.userName = res.data['user'].userName
					this.nickName = res.data['user'].nickName
					this.email = res.data['user'].email
					this.sex = res.data['user'].sex
					this.avatar = res.data['user'].avatar
					this.idCard = res.data['user'].idCard
					this.balance = res.data['user'].balance
					this.score = res.data['user'].score
					this.phonenumber = res.data['user'].phonenumber
					this.sex = res.data['user'].sex

					// console.log(res.data['user'].userId)
				}
			})
		},
		data() {
			return {
				userId: '',
				userName: '',
				nickName: '',
				email: '',
				sex: '',
				avatar: '',
				idCard: '',
				balance: '',
				score: '',
				phonenumber: ''
			}
		},
		methods: {

		}
	}
</script>

<style>
	.mineinfoBox {
		background-color: #FEFEFE;
	}

	.infotitle {
		padding: 10px;
	}

	.info {
		padding: 5px;
	}

	.infoinput {
		border-bottom: 1px solid #F2F2F6;
	}
</style>
