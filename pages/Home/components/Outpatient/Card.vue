<template>
	<view>
		<view class="bg" v-for="item of Data" :key="id">
			<view class="item">家庭住址：{{item.address}}</view>
			<view class="item">出生年月日：{{item.birthday}}</view>
			<view class="item">身份证：{{item.cardId}}</view>
			<view class="item">姓名：{{item.name}}</view>
			<view class="item">性别：{{item.sex}}</view>
			<view class="item">电话：{{item.tel}}</view>
		</view>
		<view class="bg2">
			<button type="default" class="button" @click="toAdd()">新增就诊人</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Data: []
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			toAdd() {
				uni.navigateTo({
					url: 'Add'
				})
			},
			getData() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/hospital/patient/list',
					header: {
						'Authorization': uni.getStorageSync('token'), //安全认证
						'content-type': 'application/x-www-form-urlencoded', //请求数据类型
					},
					success: (res) => {
						console.log(res.data)
						var getData = res.data.rows.map((item, index) => {
							return {
								...item,
								address: item.address,
								birthday: item.birthday,
								cardId: item.cardId,
								name: item.name,
								sex: item.sex,
								tel: item.tel,

							}
						})
						this.Data = getData;
					}
				})
			}
		}
	}
</script>

<style>
	.bg {
		margin: 10px;
		background-color: #FEFEFE;
		border-radius: 10px;
	}

	.bg2 {
		margin: 10px;
		background-color: #FEFEFE;
		border-radius: 10px;
		height: 200px;
	}

	.item {
		padding: 5px;
	}

	.button {
		top: 80px;
		margin: 10px;
		border-radius: 30px;
	}
</style>
