import axios from 'axios'

export function request(config) {
  //创建一个axios实例给公用  以后就算换第三方依赖也在这里
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //返回的组件实力本身就是一个promise对象
  return instance(config)
}