// pages/reserve/reserve.js

const app = getApp()
const db = wx.cloud.database()
const _ = db.command
var util = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:'',
        studynum:'',
        sclass:'',
        telephone:'',
        symptom:'',
        man_url:true,
        woman_url:false,
        time:'',
        reserve_time:''

    },
    onChang()
    {
        if(this.data.man_url == true)
        {
            this.setData({
                man_url:false,
                woman_url:true
            })
        }
        else
        {
            this.setData({
                man_url:true,
                woman_url:false
            })

        }
    },
    input(){
        //当点击确认时，才获取记录时间
        var datetime = util.formatTime(new Date());
        var time = ""+datetime;
        console.log(time);
        console.log("see input");
        console.log(this.data.name);
        console.log(this.data.studynum);
        console.log(this.data.sclass);
        console.log(this.data.telephone);
        console.log(this.data.symptom);
        //全是reserve对象里面的
        
       
        app.globalData.reserve.name=this.data.name;
        app.globalData.reserve.studynum=this.data.studynum;
        app.globalData.reserve.sclass=this.data.sclass;
        app.globalData.reserve.telephone=this.data.telephone;
        app.globalData.reserve.symptom=this.data.symptom;
        app.globalData.reserve.time=time;
        app.globalData.reserve.reserve_time=this.data.reserve_time;
        if(this.data.man_url == true)
        {
            app.globalData.reserve.sex = 'man';

        }
        else{
            app.globalData.reserve.sex = 'woman';
        }
        console.log( app.globalData.reserve);
        db.collection('users').where({
            _id:app.globalData.userInfo._id
        })
        .get({
            success:res => {
                console.log(res);
                if(res.data.length == 1)
                {

                    db.collection('users').doc(app.globalData.userInfo._id)
                    .update({
                        data:{
                            reserve: _.push({url:app.globalData.reserve})
                        }
                    }).then(e=>{
                        console.log("添加成功");
                        console.log(e);
                    })
                    
                }
                else{

                }


            },
            
        })

        setTimeout(() => {
            wx.showToast({
              title: '预约成功',
              icon: "success",
            });
            setTimeout(() => {
              wx.hideToast();
            }, 1500)
          }, 0);
        wx.switchTab({
          url: '../home/home',
        })
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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