import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import { NavTitle, ListExhibition, Footer } from '../components/Basic'

import { t, Colors, Metrics } from '../themes'

const ListItem = [
  {
    title: 'ARTICAL',
    subtitle: 'There is the most complete article here',
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520405257326&di=40bcbeff5dbf6fe693c03b7ccb30ba27&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D2d3e5027b2389b502cf2e812ec4d80b1%2Fdc54564e9258d109a831e38bda58ccbf6c814d3c.jpg',
  },
  {
    title: 'LITERATURE',
    subtitle: 'Appreciation of literary books',
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520417070783&di=29a2f379bc6fae6445849387b053cc96&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F1ad5ad6eddc451dad6c84fccbdfd5266d01632de.jpg',
  },
  {
    title: 'PAINTING',
    subtitle: 'Excavating the talent of painting',
    uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2327481987,2650868747&fm=27&gp=0.jpg',
  },
  {
    title: 'CALLIGRAPHY',
    subtitle: 'Inherit Chinese Calligraphy',
    uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3665207773,3077751956&fm=27&gp=0.jpg',
  },
  {
    title: 'PROSE',
    subtitle: 'Relax and be close to nature',
    uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=397827168,3334504186&fm=27&gp=0.jpg',
  },
  {
    title: 'POETRY',
    subtitle: 'Revisit the creation of ancient literati',
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520417446776&di=a4e2f91baf2879a10f88986f0287e74c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01842d58eb2d2aa8012049ef4a1736.jpg',
  },
]

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavTitle
          c={Colors.fontcolorone}
          hideBack={'hide'}
          navigate={this.props.navigation}
          backColor={'rgba(0,0,0,0)'}
          t={'热门文章'} />
        <ScrollView style={{ height: Metrics - 46 }}>
          {/*列表样式*/}
          <View
            style={{
              height: 40,
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 10,
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
              <Text style={{ color: 'white' }}>列表格式一</Text>
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
              <Text style={{ color: 'white' }}>列表格式二</Text>
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
              <Text style={{ color: 'white' }}>列表格式三</Text>
            </TouchableOpacity>
          </View>
          {/*列表展示*/}
          <View style={{ flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>
            {
              ListItem.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                    }}>
                    <ListExhibition
                      category={this.state.num} //列表类型
                      title={item.title} //主题
                      mt={10}  //marginTop
                      num={index} //控制顺序  category=1 使用
                      c={Colors.fontcolorone} //标题颜色
                      subtitle={item.subtitle} //副标题
                      uri={item.uri} //展示图片
                    />
                  </TouchableOpacity>
                )
              })
            }
          </View>
          <Footer
            lc={Colors.fontcolorone}
            tc={Colors.fontcolorone}
            mt={10}
            t={'小主人到底啦'} />
        </ScrollView>
      </View>
    );
  }
}

export default Article;

const styles = StyleSheet.create({
  container: {

  }
})