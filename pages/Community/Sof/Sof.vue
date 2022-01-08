<template>
	<view>
		<view>
			<textarea style="border: 1px solid #000000; width: 743rpx;" placeholder="请输入您的图文内容..."></textarea>
			<image :src="img" style="width: 100px; height: 100px;"></image>
			<button type="default" size="mini" @click="paishe()">随手拍</button>
			<button type="default" @click="chat()">立即发布</button>
			<view style="background-color: #00aaff; height: 100px; margin: 10px; border-radius: 10px;">发布的图文内容</view>
			<button type="default" size="mini" style="margin-left: 10px;" @click="pl()">评论</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: ''
			}
		},
		methods: {
			paishe() {
				uni.chooseImage({
					count: 9,
					// 获取图片缓存路径
					success: (res) => {
						var img = res.tempFilePaths['0'];
						console.log(img)
						// console.log(JSON.stringify(res.tempFilePaths))
					}
				})
				this.img = img
			},
			chat() {
				uni.showToast({
					title: '发布成功'
				})
			},
			pl() {
				uni.showModal({
					title: '请输入留言',
					editable: true,
					success() {
						uni.showToast({
							title: '评论成功'
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
