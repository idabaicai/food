import axios from 'axios'

const baseURL = 'https://www.fastmock.site/mock/3f5566f50a1f5ad65570d3d161b2f5f5/food'
const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
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
  post
}
