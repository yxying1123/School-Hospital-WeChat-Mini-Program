// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:'testcloud-7g7sp2mwf461dbce'
})

// 云函数入口函数
exports.main = async (event, context) => {
    return cloud.database().collection("medicine_detail").get();
}