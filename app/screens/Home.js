import React, { Component } from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import { NavTitle, Card, Footer } from '../components/Basic'

import { Colors, Metrics } from '../themes'

import Swiper from 'react-native-swiper'

import Images from '../themes/Images'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperShow: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swiperShow: true
      })
    }, 0)
  }

  render() {
    return (
      <View style={styles.container}>
        {/*标题栏组件*/}
        <NavTitle
          c={Colors.fontcolorone}
          hideBack={'hide'}
          navigate={this.props.navigation}
          backColor={'rgba(0,0,0,0)'}
          t={'首页推荐'} />

        <ScrollView style={{ height: Metrics.CH - 46 }}>
          {/*轮播图组件*/}
          <View style={{ height: 220 }}>
            {
              this.state.swiperShow ?
                <Swiper
                  showsPagination={true}
                  activeDotColor={Colors.fontcolorone}
                  dotColor={Colors.tabcolor}
                  autoplay={true}
                  autoplayTimeout={3}
                  loop={true}
                  showsButtons={false}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      onPress={() => {
                        {/*跳转路由*/ }
                        this.props.navigation.navigate('SwiperDetails', { type: 1 })
                      }}>
                      <Image
                        resizeMode='cover'
                        style={styles.imgstyle}
                        source={Images.swiperone}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('SwiperDetails', { type: 2 })
                      }}>
                      <Image
                        resizeMode='cover'
                        style={styles.imgstyle}
                        source={Images.swipertwo}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('SwiperDetails', { type: 3 })
                      }}>
                      <Image
                        resizeMode='cover'
                        style={styles.imgstyle}
                        source={Images.swiperthree}
                      />
                    </TouchableOpacity>
                  </View>
                </Swiper>
                : null
            }
          </View>
          {/*卡片*/}
          <View
            style={{
              height: 40,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 20,
                backgroundColor: Colors.fontcolorone,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}
              onPress={() => {
                this.setState({
                  num: 1
                })
              }}>
              <Text style={{ color: 'white' }}>卡片格式一</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 20,
                backgroundColor: Colors.fontcolorone,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4
              }}
              onPress={() => {
                this.setState({
                  num: 2
                })
              }}>
              <Text style={{ color: 'white' }}>卡片格式二</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 20,
                backgroundColor: Colors.fontcolorone,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4
              }}
              onPress={() => {
                this.setState({
                  num: 3
                })
              }}>
              <Text style={{ color: 'white' }}>卡片格式三</Text>
            </TouchableOpacity>
          </View>
          {
            [1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {

                  }}>
                  <Card
                    radius={12}  //图片圆角设置
                    order={this.state.num === 1 ? 1 : this.state.num === 2 ? 2 : index}  //布局设置,0为左侧40%右侧60%，1为左侧60%右侧40%
                    tsize={14}    //图片下方字体大小
                    tcolor={Colors.fontcolorone} //图片下方字体颜色
                    mtop={10} //card卡片的margintop值
                    title={'花卉百科知识你了解多少？'} //文章／话题标题
                    titlesize={16}//文章／话题标题 字体大小
                    titlecolor={Colors.fontcolorone}//文章／话题标题 字体颜色
                    content={'花卉知识可谓繁多，每个人都有各自的理解和心得；交流中可以使我们掌握更多的花卉知识，通过彼此的交流和理解掌握更多的花卉知识，有助于我们更好的认识！现在我们可以通过大家的交流来发表一下自己的见解。'} //文章／话题内容
                    contentsize={12}//文章／话题  内容字体大小
                    contentcolor={'rgb(0,163,238)'}//文章／话题  内容字体颜色
                    cornerone={'30人查看'} //文章／话题  角标内容
                    cornertwo={'8人评论'}//文章／话题  角标内容
                    cornercolor={Colors.fontcolorone}//文章／话题  角标颜色
                    uri={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520399902548&di=f08fa14a668bcbcb6e495b35b72a7415&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd009b3de9c82d1581115ac8d8b0a19d8bc3e4273.jpg'}//图片路径
                    t={'花好月圆'}//文章／话题 作者
                  />
                </TouchableOpacity>
              )
            })
          }
          {/*footer*/}
          <Footer
            mt={10} // marginTop的值
            bg={'white'} //背景色设置
            lc={Colors.fontcolorone} //左右两侧线的颜色设置
            lw={'30%'} //左右两侧线的百分比设置
            tw={'40%'} //中间字体所占位置的百分比设置，注意和lw的关系为 lw*2+tw = 100%
            tc={Colors.fontcolorone} //中间字体颜色设置
            t={'小主已经到底啦'} //中间文字设置
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgstyle: {
    width: '100%',
    height: '100%'
  }
})