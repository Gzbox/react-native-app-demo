import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Text,
  View,
  Alert,
  Image,
  Platform,
  ListView,
  StatusBar,
  Navigator,
  TextInput,
  ScrollView,
  StyleSheet,
  PixelRatio,
  AppRegistry,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import { Metrics, Dpi, Colors, Images } from '../themes'

import Ionicons from 'react-native-vector-icons/Ionicons'

const one = 1 / PixelRatio.get()


class NavTitle extends Component {

  static propTypes = {
    bg: PropTypes.string,
    hideBack: PropTypes.string,
    backColor: PropTypes.string,
    c: PropTypes.string,
    t: PropTypes.string,
  }

  static defaultProps = {
    bg: 'white',
    backColor: 'black',
    c: 'black',
    t: 'title'
  }

  render() {
    let { t, c, bg, backColor, hideBack, navigate } = this.props
    return (
      <View
        style={{
          height: 46,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bg,
          flexDirection: 'row',
          position: 'relative',
        }
        }>
        <View
          style={{
            width: hideBack ? 0 : '15%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              navigate.goBack()
            }}>
            <Ionicons
              style={{ color: backColor }}
              name={'ios-arrow-back'}
              size={26}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: hideBack ? '100%' : '90%',
            justifyContent: 'center',
            alignItems: hideBack ? 'center' : 'flex-start'
          }}>
          <Text
            style={{
              fontSize: 18,
              color: c,
              marginLeft: hideBack ? 0 : '30%'
            }}>{t}</Text>
        </View>
      </View>
    )
  }
}

class Card extends Component {

  static propTypes = {
    h: PropTypes.number,
    mtop: PropTypes.number,
    mbottom: PropTypes.number,
    bg: PropTypes.string,
    radius: PropTypes.number,
    uri: PropTypes.string,
    tsize: PropTypes.number,
    tcolor: PropTypes.string,
    titlesize: PropTypes.number,
    titlecolor: PropTypes.string,
    contentsize: PropTypes.number,
    contentcolor: PropTypes.string,
    cornersize: PropTypes.number,
    cornercolor: PropTypes.string,
  }

  static defaultProps = {
    h: 160,
    mtop: 0,
    mbottom: 0,
    bg: 'white',
    radius: 8,
    uri: null,
    tsize: 12,
    tcolor: 'black',
    titlesize: 16,
    titlecolor: 'black',
    contentsize: 12,
    contentcolor: 'black',
    cornersize: 12,
    cornercolor: 'black',
  }

  render() {
    const { bg, h, order, t, uri, radius, tcolor, tsize, mtop, mbottom, p, title, content, cornerone, cornertwo, cornersize, cornercolor, titlesize, titlecolor, contentcolor, contentsize } = this.props
    return (
      <View
        style={{
          height: h,
          width: '100%',
          marginTop: mtop,
          marginBottom: mbottom,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bg
        }}>
        <View
          style={{
            width: order % 2 === 0 ? '40%' : '60%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {
            order % 2 === 0 ?
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View
                  style={{
                    width: '65%',
                    height: '65%',
                    borderRadius: radius,
                    overflow: 'hidden'
                  }}>
                  <Image
                    resizeMode='cover'
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: uri }} />
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: tsize,
                      color: tcolor
                    }}>
                    {t}
                  </Text>
                </View>
              </View>
              :
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontSize: titlesize, color: titlecolor }}>
                    {title}
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '60%',
                    paddingLeft: 6
                  }}>
                  <Text style={{ fontSize: contentsize, color: contentcolor, lineHeight: 18 }}>
                    {content.slice(0, 80)}......
                  </Text>
                </View>
                <View
                  style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
                  <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: cornersize, color: cornercolor }}>
                      {cornerone}
                    </Text>
                  </View>
                  <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: cornersize, color: cornercolor }}>
                      {cornertwo}
                    </Text>
                  </View>
                </View>
              </View>
          }
        </View>
        <View
          style={{
            width: order % 2 === 0 ? '60%' : '40%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: p ? p : 0,
          }}>
          {
            order % 2 === 0 ?
              <View>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontSize: titlesize, color: titlecolor }}>
                    {title}
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '60%',
                    paddingRight: 6
                  }}>
                  <Text style={{ fontSize: contentsize, color: contentcolor, lineHeight: 18 }}>
                    {content.slice(0, 80)}......
                  </Text>
                </View>
                <View
                  style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
                  <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: cornersize, color: cornercolor }}>
                      {cornerone}
                    </Text>
                  </View>
                  <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: cornersize, color: cornercolor }}>
                      {cornertwo}
                    </Text>
                  </View>
                </View>
              </View>
              :
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View
                  style={{
                    width: '65%',
                    height: '65%',
                    borderRadius: radius,
                    overflow: 'hidden'
                  }}>
                  <Image
                    resizeMode='cover'
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: uri }} />
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: tsize,
                      color: tcolor
                    }}>
                    {t}
                  </Text>
                </View>
              </View>
          }
        </View>
      </View>
    )
  }
}

