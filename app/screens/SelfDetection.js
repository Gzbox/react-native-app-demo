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

class SelfDetection extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavTitle
          backColor={Colors.fontcolorone}
          c={Colors.fontcolorone}
          navigate={this.props.navigation}
          t={'自我检测'} />

        <ScrollView style={{ height: Metrics.CH - 46 }}>

        </ScrollView>
      </View>
    );
  }
}

export default SelfDetection;

const styles = StyleSheet.create({
  container: {

  }
})