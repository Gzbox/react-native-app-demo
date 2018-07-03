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

import { t, Colors, Metrics } from '../themes'

class Note extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavTitle
          c={Colors.fontcolorone}
          hideBack={'hide'}
          navigate={this.props.navigation}
          backColor={'rgba(0,0,0,0)'}
          t={'重点笔记'} />

        <ScrollView style={{ height: Metrics.CH - 46 }}>

        </ScrollView>
      </View>
    );
  }
}

export default Note;

const styles = StyleSheet.create({
  container: {

  }
})