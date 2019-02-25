//index.js
//获取应用实例
const app = getApp()

Page({
  /**
    * 生命周期函数--监听页面初次渲染完成
    */
  onReady: function (res) {
    //页面渲染完成后，创建一个video的上下文对象，并赋值给this.videoContext
    this.videoContext = wx.createVideoContext('myVideo', this);
  },
  //输入框的内容，默认为空
  intputValue: "",
  /**
   * 页面的初始数据
   */
  data: {

    //初始化弹幕的值
    danmuList: [
      {
        text: "第一秒显示的弹幕", //弹幕信息
        color: "#f00",//弹幕颜色
        time: 1//在视频播放第一秒时发送弹幕
      },
      {
        text: "第二秒显示的弹幕", //弹幕信息
        color: "#00f",//弹幕颜色
        time: 2//在视频播放第一秒时发送弹幕
      },
      {
        text: "第三秒显示的弹幕", //弹幕信息
        color: "#0f0",//弹幕颜色
        time: 3//在视频播放第一秒时发送弹幕
      }
    ]
  },
  //输入框失去焦点后拿到输入的内容
  bindInputBlur: function (e) {
    console.log(e);
    this.intputValue = e.detail.value;
  },
  sendDanmu:function(e){
    console.log(e);
    this.videoContext.sendDanmu({
      text: this.intputValue,
      color:"pink",
    });
  }
})