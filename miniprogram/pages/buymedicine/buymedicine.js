// pages/buymedicine/buymedicine.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        medicine:[],
        getdata:false,

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("1.onload function");
        var tmp = app.globalData.medicine;
        console.log(tmp);
        this.setData({
            getdata:true,
            medicine:tmp
        })
        console.log(this.data.getdata);


    },
    tapDetail (event) {
        console.log(event);
        var gloabgooddetail = 0;
       var tmp = event.currentTarget.dataset.index;
       console.log(tmp);
       app.globalData.gooddetailnumber = tmp;
       wx.navigateTo({
        url: '/pages/goodDetail/goodDetail',
      })
        /* gloabgooddetail = tmp;
        app.globalData.gooddetailnumber = tmp;
        console.log(gloabgooddetail);
      wx.navigateTo({
          url: '/pages/goodDetail/goodDetail',
        })*/
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("2.onready function");

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("3.onshow function");

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