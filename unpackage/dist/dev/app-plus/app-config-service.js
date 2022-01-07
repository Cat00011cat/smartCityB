
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Home/Home","pages/allServices/allServices","pages/Community/Community","pages/News/News","pages/Mine/Mine","pages/Home/components/Header","pages/Home/components/Icons","pages/Home/components/Swiper","pages/Home/components/Theme","pages/Home/components/News","pages/Mine/pages/login","pages/Mine/pages/mineinfo","pages/Mine/pages/resetpassword","pages/Mine/pages/feedback","pages/Mine/pages/dingdanlist","pages/Mine/pages/register","pages/guide","pages/Home/components/Activity/Activity","pages/Home/components/Activity/Details","pages/Home/components/Violation/Violation","pages/Home/components/Violation/Select","pages/Home/components/Violation/SelectB","pages/Home/components/Outpatient/Outpatient","pages/Home/components/Outpatient/Introduction","pages/Home/components/Outpatient/Card","pages/Home/components/Outpatient/Add","pages/Community/Property/Property","pages/Community/Express/Express","pages/Community/Sof/Sof","pages/Community/Business/Business","pages/Community/Car/Car","pages/Community/Moving/Moving"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#808080","selectedColor":"#00aaff","list":[{"iconPath":"static/tabBar/home.png","selectedIconPath":"static/tabBar/selhome.png","pagePath":"pages/Home/Home","text":"首页"},{"iconPath":"static/tabBar/allservices.png","selectedIconPath":"static/tabBar/selallservices.png","pagePath":"pages/allServices/allServices","text":"全部服务"},{"iconPath":"/static/tabBar/activity.png","selectedIconPath":"static/tabBar/selactivity.png","pagePath":"pages/Community/Community","text":"智慧社区"},{"iconPath":"static/tabBar/new.png","selectedIconPath":"static/tabBar/selnew.png","pagePath":"pages/News/News","text":"新闻"},{"iconPath":"static/tabBar/my.png","selectedIconPath":"static/tabBar/selmy.png","pagePath":"pages/Mine/Mine","text":"个人中心"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"智慧城市","compilerVersion":"3.3.5","entryPagePath":"pages/Community/Community","entryPageQuery":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Home/Home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/allServices/allServices","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"全部服务","enablePullDownRefresh":false}},{"path":"/pages/Community/Community","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"智慧社区","enablePullDownRefresh":false}},{"path":"/pages/News/News","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"新闻","enablePullDownRefresh":false}},{"path":"/pages/Mine/Mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Header","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Icons","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Swiper","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Theme","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Home/components/News","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Mine/pages/login","meta":{},"window":{"navigationBarTitleText":"用户登录","enablePullDownRefresh":false}},{"path":"/pages/Mine/pages/mineinfo","meta":{},"window":{"navigationBarTitleText":"个人信息","enablePullDownRefresh":false}},{"path":"/pages/Mine/pages/resetpassword","meta":{},"window":{"navigationBarTitleText":"修改密码","enablePullDownRefresh":false}},{"path":"/pages/Mine/pages/feedback","meta":{},"window":{"navigationBarTitleText":"意见反馈","enablePullDownRefresh":false}},{"path":"/pages/Mine/pages/dingdanlist","meta":{},"window":{"navigationBarTitleText":"订单列表","enablePullDownRefresh":false}},{"path":"/pages/Mine/pages/register","meta":{},"window":{"navigationBarTitleText":"用户注册","enablePullDownRefresh":false}},{"path":"/pages/guide","meta":{},"window":{"navigationBarTitleText":"智慧城市引导页","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Activity/Activity","meta":{},"window":{"navigationBarTitleText":"活动管理","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Activity/Details","meta":{},"window":{"navigationBarTitleText":"活动详情","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Violation/Violation","meta":{},"window":{"navigationBarTitleText":"违章详情","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Violation/Select","meta":{},"window":{"navigationBarTitleText":"违章查询","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Violation/SelectB","meta":{},"window":{"navigationBarTitleText":"违章查询","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Outpatient/Outpatient","meta":{},"window":{"navigationBarTitleText":"门诊预约","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Outpatient/Introduction","meta":{},"window":{"navigationBarTitleText":"医院简介","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Outpatient/Card","meta":{},"window":{"navigationBarTitleText":"就诊卡","enablePullDownRefresh":false}},{"path":"/pages/Home/components/Outpatient/Add","meta":{},"window":{"navigationBarTitleText":"添加就诊人","enablePullDownRefresh":false}},{"path":"/pages/Community/Property/Property","meta":{},"window":{"navigationBarTitleText":"物业服务","enablePullDownRefresh":false}},{"path":"/pages/Community/Express/Express","meta":{},"window":{"navigationBarTitleText":"快件管理","enablePullDownRefresh":false}},{"path":"/pages/Community/Sof/Sof","meta":{},"window":{"navigationBarTitleText":"友邻社交","enablePullDownRefresh":false}},{"path":"/pages/Community/Business/Business","meta":{},"window":{"navigationBarTitleText":"商业推广","enablePullDownRefresh":false}},{"path":"/pages/Community/Car/Car","meta":{},"window":{"navigationBarTitleText":"车辆管理","enablePullDownRefresh":false}},{"path":"/pages/Community/Moving/Moving","meta":{},"window":{"navigationBarTitleText":"物业通知","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