class ListExhibition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: 1,
    }
  }

  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    c: PropTypes.string,
    uri: PropTypes.string,
    mt: PropTypes.number,
    num: PropTypes.number,
    category: PropTypes.number,
    h: PropTypes.number,
  }

  static defaultProps = {
    title: '主标题',
    subtitle: '副标题',
    c: 'white',
    mt: 0,
    num: 0,
    category: 1,
    h: 240,
  }

  render() {
    const { title, subtitle, c, h, uri, mt, num, category } = this.props
    return (
      <View style={{ height: h, width: category === 3 ? '50%' : '100%', flexDirection: 'row', position: 'relative', marginTop: mt ? mt : 0 }}>
        {
          category === 1 ?
            <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
              <View
                style={{
                  width: '90%',
                  height: '60%',
                  backgroundColor: 'rgba(0,0,0,0)',
                  position: 'absolute',
                  zIndex: 6,
                  top: '20%',
                  left: num % 2 === 0 ? '10%' : null,
                  right: num % 2 === 0 ? null : '10%',
                  justifyContent: 'center',
                  alignItems: num % 2 === 0 ? 'flex-start' : 'flex-end'
                }}>
                <Text style={{ fontSize: 46, color: c, fontWeight: '700' }}>{title}</Text>
                <Text style={{ fontSize: 16, color: c }}>{subtitle}</Text>
              </View>
              <View style={{ width: num % 2 === 0 ? '30%' : '70%', height: '100%' }}>
                {
                  num % 2 === 0 ?
                    <Image
                      resizeMode='cover'
                      style={{ width: '100%', height: '100%' }}
                      source={Images.jbone} />
                    :
                    <Image
                      resizeMode='cover'
                      style={{ width: '100%', height: '100%' }}
                      source={{ uri }} />
                }
              </View>
              <View style={{ width: num % 2 === 0 ? '70%' : '30%', height: '100%' }}>
                {
                  num % 2 === 0 ?
                    <Image
                      resizeMode='cover'
                      style={{ width: '100%', height: '100%' }}
                      source={{ uri }} />
                    :
                    <Image
                      resizeMode='cover'
                      style={{ width: '100%', height: '100%' }}
                      source={Images.jbtwo} />
                }
              </View>
            </View>
            : null
        }
        {
          category === 2 ?
            <View style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              <View
                style={{
                  width: '100%',
                  height: `${this.state.icon === 1 ? 100 : 60}%`,
                  backgroundColor: c,
                  position: 'relative'
                }}>
                <Image
                  resizeMode='cover'
                  style={{ width: '100%', height: '100%' }}
                  source={{ uri }} />
                <View
                  style={{
                    width: '100%',
                    height: 30,
                    backgroundColor: 'rgba(0,0,0,0)',
                    position: 'absolute',
                    bottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <View style={{ width: '100%', height: 1, backgroundColor: c, position: 'absolute', top: 14 }}></View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: 'white',
                      position: 'absolute',
                      zIndex: 6,
                      borderColor: c,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                    <TouchableOpacity
                      style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      onPress={() => {
                        this.setState({
                          icon: this.state.icon === 1 ? 2 : 1
                        })
                      }}>
                      <Ionicons
                        style={{ color: c }}
                        name={this.state.icon === 1 ? 'ios-arrow-up' : 'ios-arrow-down'}
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{ width: '100%', height: `${40}%`, backgroundColor: 'white' }}>
                <View style={{ padding: 12 }}>
                  <Text style={{ fontSize: 26, color: c }}>
                    {title}
                  </Text>
                  <Text style={{ fontSize: 16, color: c }}>
                    {subtitle}
                  </Text>
                </View>
              </View>
            </View>
            : null
        }
        {
          category === 3 ?
            <View style={{ width: '100%', height: '100%' }}>
              <View style={{ width: Metrics.CW / 2, height: '100%', padding: 12 }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    borderRadius: 6,
                    borderColor: 'silver',
                    borderWidth: 1,
                    padding: 6
                  }}>
                  <View style={{ width: '100%', height: '80%' }}>
                    <Image
                      resizeMode='cover'
                      style={{ width: '100%', height: '100%' }}
                      source={{ uri }} />
                  </View>
                  <View style={{ width: '100%', height: '20%' }}>
                    <Text style={{ fontSize: 18, color: c }}>{title}</Text>
                    <Text style={{ fontSize: 12, color: c }}>{subtitle.slice(0, 20)}...</Text>
                  </View>
                </View>
              </View>
            </View>
            : null
        }
      </View>
    )
  }
}

