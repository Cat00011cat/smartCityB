<template>
	<view>
		<view>
			<button @click="create()">创建订单</button>
		</view>
		<view class="dingdanlistBox" v-for="item of dingdanlist" :key="item.id">
			<view class="desc">订单号：{{item.orderNo}}</view>
			<view class="desc">订单类型：{{item.orderType}}</view>
			<view class="desc">订单生成日期：{{item.createTime}}</view>
		</view>
	</view>
</template>

<script>
	import httpR from '../../../network/http_request.js'
	export default {
		data() {
			return {
				dingdanlist: [],
				orderNo: '',
				orderType: '',
				createTime: ''

			}
		},
		onLoad() {
			uni.request({
				url: getApp().globalData.BASEURL + '/prod-api/api/takeout/order/list',
				method: 'GET',
				header: {
					'Authorization': uni.getStorageSync('token'), //安全认证
					'content-type': 'application/x-www-form-urlencoded', //请求数据类型
				},
				success: (res) => {
					var resData = res.data.rows.map((item, index) => {
						console.log(item)
						return {
							// 展开对象
							...item,
							orderNo: item.orderInfo.orderNo,
							orderType: item.orderInfo.orderType,
							createTime: item.orderInfo.createTime
						}
					})
					this.dingdanlist = resData
					console.log(uni.getStorageSync('token'))
				}
			})
		},
		methods: {
			create() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/takeout/order/create',
					method: 'POST',
					data: {
						"addressDetail": "大连理工大学 教学楼 A3-118",
						"label": "学校",
						"name": "菜菜先生",
						"phone": "13800000000",
						"amount": 64,
						"orderItemList": [{
								"productId": 1,
								"quantity": 2
							},
							{
								"productId": 30,
								"quantity": 1
							}
						],
						"sellerId": 1
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
						console.log(res.data['msg'])
						console.log(uni.getStorageSync('token'))
					}
				})
			}
		}
	}
</script>

<style>
	.dingdanlistBox {
		margin: 10px;
		background-color: #FEFEFE;
		border-radius: 5px;
	}

	.desc {
		padding: 5px;
	}
</style>
