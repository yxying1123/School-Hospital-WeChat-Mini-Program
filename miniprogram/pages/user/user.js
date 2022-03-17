// pages/mine/mine.js
const app = getApp()
const db = wx.cloud.database()
var common = require('../../utils/common.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
    canIUseGetUserProfile: false,
    user:[],
    phone: '',
    avatarUrl: '/pages/images/doctor.jpg',
    avatarUrl2:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

 

  tapOrderList: function () {
    wx.navigateTo({
      url: 'goodsOrder/goodsOrder',
    })
  },
  see_reserve(){
    console.log("see reserve function");
    wx.navigateTo({
      
      url: '../see_reserve/see_reserve',
    })

  },
  see_medicinebuy(){
    wx.navigateTo({
      url: '../see_medicinebuy/see_medicinebuy',
    })

  },
  see_recommend(){
    wx.navigateTo({
      url: '../see_recommend/see_recommend',
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad() {
    console.log("1 onready funciotn");
    wx.setNavigationBarColor({//设置导航栏颜色
      frontColor: '111111',//注意frontColor的值只能为000000或者111111
      backgroundColor: "#1296db",
    });
    wx.setNavigationBarTitle({
      title: '用户信息',
    });

    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    var tmp ;
    var nickName;
    var avatarUrl;
    wx.getUserProfile({
      
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log("看看这个获取用户信息");
        console.log(res);
        nickName = res.userInfo.nickName;
        avatarUrl= res.userInfo.avatarUrl;

        this.setData({
          userInfo: res.userInfo,
          avatarUrl2:res.userInfo.avatarUrl,
          hasUserInfo: true
        })
        app.globalData.hasUserInfo = true;
        tmp = res.userInfo.avatarUrl;
        console.log("see tmp "+tmp+"  "+nickName+"  "+avatarUrl);
        
        
    db.collection('users').where({
      avatarUrl:avatarUrl
    })
    .get({
      success: res => {
        console.log(this.data.avatarUrl2)
        console.log("success find _id")
        console.log(res);
        if(res.data.length == 0)
        {
          console.log("没有");
          console.log(nickName);
          console.log(avatarUrl);
          db.collection("users").add({
            data:{
              nickName:nickName,
              avatarUrl:avatarUrl,
              name:'',
              sex:'',
              studynum:'',
              sclass:'',
              telephone:'',
              reserve:[],//预约记录
              medicinebuy:[],//药品购买记录
              recommend:[]//诊断结果
            }
          }).then(res=>{
            console.log(res);
            console.log("云数据库插入成功")
            db.collection('users').where({
              _id:res._id
            })
            .get({

              success:res =>{
                app.globalData.userInfo= res.data[0];

              }
            })




          })

        }

        else{
          var tmp = res.data[0];
          console.log(tmp);
          app.globalData.userInfo = tmp;
          console.log(app.globalData.userInfo);

        }
      },
      fail:rea => {
        console.log("find fail");
      }
        })




    
      // console.log("查看全局变脸userinfo");
      //  console.log(app.globalData.userInfo);
      }

    })
    console.log(tmp);
    db.collection('users').where({
      _id:app.globalData.userInfo._id
    })
    .get({
      success: function(res) {
        console.log("see the appjs");
        console.log(res.data);
        //查找以后存入全局变量
        app.globalData.user = res.data;
      }
    })
    
      


  
/*
    db.collection('users').where({
      _id:_.eq('fa24ce1a619d672908979e2765f318bf')
    }).get({
      success: function(res) {
        // res.data 包含该记录的数据
        console("该用户已存在");
        console.log(res);
      //  app.globalData.userInfo = e;
      //  console.log(app.globalData.userInfo);
      },
    
      fail:function(e){
        console.log("元素不存在，需要插入");
        console.log(e);
        db.collection("users").add({
          data:{
            nickName:res.userInfo.nickName,
            avatarUrl:res.userInfo.avatarUrl,
            name:'',
            sex:'',
            studynum:'',
            sclass:'',
            telephone:'',
            reserve:{},//预约记录
            medicinebuy:{},//药品购买记录
            recommend:[]//诊断结果
          }
        }).then(res=>{
          app.globalData.userInfo = e;
        console.log(app.globalData.userInfo);
          console.log("云数据库插入成功")
        })



      }
    })*/
   
  },

  see_recommend()
  {
    if(app.globalData.hasUserInfo == false)
    {
      wx.showToast({
        icon:'none',
        duration:1000,
        title: '请先登陆',
      })

    } 
    else
    {
      wx.navigateTo({
        url: '../see_recommend/see_recommend',
      })

    }
  },
  
  see_reserve()
  {
    if(app.globalData.hasUserInfo == false)
    {
      wx.showToast({
        duration:1000,
        icon:'none',
        title: '请先登陆',
      })

    } 
    else
    {
      wx.navigateTo({
        url: '../see_reserve/see_reserve',
      })

    }
  },
  
  see_medicinebuy()
  {
    if(app.globalData.hasUserInfo == false)
    {
      wx.showToast({
        duration:1000,
        icon:'none',
        title: '请先登陆',
      })

    } 
    else
    {
      wx.navigateTo({
        url: '../see_medicinebuy/see_medicinebuy',
      })

    }
  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("2 onready funciotn");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("3. onshow function");

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