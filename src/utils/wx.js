export default {
  //获取浏览器地址栏参数值
  getUrlParam(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
  },
  initShareInfo(wx) {
    let url =""
    if (this.$sessionStorage.get('userinfo')){
      let href = location.href
      let UserInfo = this.$sessionStorage.get('userinfo')
      url = '?friendId='+UserInfo.id+'&'+href
    }
    let shareInfo = {
      title: '我是唐僧', // 分享标题
      desc: '孙悟空,沙和尚,猪八戒', // 分享描述
      // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      link: 'http://luohan.wuhanhsj.com/vote/api/v1/android/vote'+url,
      imgUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80', // 分享图标
    }
    wx.onMenuShareAppMessage(shareInfo);
    wx.onMenuShareTimeline(shareInfo);
    wx.onMenuShareQQ(shareInfo);
    wx.onMenuShareQZone(shareInfo);
    wx.updateAppMessageShareData(shareInfo);
    wx.updateTimelineShareData(shareInfo);
  }
}
