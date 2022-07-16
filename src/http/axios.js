import axios from 'axios'
import qs from 'qs'

//1.配置基础路由
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL

// 3.添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    var res = response.data;
    return res;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//4.封装方法
/**
  get方式请求
*/
export function get(url, params) {
    return axios({
        method: 'get',
        url,
        params, // get 请求时带的参数
        timeout: 10000,
    })
}

/**
 * 提交post请求 发送的数据为查询字符串，key=val&key=val
 */
export function post(url, data) {
    return axios({
        method: "post",
        url,
        data: qs.stringify(data),
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

/**
 * 提交post请求 ,查询字符串，对象中嵌套数组的格式
 */
export function post_obj_array(url, data) {
    return axios({
        method: "post",
        url,
        data: qs.stringify(data, { allowDots: true }),
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

/**
 * 提交post请求 发送的数据为查询字符串，当参数为数组的时候适用该方法
 * ids=1&ids=2
 */
export function post_array(url, data) {
    return axios({
        method: "post",
        url,
        data: qs.stringify(data, { arrayFormat: "repeat" }),
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}
/**
 * 提交post请求 发送的数据为json字符串
 */
export function post_json(url, data) {
    return axios({
        method: "post",
        url,
        data,
        timeout: 10000
    })
}

export default axios