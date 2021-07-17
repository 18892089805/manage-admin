import Mock, { mock } from 'mockjs'
import homeApi from '@/api/mockserverData/home'
 mock.setup({
     setTimeout:1000
 })
 Mock.mock('/api/menu',menu)
 Mock.mock('/api/user',{
     username:'@cname',
     age:18,
     genner:'n女',
     type:'淑女'
 })
 Mock.mock('/api/home/getData',homeApi,getStatisticalData)
 //还可以定义正则
