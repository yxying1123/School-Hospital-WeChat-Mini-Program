var app = getApp()
Page({
    /**
     * 页面的初始数据
     */
  data: {
      doctor:[],
    navbar: ['医资力量', '值班医生', '发展历史'],
    currentTab: 0   /*初始显示的页面*/
  },
  //点击触发的事件
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

    
  

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("onload function");

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("onready function");

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("onshow function");
        var doctor= app.globalData.doctor;
        this.setData({
            doctor:doctor
        })
        console.log(doctor);

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})