import axios from "axios"
import config from "@/config"
 const baseUrl = process.env.NODE_ENV === 'development' ? config.
 baseUrl.dev : config.baseUrl.pro

 class HttpRequest{
    constructor(baseUrl){
        this.baseUrl = baseUrl;  //掉后端接口的实惠有一些公共参数，可以题取出来  也就是baseurl baseurl引自于config index.js
        this.queue ={}
    }
    //请求头的一些配置
    getInsideConfig(){
        const config = {
            baseUrl: this.baseUrl,
            header:{

            }
        }
        return config 
    }
    interceptors(instance,url){
        instance.interceptors.request.use((config) => {
            //处理config
            console.log("拦截和处理请求")
            //添加一些token，
            //这里模拟在请求的时候加上msg:"helloworld"
            config.data={
                msg:"helloworld"
            }
            return config
        })
        instance.interceptors.request.use((res) => {
            console.log("处理响应")
            //处理一些公共错误
            return res.data
            },(error) => {
                console.log(error)
                return{
                    error:"页面出错了"
                
            }
           
        })
    }

    //options是子调用接口的时候传过来的一些参数
    request(options){
        const instance = axios.create()
        options={...(this.getInsideConfig()),...options}  //后面的可以覆盖前面的参数
        this.interceptors(instance,options.url)
        return instance(option)
    }
 }

 export default new HttpRequest(baseUrl)

