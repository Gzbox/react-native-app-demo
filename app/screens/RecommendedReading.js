import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import { NavTitle } from '../components/Basic'

import { t, Colors, Metrics } from '../themes'

class RecommendedReading extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavTitle
          backColor={Colors.fontcolorone}
          c={Colors.fontcolorone}
          navigate={this.props.navigation}
          t={'推荐阅读'} />

        <ScrollView style={{ height: Metrics.CH - 46 }}>

        </ScrollView>
      </View>
    );
  }
}

export default RecommendedReading;

const styles = StyleSheet.create({
  container: {

  }
})