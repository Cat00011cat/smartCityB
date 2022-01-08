<template>
	<view>
		<!-- 用户可添加个人车辆信息卡，可编辑完善车辆详情，提供用户可编辑
		的字段有车牌号码、车位号、停车卡号、车主姓名、车主手机号、相
		关住户姓名和地址。 -->
		<view>
			<!-- 			添加个人车辆信息卡 -->
			<view>
				<view class="table-tr">
					<text>车牌号码</text>
					<input type="text" placeholder="车牌号码" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>车位号</text>
					<input type="text" placeholder="车位号" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>停车卡号</text>
					<input type="text" placeholder="停车卡号" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>车主姓名</text>
					<input type="text" placeholder="车主姓名" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>车主手机号</text>
					<input type="text" placeholder="车主手机号" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>相关住户姓名和地址</text>
					<input type="text" placeholder="相关住户姓名和地址" v-model="plateNo" />
				</view>
				<button type="default" class="button" @click="addCar()"
					style="background-color: #4CD964; color: #FEFEFE;">添加车辆</button>
			</view>
			<view style="margin-top: 10px;">
				<!-- 编辑 -->
				<view class="table-tr">
					<text>车牌号码</text>
					<input type="text" placeholder="车牌号码" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>车位号</text>
					<input type="text" placeholder="车位号" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>停车卡号</text>
					<input type="text" placeholder="停车卡号" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>车主姓名</text>
					<input type="text" placeholder="车主姓名" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>车主手机号</text>
					<input type="text" placeholder="车主手机号" v-model="plateNo" />
				</view>
				<view class="table-tr">
					<text>相关住户姓名和地址</text>
					<input type="text" placeholder="相关住户姓名和地址" v-model="plateNo" />
				</view>
				<button type="default" class="button" @click="edCar()"
					style="background-color: #DD524D; color: #FEFEFE;">编辑车辆</button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.table-tr {
		padding: 10px;
		margin: 0px 10px 0px 10px;
		background-color: #FEFEFE;
		border-top: 0.5px solid #000000;
		font-size: 18px;
	}
</style>
