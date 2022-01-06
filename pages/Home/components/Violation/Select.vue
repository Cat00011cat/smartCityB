<template>
	<view>
		<view class="table-tr">
			<text class="desca">号牌种类</text>
			<picker class="descb">小型汽车</picker>
		</view>
		<view class="table-tr">
			<text class="desca">车牌号码</text>
			<picker class="descb">滇</picker>
		</view>
		<view class="table-tr">
			<text class="desca">发动机号</text>
			<picker class="descb">全部</picker>
		</view>
		<button type="default" class="button">查询</button>

		<view class="table-tr">
			<text>号牌种类</text>
			<input type="text" placeholder="号牌种类" v-model="engineNo" />
		</view>
		<view class="table-tr">
			<text>车牌号码</text>
			<input type="text" placeholder="车牌号码" v-model="plateNo" />
		</view>
		<view class="table-tr">
			<text>发动机号</text>
			<input type="text" placeholder="发动机号" v-model="type" />
		</view>
		<button type="default" class="button" @click="goCar()">绑定车辆</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				engineNo: '',
				plateNo: '',
				type: ''
			}
		},
		methods: {
			goCar() {
				uni.request({
					url: getApp().globalData.BASEURL + '/prod-api/api/traffic/car',
					method: 'POST',
					header: {
						'Authorization': uni.getStorageSync('token'), //安全认证
						'content-type': 'application/json', //请求数据类型
					},
					data: {
						"engineNo": this.engineNo,
						"plateNo": this.plateNo,
						"type": this.type
					},
					success: (res) => {
						console.log(res.data)
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F2F2F6;
	}

	.table-tr {
		padding: 10px;
		margin: 0px 10px 0px 10px;
		background-color: #FEFEFE;
		border-top: 0.5px solid #000000;
		font-size: 18px;
	}

	.desca {
		font-size: 20px;
		font-weight: bold;
	}

	.descb {
		font-size: 18px;
		padding: 10px;
		border: 1px solid #000000;
	}

	.button {
		margin: 10px 10px 10px 10px;
	}
</style>
