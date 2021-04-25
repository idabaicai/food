import axios from 'axios'

const baseURL = 'http://114.55.140.167:8091'
// const baseURL = 'https://www.fastmock.site/mock/3f5566f50a1f5ad65570d3d161b2f5f5/food'
const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
      baseURL,
      'Content-type': 'application/json'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
const get = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      baseURL,
      'Content-type': 'application/json'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
export default {
  post,
  get
}
