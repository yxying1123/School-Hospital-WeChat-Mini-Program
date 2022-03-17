

// pages/test/test.js
const db = wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:[],
        catesList:[
            {
                index:1,
                text:'门诊',
                images_url:'../../images/index_navigator.png',
                navigator_url:'/pages/reserve/reserve'
            },
            {
                index:2,
                text:'药房',
                images_url:'../../images/index_navigator1.png',
                navigator_url:'/pages/medicine/medicine'
            },
            {
                index:3,
                text:'通知',
                images_url:'../../images/index_navigator2.png',
                navigator_url:'/pages/information/information'
            },
            {
                index:4,
                text:'介绍',
                images_url:'../../images/index_navigator3.png',
                navigator_url:'/pages/doctor/doctor'
            }
           
        ],

    },
    getmedicine()
    {
        console.log("see getmedicine function");
        wx.cloud.callFunction({
            name:'getmedicine',
            success(res){
                console.log("进入云函数成功");
                console.log(res)
            },
            fail(res){
                console.log("进入云函数失败");
            }
        })

    },
    checkboxChange:function(e){
        var that = this;
        console.log(e);
        // 根据自己要实现的操作进行编写
        that.setData({
          checkValue:e.detail.value
        })
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("运行onload函数");

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("运行ready函数");

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("运行onshow函数");
       

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