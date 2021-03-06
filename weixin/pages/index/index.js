//index.js
//获取应用实例
const app = getApp()
var helloData = {
  name: 'WeChat'
}
Page({
  data: {
    motto: 'Hello World',
    name: helloData,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeone: function () {
    wx.navigateTo({
      url: '../one/one'
    })
  },
  changetwo: function () {
    wx.navigateTo({
      url: '../two/two'
    })
  },
  changethree: function () {
    wx.navigateTo({
      url: '../three/three'
    })
  },
  changefour: function () {
    wx.navigateTo({
      url: '../four/four'
    })
  },
  changefive: function () {
    wx.navigateTo({
      url: '../five/five'
    })
  },
  changesix: function (e) {
    wx.navigateTo({
      url: '../six/six'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
