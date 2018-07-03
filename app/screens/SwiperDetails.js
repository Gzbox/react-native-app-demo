import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import { ArticleCard, NavTitle } from '../components/Basic'

import { t, Colors } from '../themes'

class SwiperDetails extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavTitle
          navigate={this.props.navigation}
          backColor={Colors.fontcolorone}
          c={Colors.fontcolorone}
          t={'轮播详情'} />
      </View>
    );
  }
}

export default SwiperDetails;

const styles = StyleSheet.create({
  container: {

  }
})