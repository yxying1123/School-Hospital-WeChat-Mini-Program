// pages/goodDetail/goodDetail.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      //商品详情
      buynumber:[],
      ordernumber:[],
      shopping_num:0,
        good:[],
        //商品在总药品的编号
        index:0,
        isNotAdd: true,
        isShowPoint: false,
        isAddShoppingCart: false,
        chooseSize: false,
        animationData: {},
        maskAnimationData:{},
        goodNum: 1,

    },
    onClickIcon() {
        Toast('点击图标');
      },
    
      onClickButton() {
        Toast('点击按钮');
      },


      
  tapShoppingCart: function () {
    wx.switchTab({
      url: '/pages/shoppingCart/shoppingCart',
    })
  },
  tapGoBuy: function () {
    this.tapCart();
    this.setData({
      isAddShoppingCart: false,
    })
  },

  numReducet: function () {
    var that = this;
    var index  = this.data.good.index;
    var goodNum = this.data.goodNum;
    if (goodNum == 1) {
      that.setData({
        isNotAdd: true
      })
    }
    else {
      goodNum = goodNum-1;
      that.setData({
        isNotAdd: false,
        goodNum: goodNum 
      })
    }
    console.log("现在查看减法"+goodNum)
  },

  numAdd: function () {
  var that = this;
    var index = this.data.good.index;
    var tmp_buynumber;
    var goodNum = this.data.goodNum;
    goodNum = goodNum + 1;
    that.setData({
      goodNum: goodNum 
    })
    console.log("现在检验加法"+goodNum);
   
  },

  tapSubmit: function (e) {
    if(app.globalData.hasUserInfo == false)
    {
      wx.switchTab({
        url: '../user/user',
      })
      wx.showToast({
        icon:'none',
        duration:1000,
        title: '请先登陆',
      })

    } 
    else{


      console.log(app.globalData.buynumber);
      console.log(app.globalData.ordernumber);
     var index = this.data.good.index;
      var  goodNum= this.data.goodNum;
      if (this.data.isAddShoppingCart == true) {
        this.data.buynumber[index] = goodNum;
        app.globalData.buynumber[index] =  goodNum;
        wx.showToast({
          title: '成功添加到购物车',
        })
      }
      else{
        wx.navigateTo({
          url: '../createOrder/createOrder',
        })
        this.data.ordernumber[index] = goodNum;
        app.globalData.ordernumber[index] =  goodNum;
  
      }
      console.log(app.globalData.buynumber);
      console.log(app.globalData.ordernumber);
  

    }





    
    
    
    
    /*
    







    var that = this;
    var n;
    
    console.log("现在检验提交");
    console.log(e);
    //向物品添加buynumber属性
    var goodNum = this.data.goodNum;
    var tmp=this.data.good;
    tmp['buynumber']=goodNum;
    console.log(tmp);
    
    var index = this.data.good.index;
    that.hideModal();

    //在提交的时候将物品加入购物车
   // var shopping_num = app.globalData.shopping_num;
    
  //  var global_shoppingcar = app.globalData.shoppingcar;
  //  var global_shoppingcar_num   = global_shoppingcar.length ;
 
 // console.log("全局变量shoppingcar");
 //   global_shoppingcar[this.data.index]=tmp;
  //  global_shoppingcar_num++;

    if (that.data.isAddShoppingCart == true) {
      wx.showToast({
        title: '成功添加到购物车',
      })
      console.log("this is shopping car");
      var global_shoppingcar = app.globalData.shoppingcar;
      var global_shoppingcar_num   = global_shoppingcar.length ;
      global_shoppingcar[index] = tmp;
      app.globalData.shoppingcar =  global_shoppingcar;
      app.globalData.shopping_num = global_shoppingcar_num;
      console.log("查看这个app.globalData.shoppingcar，app.globalData.shopping_num");
      console.log(app.globalData.shoppingcar);
   //   console.log(app.globalData.shopping_num);
      for(var i = 0 ; i < global_shoppingcar.length; i++)
        {
          console.log("这个进入判断第"+i);
          if(global_shoppingcar[i] !=null)
          {
            console.log(i);
          }
        }
        

   /*   shopping_num = shopping_num+1;
      tmpsnum = shopping_num-1;
      console.log(tmp);
      //向对象中增加属性
      
      console.log(tmp);*/
      //将购买的东西存入全局变量购物车
      //错误点是shoppingcar的类型需要修改
      //{}数组类型就push,但是只能差一个药
      //【】对象就要指明插入的【‘’】要不然就只会一直替换
    //  app.globalData.shoppingcar[shopping_num] = tmp;
     // console.log("app shoppincar");
     // console.log(app.globalData.shoppingcar);*/
 /* }
    else {
      console.log("this is  to order");
      var global_order = app.globalData.order;
      var global_order_num   = global_order.length ;
      global_order[index] = tmp;
      app.globalData.order =  global_order;
      app.globalData.order_num = global_order_num;
      console.log("查看这个app.globalData.order，app.globalData.order");
      console.log(app.globalData.order);
         wx.navigateTo({
        url: '../createOrder/createOrder',
      })
      





    /*  console.log(tmp);
      //向对象中增加属性
    tmp['buynumber']=goodNum;
      console.log(tmp);
      //将购买的东西存入全局变量购物车
      app.globalData.shoppingcar['detail']=tmp;
      app.globalData.order['detail'] = tmp;
      console.log("app shoppincar");
      console.log(app.globalData.shoppingcar);
      //确认订单
      wx.navigateTo({
        url: '../createOrder/createOrder',
      })
    }*/
  },


  tapCart: function (e) {
    this.setData({
      isAddShoppingCart: true,
    })
    var maskAnimation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-in'
    })
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease-in'
    })
    //起始状态
    maskAnimation.opacity(0).step();
    animation.translateY(420).step()
    this.setData({
      maskAnimationData: maskAnimation.export(),
      animationData: animation.export(),
      chooseSize: true
    });
    setTimeout(() => {
      //终止状态
      maskAnimation.opacity(1).step();
      animation.translateY(0).step()
      this.setData({
        maskAnimationData: maskAnimation.export(),
        animationData: animation.export(),
      })
    }, 10);
  },

  hideModal: function (e) {
    var maskAnimation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-in'
    })
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-in'
    })
    //起始状态
    maskAnimation.opacity(1).step();
    animation.translateY(0).step()
    this.setData({
      maskAnimationData: maskAnimation.export(),
      animationData: animation.export(),
    });
    setTimeout(() => {
      //终止状态
      maskAnimation.opacity(0).step();
      animation.translateY(400).step()
      this.setData({
        maskAnimationData: maskAnimation.export(),
        animationData: animation.export(),
      })
    }, 200);
    setTimeout(() => {
      //终止状态
      this.setData({
        chooseSize: false,
        goodNum: 1
      })
    }, 500);
  },

  
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        console.log("see gooddetail onload function");
     /*   var tmp = app.globalData.gooddetailnumber;
        var num = app.globalData. medicine_four[tmp].buynumber;
        var price = app.globalData. medicine_four[tmp].price;
        var txt = app.globalData. medicine_four[tmp].text;
        var main_url= app.globalData. medicine_four[tmp].main_url;
        var url1=app.globalData. medicine_four[tmp].more_url1;
        var url2=app.globalData. medicine_four[tmp].more_url2;
        var url3=app.globalData. medicine_four[tmp].more_url3;
        console.log("跳转到了详情页面");
        console.log(tmp);
        console.log(txt);*/
        /**
         * 
         * main_url:'/pages/medicine_pic/huoxiang1.jpg',
        more_url1:'/pages/medicine_pic/huoxiang2.jpg',
        more_url2:'/pages/medicine_pic/huoxiang3.jpg',
        more_url3
         * 
         *//*
        this.setData({
          goodNum:num,
          medicine :tmp,
          medicine_text :txt,
          medicine_mainurl:main_url,
          medicine_moreurl1:url1,
          medicine_moreurl2:url2,
          medicine_moreurl3:url3,
          medicine_price:price
        })*/
        
       
        wx.setNavigationBarColor({//设置导航栏颜色
          frontColor: '#000000',//注意frontColor的值只能为000000或者111111
          backgroundColor: "#fff",
        });
        wx.setNavigationBarTitle({
          title: '商品详情',
        })
      },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      //获取当前的goooddetailnumber,并赋值给index,找到good
        console.log("see gooddetail onready funtion");
        var index = app.globalData.gooddetailnumber;
        console.log("打印传入的药品index"+index);
        var good = app.globalData.medicine[index];
        var shopping_num = app.globalData.shopping_num;



        this.setData({
          good:good,
          index:index,
          shopping_num:shopping_num
        })
        console.log("see good");
        console.log(this.data.good);
        //计算购物车的数量

        var buynumber = app.globalData.buynumber;
        var ordernumber = app.globalData.ordernumber;
        console.log(buynumber+ordernumber);
        


    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("see gooddetail onshow funtion");
        this.setData({
          isAddShoppingCart:false
        })

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