// pages/createOrder/createOrder.js
//app.globalData.medicine_four
const app = getApp()
const db = wx.cloud.database()
const _ = db.command
var util = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods: [],
        total:0
    },
    /**更新二级数组对象方法
     *  Page({
      data: {
        array: [{text: 'init data'}],
        goods: [
            {id: 1,pic: '/image/goods1.png'},
            {id: 1,pic: '/image/goods1.png'}
           ],
      },
      onLoad:function(options){   
	    let id = options.id
	    let index = 1
	    let str = "goods["+index+"].id"; //直接拼接成字符串
	    this.setData({
	        [str]:id   //用中括号包裹这个字符串
	    })
	}
      changeItemInArray: function() {
        this.setData({
          'array[0].text':'changed data'
        })
      }
    })
     * 
     * 
     */
    toOrder: function () {

        var hasUserInfo = app.globalData.hasUserInfo;
        console.log("see has userinfo commeng");
        console.log(hasUserInfo);
        if(hasUserInfo == false)
        {
            wx.showToast({
              title: '请先登陆',
              icon:'loading'
            })
            wx.switchTab({
              url: '../user/user',
            })

        }
        else{
                 //将购物记录存入云数据库中
        var datetime = util.formatTime(new Date());
        var time = ""+datetime;
        var that = this;
        var tmp = this.data.goods;
        console.log(tmp);
        var i = 0; 
        var len =tmp.length;
        for(i = 0; i <  len ; i++)
        {
            tmp[i]['time'] = time;
        }
        console.log(tmp);

        db.collection('users').where({
            _id:app.globalData.userInfo._id
        })
        .get({
            success:res => {
                console.log("云数据库查询成功");
                console.log(res);
                if(res.data.length == 1)
                {
                    console.log("进入查找时刻");
                    db.collection('users').doc(app.globalData.userInfo._id)
                    .update({
                        data:{
                            medicinebuy: _.push({detail:tmp})
                        }
                    }).then(e=>{
                        console.log("添加成功");
                        console.log(e);
                        //已经将数据存入云数据库，应将全局变量提交订单的的购物车清空
                        //以便于防止数据堆积
                        app.globalData.ordernumber=[0,0,0,0];
                        console.log(app.globalData.order);
                    })
                    
                }
                else{
                    console.log("这是哪个res未打印");

                }


            },
            
        })
        wx.showToast({
            title: '支付成功',
          })
          setTimeout(function (){
            wx.navigateBack({
              delta: 3
            })
          }, 1500)







        
    
    
    
    }
        
       



    
     
      },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        var total = 0;
        var ordernumber = app.globalData.ordernumber;
        var tmp = [];
        var j = 0;
        var price;
        var num;
        console.log("create onload funtion");
        


        for(var i = 0; i < app.globalData.medicine.length;i++)
        {
            if(ordernumber[i] > 0)
            {
                tmp[j]=app.globalData.medicine[i];
                j++;
                price = app.globalData.medicine[i].price;
                num = ordernumber[i];
                total = total+price*num;
            }
        }
        console.log(tmp);

        this.setData({
            goods:tmp,
            total:total
        })


       /* console.log(tmp);
        console.log("看看这个createorder");
        console.log(goods);
        for(i = 0; i< len ; i++)
        {
            total =total+ goods[i].buynumber*goods[i].price;
        }
        this.setData({
            total:total,
            goods:goods

        })
       */
       


      
       
        
        
        wx.setNavigationBarColor({//设置导航栏颜色
            frontColor: '#000000',//注意frontColor的值只能为000000或者111111
            backgroundColor: "#fff",
          });
          wx.setNavigationBarTitle({
            title: '确认订单',
          })

    },
   

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("onshow function");
       


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