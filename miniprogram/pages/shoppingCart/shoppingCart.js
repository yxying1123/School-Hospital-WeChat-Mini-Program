// pages/shoppingCart/shoppingCart.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:[],
        goodstmp:[],
        id_in_selectlist:0,
        isAllSelect: false,
        total: 0,
        selectList:[],


 /*   medicine:0,//药品序号
    goodNum:0,//药品的购买个数
    medicine_number:0,
    now_number:0,
      isAllSelect: false,
      total: 0,
      selectList:[],
      goods: [],*/
    },
    toOrder: function () {
        if(app.globalData.hasUserInfo == false)
        {
          
          wx.switchTab({
            url: '../user/user',
          })
          wx.showToast({
            icon:'none',
            duration:2000,
            title: '请先登陆',
          })
    
        } else{
            var tmp = [];
            var goods = this.data.goods;
            var i = 0; 
            var len = goods.length;
            var selectlist = this.data.selectList;
            console.log("toorder funtion");
            console.log(this.data.goods);
            console.log(goods);
            console.log(selectlist);
            var j = 0;
           
            for(;i < len; i++)
            {
                if(selectlist[i] == 1)
                {
                    console.log(i);
                    var index = goods[i].index;
                    console.log(index);
                    tmp[j] = goods[i];
                    app.globalData.ordernumber[index] = goods[i].buynumber;
                    app.globalData.buynumber[index] = 0;
                }
            }
            console.log(app.globalData.ordernumber);
            console.log(app.globalData.buynumber);
            wx.navigateTo({
                url: '/pages/createOrder/createOrder',
              })
    






        }
        //赋值给全局变量order

   

      /*  var tmp = [];
        var selectList = this.data.selectList;
        console.log(selectList);
      
        //赋值给全局变量shoppingcar
        var goods = this.data.goods;
        console.log("to_order function");
        
        console.log(goods);
        var i = 0;
        var len = goods.length;
        for(; i < len; i++)
        {
            //当前物品被选中
            
            if(selectList[i] == 1)
            {
                //即将加入订单中
                tmp.push(goods[i]);
                //从购物车中移除
                goods.splice(i,1);
                console.log("to order操作");
                console.log(tmp);
                console.log(goods);
                var m = this.data.goods[i].index;
                console.log("index index inse");
                console.log(m);
                app.globalData.buynumber[m] = 0;
                 app.globalData.ordernumber[m] = this.data.goods.buynumber;

            }
            else{
                console.log("保留该物品");
            }
            
        }


        app.globalData.order = tmp;
        app.globalData.shoppingcar = goods;
        this.setData({
            goods:goods
        })
   
        console.log("查看当前数量Global");
        console.log(app.globalData.shoppingcar);
        console.log(app.globalData.order);


        wx.navigateTo({
            url: '/pages/createOrder/createOrder',
          })
     /* var orderlist = this.data.selectList;
      var list = [];
      var len = this.data.selectList.length;
      console.log("查看购物车"+orderlist);
      var i = 0;
      app.globalData.order = list;
      console.log("查看app的订单数"+app.globalData.order);
      for(i = 0; i < len; i++)
      {
        if(orderlist[i] == 1)
        {
          list.push(i);
        }
      }
      app.globalData.order = list;
      console.log("查看订单");
      console.log(list);

      wx.navigateTo({
        url: '/pages/createOrder/createOrder',
      })*/
    },
  
    tapSelect: function (e) {
    console.log(this.data.goods);
      var goods = this.data.goods;
      console.log("查看选择的东西,进入tapselect");
      console.log(e);
      var selectnum = 0;
      var num = 0;
      var price = 0;
      var id = e.currentTarget.dataset.id;
      var list = this.data.selectList;
    //  console.log(list);
  //    console.log("看总价值"+this.data.total);
  /*    var that = this;
      var now_number = this.data.now_number;
      var medicine_number = this.data.medicine_number;
*/


      var total = this.data.total;
      var nowisallselect = this.data.isAllSelect;
      console.log("这个全选选项");
      console.log(nowisallselect);
        var i = 0;
        var id_in_selectlist;
        var len = this.data.goods.length;
        //遍历购物测，统计勾选状态，和当前勾选物品的index
        for(i = 0; i < len; i++ )
        {
            if(id == goods[i].id)
            {
                id_in_selectlist = i;
                num = goods[i].buynumber;
                price = goods[i].price;
            }
            if(list[i] == 1)
            {
                //计算被选中的个数,来推断全选按钮自动亮起
                selectnum++;
            }
            

        }

        this.setData({
            index_in_selectlist:id_in_selectlist

        })
        if(list[id_in_selectlist] == 0)
        {
             //进行选中操作
            list[id_in_selectlist] = 1;
            total = total+num*price;
            selectnum++;
            if(selectnum == len)
            {
                this.setData({
                    isAllSelect:true,
                })

            }

        }
        else{
             //进行取消操作
          list[id_in_selectlist] = 0;
          selectnum--;
          total = total-num*price;
          this.setData({
            isAllSelect:false,
          
          })

        }
        this.setData({
            selectList: list,
            total : total
        })
        console.log("现在再看全选与当个的绑定");
      console.log(this.data.selectList);

    },
  
    numAdd: function (e) {
      /*  var that = this;
        var index  = e.currentTarget.dataset.index;
        var tmp_buynumber = app.globalData.medicine_four[index].buynumber;
       
        tmp_buynumber = tmp_buynumber+1;
        app.globalData.medicine_four[index].buynumber=tmp_buynumber;
        var str = "goods["+index+"].buynumber";
        that.setData({
            [str]:tmp_buynumber

        })*/
       
    },
  
    numReducet: function (e) {
    /*    var that = this;
        var index  = e.currentTarget.dataset.index;
        var tmp_buynumber = app.globalData.medicine_four[index].buynumber;
        console.log(index);
        console.log(tmp_buynumber);
       if(tmp_buynumber == 1)
       {
        wx.showModal({
            title: '提示',
            content: '确定要删除该药品吗？',
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定');
                tmp_buynumber = tmp_buynumber-1;
                app.globalData.medicine_four[index].buynumber=tmp_buynumber;
                var str = "goods["+index+"].buynumber";
                that.setData({
                    [str]:tmp_buynumber
                })

              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
       }
       else
       {
        tmp_buynumber = tmp_buynumber-1;
        app.globalData.medicine_four[index].buynumber=tmp_buynumber;
        var str = "goods["+index+"].buynumber";
        that.setData({
            [str]:tmp_buynumber

        })

       }
      /*  if (goodNum == 0) {
          that.setData({
            isNotAdd: true
          })
        }
        else {
          that.setData({
            isNotAdd: false,
            goodNum: goodNum - 1
          })
        }*/
        
  
    },
  
    tapAllSelect: function () {
      /*  var total = 0;
        var n = 0;
        var m = 1;
        var tmp = this.data.goods;
        var nlist=[];
        var that = this;
        var goodslen = tmp.length;
        console.log("查看数组的长度");
        console.log(goodslen);
        console.log(that.data.isAllSelect);
        var i = 0;
        
        this.data.selectList.splice(0);
        console.log("查看数组清空情况");
        console.log(this.data.selectList);
      if (that.data.isAllSelect) {
        this.setData({
            isAllSelect:false
        })
          for(i = 0; i< goodslen; i++)
          {
            nlist.push(n);
            
          }
          total = 0; 
      }
      else {
        this.setData({
            isAllSelect:true
        })
            for(i = 0; i< goodslen; i++)
            {
              nlist.push(m);
              total = total +  tmp[i].price*tmp[i].buynumber;
            }
            console.log("通过全选按钮得出的东西"+this.data.isAllSelect);
    }
    this.setData({
        total:total,
        selectList:nlist
    })
    console.log(nlist);
      console.log("查看全选数组样式");
      console.log(this.data.selectList);
      console.log(this.data.total);*/
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log("加载显示这个函数onload");

      //加载全部商品信息
    /*    var globaldata = app.globalData.shoppingcar;
        this.setData({
            goods:globaldata,
            total:0
        })
        console.log(this.data.goods);


      wx.setNavigationBarColor({//设置导航栏颜色
        frontColor: '#000000',//注意frontColor的值只能为000000或者111111
        backgroundColor: "#fff",
      });*/
      wx.setNavigationBarTitle({
        title: '购物车',
      });/*
      var list = this.data.selectList;
      for (var i = 0; i < this.data.goods.length; i++) {
        list.push(0);
      }
      console.log (list);
      //计算长度
      this.setData({
        selectList:list
      })*/
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      console.log("运行onready这个函数");
      /*
      console.log("加载显示这个函数onReady");
        var gloabdata = app.globalData.medicine_four;
        var len = gloabdata.length;
        var m = [];
        var i =0 ;
        
        for(i = 0;i < len;i++)
        {
            m.push(0);
        }
        this.setData({
            total:0,
            selectList:m

        })*/

  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */



    onShow: function () {
        console.log("运行onshow这个函数");
        console.log(app.globalData.buynumber);
        var tmp = []; 
        var len = app.globalData.medicine.length;
        var j = 0;
        for(var i = 0; i < app.globalData.medicine.length;i++)
        {
            if(app.globalData.buynumber[i] > 0)
            {
               tmp[j] = app.globalData.medicine[i];
               console.log(app.globalData.medicine[i]);
               tmp[j]['id'] = j;
               tmp[j]['buynumber'] = app.globalData.buynumber[i];
               j++;
            
               
            }
        }
       console.log("shoppingcart查看重构tmp");
      console.log(tmp);
        app.globalData.shoppingcar = tmp;
        console.log(app.globalData.shoppingcar)
        this.setData({
            goods:app.globalData.shoppingcar
        })
        console.log("当前pages data里面的goods");
        console.log(this.data.goods);
        var list = [];
        for (var i = 0; i < this.data.goods.length; i++) 
        {
            list.push(0);
        }
        this.setData({
            selectList:list,
            isAllSelect:false,
            total:0
        })






    },
    /*
    onShow: function () {
       
      console.log("加载显示这个函数onShow");
      var globaldata = app.globalData.shoppingcar;
      this.setData({
          goods:globaldata,
          total:0,
          isAllSelect: false
      })
      console.log(this.data.goods);
      var list = [];
      for (var i = 0; i < this.data.goods.length; i++) {
        
        for(var j = 0;  i < this.data.goods.length;  j++)
        {
            if(goods[i].length > 0 )
            {
                console.log("第"+j+"个元素"+goods[i]);
                tmp[j] = goods[i];
            }

        }
    }
    console.log(tmp);*/




  /*    var tmp = [];
      



      for (var i = 0; i < this.data.goods.length; i++) {
        
        for(var j = 0;  i < this.data.goods.length;  j++)
        {
            list.push(0);
            if(goods[i] != null)
            {
                tmp[j] = goods[i];
            }

        }
      }
      console.log("查看这里的重构函数"+tmp);
      console.log (list);*/
      //计算长度
   /*   this.setData({
        selectList:list,
      })
      console.log("onshow this data");
      var goods = this.data.goods
      console.log(this.data.goods+this.data.selectList+this.data.total+this.data.isAllSelect);

    /*  for (var i = 0; i < this.data.goods.length; i++) {
        goods[i]['id']  = i;
      }*/
      /*
      console.log("see gouwuce good add");
      console.log(goods);
      this.setData({
          goods:goods
      })
     */





       /* var i = 0;
       
        this.setData({
            goods:globaldata
        })
        var shoppingcar = [];
      
        var goods = this.data.goods;
        var k = 0;
        var list=[];
        var goodslen = this.data.goods.length;
        //计算长度
        for(i = 0; i <goodslen; i++)
        {
            list.push(0);
            if(goods[i].buynumber > 0)
            {
              k++;
              shoppingcar.push(i);
            }
            
        }
    this.setData({
        medicine_number:k,
        selectList:list,
        now_number:0,
        isAllSelect:false,
        total:0
    })
    app.globalData.shoppingcar = shoppingcar;
    console.log("这在检查显示药品个数"+this.data.medicine_number);*/
  /*  },*/
  
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