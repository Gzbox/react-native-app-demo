import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'

import { NavTitle, Personal } from '../components/Basic'

import { Colors, t, Metrics } from '../themes'

class Me extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavTitle
          c={Colors.fontcolorone}
          hideBack={'hide'}
          navigate={this.props.navigation}
          backColor={'rgba(0,0,0,0)'}
          t={'个人中心'} />

        <ScrollView style={{ height: Metrics.CH - 46 }}>
          <Personal
            navigation={this.props.navigation}
            user={'UI MODAL'}
            uc={Colors.fontcolorone}
            uri={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521017281&di=e357e97a958b86bead8dcfc9f5464fd6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F73%2F82%2F79X58PICVj6.jpg'}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Me;

const styles = StyleSheet.create({
  container: {

  }
})