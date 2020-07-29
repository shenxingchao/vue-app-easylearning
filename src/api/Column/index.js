import axios from '@/axios'
export function getRecommendArticleLstsForColumn(data) {
  return axios({
    url: '/ColumnController/getRecommendArticleLstsForColumn',
    method: 'get',
    data: data
  })
}
