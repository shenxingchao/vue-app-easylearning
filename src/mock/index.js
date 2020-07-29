const Mock = require('mockjs')
/**
 * 热门课程
 */
let hot_course = Mock.mock({
  'data|4': [
    {
      image: '@dataImage("280x170","280x170占位图")', //生成随机图片，大小/背景色/字体颜色/文字信息
      'price|0-1000': 20, //生成1-1000的随机数
      title: '@ctitle(6,14)', //生成中文标题
      teacher: '@ctitle(2,3)',
      teacher_image: '@dataImage("50x50","头像")',
      'buyer_images|3': ['@dataImage("50x50","头像")'],
      'buy_count|10-2000': 50
    }
  ]
})
Mock.mock(/dataController\/getHotCourseLsts/, 'get', () => {
  //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  return hot_course
})
/**
 * 最新课程
 */
let new_course = Mock.mock({
  'data|4': [
    {
      image: '@dataImage("280x170","280x170占位图")', //生成随机图片，大小/背景色/字体颜色/文字信息
      'price|0-1000': 20, //生成1-1000的随机数
      title: '@ctitle(6,14)', //生成中文标题
      teacher: '@ctitle(2,3)',
      teacher_image: '@dataImage("50x50","头像")',
      'buyer_images|3': ['@dataImage("50x50","头像")'],
      'buy_count|10-2000': 50
    }
  ]
})
Mock.mock(/dataController\/getNewCourseLsts/, 'get', () => {
  //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  return new_course
})
/**
 * 推荐文章
 */
let recommend_article = Mock.mock({
  'data|4': [
    {
      image: '@dataImage("612x216","612x216文章缩略图")', //生成随机图片，大小/背景色/字体颜色/文字信息
      title: '@ctitle(4,14)', //生成中文标题
      author: '@ctitle(2,3)',
      author_image: '@dataImage("50x50","头像")',
      'star_count|10-2000': 50,
      'heart_count|1-100': 10,
      'comment_count|1-20': 5
    }
  ]
})
Mock.mock(/dataController\/getRecommendArticleLsts/, 'get', () => {
  //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  return recommend_article
})

/**
 * 专栏推荐文章
 */
let column_recommend_article = Mock.mock({
  'data|4': [
    {
      image: '@dataImage("604x306","604x306文章缩略图")', //生成随机图片，大小/背景色/字体颜色/文字信息
      title: '@ctitle(4,14)', //生成中文标题
      author: '@ctitle(2,4)',
      author_image: '@dataImage("50x50","头像")',
      cat: '@ctitle(2)-@ctitle(2)',
      'recommend_count|1-100': 10,
      'comment_count|1-20': 5,
      'add_time|0-60': 10
    }
  ]
})
Mock.mock(/ColumnController\/getRecommendArticleLstsForColumn/, 'get', () => {
  //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  return column_recommend_article
})

/**
 * 专栏推荐文章
 */
let user_info = Mock.mock({
  data: {
    image: '@dataImage("80x80","头像")',
    nickname: '@ctitle(2,4)',
    signname: '@ctitle(4,14)' //生成中文标题
  }
})
Mock.mock(/UserController\/getUserInfoData/, 'get', () => {
  //三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  return user_info
})
//示例
// 'data|100': [
//   //生成100条数据 数组
//   {
//     'shopId|+1': 1, //生成商品id，自增1
//     shopMsg: '@ctitle(10)', //生成商品信息，长度为10个汉字
//     shopName: '@csentence', //生成商品名 ， 都是中国人的名字
//     shopTel: /^1(5|3|7|8)[0-9]{9}$/, //生成随机电话号
//     shopAddress: '@county(true)', //随机生成地址
//     'shopStar|1-5': '', //随机生成1-5个字符串
//     'salesVolume|30-1000': 30, //随机生成商品价格 在30-1000之间
//     shopLogo: '@Image("100x40","#c33", "#ffffff","小北鼻")', //生成随机图片，大小/背景色/字体颜色/文字信息
//     'food|7': [
//       //每个商品中再随机生成七个food
//       {
//         foodName: '@cname', //food的名字
//         foodPic: '@Image("100x40","#c33", "#ffffff","小可爱")', //生成随机图片，大小/背景色/字体颜色/文字信息
//         'foodPrice|1-100': 20, //生成1-100的随机数
//         'aname|14': [
//           {
//             aname: '@cname',
//             'aprice|30-60': 20
//           }
//         ]
//       }
//     ]
//   }
// ]
