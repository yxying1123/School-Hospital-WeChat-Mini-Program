// pages/see_reserve/see_reserve.js
const app = getApp()
const db = wx.cloud.database()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        reserve:[],
        loading:true,

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("1.onloading");
        var data = {};

        var tmp = app.globalData.userInfo;
        console.log(tmp);
        if(Object.keys(tmp.reserve).length === 0)
        {
            console.log("在判断用户是否有预约");
            this.data.loading = true;
        }
        else{
            this.data.loading = false;
        }

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("2.onreadying");

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("3.onshow");
        var tmp = app.globalData.userInfo.reserve;
        console.log(tmp);
        this.setData({
            reserve:tmp

        })
        console.log(this.data.reserve);

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