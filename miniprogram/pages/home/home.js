// pages/home/home.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //轮播图设置
        getdata:false,
        circular:true,
        //底端推荐栏
        medicine:[],
        indicatorDots: true,
        vertical: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        
        catesList:[
            {
                index:1,
                text:'门诊',
                images_url:'../images/index_reseve.png',
                navigator_url:'/pages/reserve/reserve'
            },
            {
                index:2,
                text:'药房',
                images_url:'../images/index_buymedicne.png',
                navigator_url:'/pages/buymedicine/buymedicine'
            },
            {
                index:3,
                text:'通知',
                images_url:'../images/index_inform.png',
                navigator_url:'/pages/information/information'
            },
            {
                index:4,
                text:'值班',
                images_url:'../images/index_history.png',
                navigator_url:'/pages/doctor/doctor'
            }
           
        ],

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
     * 生命周期函数--监听页面加载
     */
    onLoad:function (options) {
      let that = this;
     
        console.log("2.should onload");
        wx.cloud.callFunction({
          name:'getmedicine',
          success:res=>{
            console.log("云函数读取数据"+res);
            var tmp = res.result.data;
            app.globalData.medicine=res.result.data;
            console.log( app.globalData.medicine);
            that.setData({
              getdata:true,
              medicine:res.result.data

            })
            console.log("home页面的medicine"+that.data.medicine);
    
          },
          fail:err=>{
            console.log("出现错误："+err);
    
          },
          }) 
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady:function () {
      console.log("3.onready function");
     /*var tmp = [];
      wx.cloud.callFunction({
        name:'getmedicine',
        success:res => {
         app.globalData.medicine = res.result.data;
         tmp = app.globalData.medicine ;
         console.log("这是进入onload里面的yunhansu");
         console.log("这是云函数对数据赋值");
         console.log(tmp);
        },
        fail:res=>{
          console.log("get yun funciton to medicine error");
        }
        });
      console.log("see onload function");
      var getmedicindata = app.globalData.medicine;
      console.log(getmedicindata);
      this.setData({
        medicine:getmedicindata
      })



   /*   console.log("onready function");
      wx.cloud.callFunction({
        name:'getmedicine',
        success:res => {
         app.globalData.medicine = res.result.data;
         var tmp = app.globalData.medicine ;
         console.log("see home send global medicine");
         console.log(tmp);
        },
        fail:res=>{
          console.log("get yun funciton to medicine error");
        }
        });
      console.log("see onready function");
      var getmedicindata = app.globalData.medicine;
      console.log(getmedicindata);
      this.setData({
        medicine:getmedicindata
      })
      console.log(this.data.medicine);*/

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow:function () {
      console.log("3.should onshow");
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