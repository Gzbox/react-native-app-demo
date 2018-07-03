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

import { Colors, t, Metrics } from '../themes'

class ReadingMaterials extends Component {

  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <NavTitle
          backColor={Colors.fontcolorone}
          c={Colors.fontcolorone}
          navigate={this.props.navigation}
          t={'阅读资料'} />

        <ScrollView style={{ height: Metrics.CH - 46 }}>

        </ScrollView>
      </View>
    );
  }
}

export default ReadingMaterials;

const styles = StyleSheet.create({
  container: {

  }
})