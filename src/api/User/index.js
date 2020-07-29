import axios from '@/axios'
export function getUserInfoData(data) {
  return axios({
    url: '/UserController/getUserInfoData',
    method: 'get',
    data: data
  })
}
