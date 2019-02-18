import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-site.firebaseio.com/'
})

export default instance