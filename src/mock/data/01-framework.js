import {
  requireImg
} from '../utils'

export default [{
  url: 'https://cn.vuejs.org/',
  imgSrc: requireImg('vue.png'),
  keyWords: ['vue'],
  label: 'Vue'
}, {
  url: 'https://doc.react-china.org/',
  imgSrc: requireImg('react.png'),
  keyWords: ['react'],
  label: 'React'
}, {
  url: 'https://angular.cn/',
  imgSrc: requireImg('angular.png'),
  keyWords: ['angular'],
  label: 'Angular'
}, {
  url: 'https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html',
  imgSrc: requireImg('xcx.png'),
  keyWords: ['微信小程序', 'weixin', 'xiaochengxu'],
  label: '微信小程序'
}, {
  url: 'https://electronjs.org/',
  imgSrc: requireImg('electron.png'),
  keyWords: ['electron'],
  label: 'Electron'
}]