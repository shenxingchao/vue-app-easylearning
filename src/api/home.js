import axios from '@/axios'
export function getHotCourseLsts(data) {
  return axios({
    url: '/dataController/getHotCourseLsts',
    method: 'get',
    data: data
  })
}
export function getNewCourseLsts(data) {
  return axios({
    url: '/dataController/getNewCourseLsts',
    method: 'get',
    data: data
  })
}
export function getRecommendArticleLsts(data) {
  return axios({
    url: '/dataController/getRecommendArticleLsts',
    method: 'get',
    data: data
  })
}
