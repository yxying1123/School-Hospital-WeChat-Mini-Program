// app.js

App({
  onLaunch: function () {
    var that = this;
    wx.cloud.init({
      env:"testcloud-7g7sp2mwf461dbce"
    })
   /* if(Object.keys(that.globalData.userInfo).length === 0)
    {
      wx.showToast({
        title: '请先登陆',
        icon: 'loading',
        duration: 10000
       })
       
      wx.switchTab({
        url: 'pages/user/user',
      })
    }
    console.log("1.should onlauch function");**/
    wx.cloud.callFunction({
      name:'getmedicine',
      success:res=>{
        console.log("云函数读取数据"+res);
        that.globalData.medicine=res.result.data;
        console.log( that.globalData.medicine);

      },
      fail:err=>{
        console.log("出现错误："+err);

      }
    })

    wx.cloud.callFunction({
      name:'getdoctor',
      success:res=>{
        console.log("云函数读取数据"+res);
        console.log(res);
        that.globalData.doctor=res.result.data;
        console.log( that.globalData.doctor);

      },
      fail:err=>{
        console.log("出现错误："+err);

      }
    })
 


      
},
    globalData: {
      //定义购物车数量
      shopping_num : 0,
      //定义云数据库的种类
      medicine:[],
      doctor:[],
      user:[],
      //用户信息
      userInfo:[],
      //定义gooddetail进入的药品index,先初始化一个值，通过home页面改变
      gooddetailnumber:0,
      //定义预约状态
      reserve:{
        name:'',
        studynum:'',
        sclass:'',
        telephone:'',
        sex:'',
        symptom:'',
        time:'',
        reserve_time:''
      },
      //购物车状态
      shoppingcar:[],
      //订单结算状态
      order:[],

      buynumber:[0,0,0,0],
      ordernumber:[0,0,0,0],
      hasUserInfo:false,
    
    }
 

})
