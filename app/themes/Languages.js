import { language } from './index'
import { app } from './index'

const CN = {

  username: '挂着铃铛的兔',
  unserAvator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517485328487&di=3dd3f5b5741bc419dc9544545429342c&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-07%2F111018735.jpg',


  tab1: '首页',
  tab2: '文章',
  tab3: '笔记',
  tab4: '我的',

  lefttitle: '回到首页',
  leftitem1: '阅读资料',
  leftitem2: '推荐阅读',
  leftitem3: '详细案例',
  leftitem4: '自我检测',

  atitle: '精彩文章',

}

const EN = {

}

const i18n = {
  cn: CN,
  en: EN,
}

export const t = function (key) {
  let value = i18n[app.i18n][key]
  return value
}