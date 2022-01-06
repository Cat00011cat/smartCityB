<script>
	export default {
		// IP定义全局变量用于请求封装
		globalData: {
			BASEURL: 'http://124.93.196.45:10001',
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #F2F2F6;
	}
</style>
