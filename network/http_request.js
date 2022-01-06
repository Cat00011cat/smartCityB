// 封装网络请求
const httpR = ({
	url, // /prod-api/api/activity/rotation/list
	method, // GET
	data, //数据体
	success //成功回调
}) => {
	// 调用API
	uni.request({
		url: getApp().globalData.BASEURL + url, //IP与接口地址的拼接
		method: method, //请求类型
		header: {
			'Authorization': uni.getStorageSync('token'), //安全认证
			'content-type': 'application/x-www-form-urlencoded', //请求数据类型
		},
		data: data, //post情趣携带的数据体
		success: (res) => {
			if (typeof success == 'function') { //typeof运算符用于判断对象的类型
				success(res)
				// 输出请求头的token
				// console.log(uni.getStorageSync('token'))
				console.log('携带参数请求成功')
			}
		}
	})
}

// 命名并导出请求库
export default httpR;