class Personal extends Component {
  static propTypes = {
    h: PropTypes.number,
    user: PropTypes.string,
    uc: PropTypes.string,
    autograph: PropTypes.string,
    c: PropTypes.string,
  }
  static defaultProps = {
    h: 220,
    user: '请登陆',
    uc: 'black',
    autograph: '这个人很懒，什么都没有留下。',
    c: 'black',
  }

  render() {
    const { h, uri, user, uc, autograph, c, navigation } = this.props
    return (
      <View>
        <View style={{ width: '100%', height: h, flexDirection: 'row', justifyContent: 'center', padding: 12 }}>
          <View style={{ width: '100%', height: '100%', backgroundColor: 'white', flexDirection: 'row' }}>
            <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: 80, height: 80, borderRadius: 40, overflow: 'hidden', borderColor: 'gold', borderWidth: 1 }}>
                <Image
                  resizeMode='cover'
                  style={{ width: '100%', height: '100%' }}
                  source={{ uri: uri }} />
              </View>
              <View style={{ marginTop: 10 }}>
                <View style={{ width: 40, height: 20, backgroundColor: 'gold', justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
                  <Text style={{ fontSize: 16, color: 'white' }}>{'VIP6'}</Text>
                </View>
              </View>
            </View>
            <View style={{ width: '70%', height: '100%', padding: 12, position: 'relative' }}>
              <View style={{ position: 'absolute', top: 20, right: 20, zIndex: 2 }}>
                <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity
                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                      navigation.navigate('DrawerOpen')
                    }}>
                    <Ionicons
                      style={{ color: c }}
                      name={'ios-more'}
                      size={26}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ height: '30%', padding: 16, marginTop: 20 }}>
                <Text style={{ fontSize: 18, color: uc }}>{user}</Text>
              </View>
              <View style={{ height: '30%', padding: 16, marginTop: 0 }}>
                <Text style={{ fontSize: 12, color: uc }}>{autograph}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

class Footer extends Component {

  static propTypes = {
    bg: PropTypes.string,
    mt: PropTypes.number,
    lw: PropTypes.string,
    tw: PropTypes.string,
    lc: PropTypes.string,
    tc: PropTypes.string,
    t: PropTypes.string
  }

  static defaultProps = {
    bg: 'white',
    mt: 0,
    lw: '30%',
    tw: '40%',
    lc: 'black',
    tc: 'black',
    t: '小主已经到底啦'
  }

  render() {
    const { t, bg, mt, lc, lw, tw, tc } = this.props
    return (
      <View
        style={{
          width: '100%',
          height: 46,
          backgroundColor: bg,
          marginTop: mt,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <View style={{ width: lw, height: 1, backgroundColor: lc }}></View>
        <View style={{ width: tw, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: tc }}>{t}</Text>
        </View>
        <View style={{ width: lw, height: 1, backgroundColor: lc }}></View>
      </View>
    )
  }
}

export {
  NavTitle,
  Card,
  ListExhibition,
  Personal,
  Footer
}

const styles = StyleSheet.create({

});
