import React, { Component } from 'react'

import {
  DrawerItems,
  SafeAreaView,
  TabNavigator,
  StackNavigator,
  DrawerNavigator
} from 'react-navigation'

import {
  Me,
  Home,
  Note,
  Article,
  ArticleDetail,
  SelfDetection,
  SwiperDetails,
  ReadingMaterials,
  DetailedExamples,
  RecommendedReading
} from '../screens'

import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native'

import { Colors, t, Metrics } from '../themes'

import Ionicons from 'react-native-vector-icons/Ionicons'


const CustomDrawerContentComponent = (props) => (
  //If there's a lot of content   change  View --> ScrollView
  <View style={{ flex: 1 }}>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawbg}>
        <Image
          resizeMode='cover'
          style={{ width: '100%', height: '100%' }}
          source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518175249346&di=0798c5e8cda5c4861e352e0fa62185be&imgtype=0&src=http%3A%2F%2Fwww.internetke.com%2Fuploads%2Fallimg%2F140422%2F1-1404220RT23S.jpg' }} />
      </View>
      <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 200, height: 200, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 120, height: 120, borderWidth: 6, borderColor: Colors.fontcolorone }}>
            <Image
              resizeMode='cover'
              style={{ width: '100%', height: '100%' }}
              source={{ uri: t('unserAvator') }} />
          </View>
          <View style={styles.uname}>
            <Text style={{ fontSize: 20, color: Colors.fontcolorone }}>{t('username')}</Text>
          </View>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </View>
);

const routeConfigs = {
  Home: {
    screen: Home,
    path: '/home',
    navigationOptions: {
      tabBarLabel: t('tab1'),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: focused ? Colors.fontcolorone : Colors.tabcolorone }}
        />
      ),
    },
  },
  Article: {
    screen: Article,
    path: '/article',
    navigationOptions: {
      tabBarLabel: t('tab2'),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-book' : 'ios-book-outline'}
          size={26}
          style={{ color: focused ? Colors.fontcolorone : Colors.tabcolorone }}
        />
      ),
    },
  },
  Note: {
    screen: Note,
    path: '/note',
    navigationOptions: {
      tabBarLabel: t('tab3'),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-bookmarks' : 'ios-bookmarks-outline'}
          size={26}
          style={{ color: focused ? Colors.fontcolorone : Colors.tabcolorone }}
        />
      ),
    },
  },
  Me: {
    screen: Me,
    path: '/me',
    navigationOptions: {
      tabBarLabel: t('tab4'),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-heart' : 'ios-heart-outline'}
          size={26}
          style={{ color: focused ? Colors.fontcolorone : Colors.tabcolorone }}
        />
      ),
    },
  },
}

const tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: Colors.fontcolorone,
    inactiveTintColor: Colors.tabcolorone,
    showIcon: true,
    style: {
      height: Platform.OS === 'android' ? 60 : 50,
      backgroundColor: Colors.tabcolor,
    },
  },
}


const tabs = TabNavigator(routeConfigs, tabNavigatorConfig)


const DrawerRouteConfigs = {
  tabs: {
    screen: tabs,
    navigationOptions: {
      drawerLabel: t('lefttitle'),
      drawerIcon: ({ focused, tintColor }) => {
        return (
          <Ionicons
            name={'ios-home'}
            size={26}
            style={{ color: Colors.fontcolorone }}
          />
        )
      }
    }
  },
  tab2: {
    screen: ReadingMaterials,
    navigationOptions: {
      drawerLabel: t('leftitem1'),
      drawerIcon: ({ focused, tintColor }) => {
        return (
          <Ionicons
            name={'ios-bookmarks'}
            size={26}
            style={{ color: Colors.fontcolorone }}
          />
        )
      }
    }
  },
  tab3: {
    screen: RecommendedReading,
    navigationOptions: {
      drawerLabel: t('leftitem2'),
      drawerIcon: ({ focused, tintColor }) => {
        return (
          <Ionicons
            name={'ios-map'}
            size={26}
            style={{ color: Colors.fontcolorone }}
          />
        )
      }
    }
  },
  tab4: {
    screen: DetailedExamples,
    navigationOptions: {
      drawerLabel: t('leftitem3'),
      drawerIcon: ({ focused, tintColor }) => {
        return (
          <Ionicons
            name={'ios-clipboard'}
            size={26}
            style={{ color: Colors.fontcolorone }}
          />
        )
      }
    }
  },
  tab5: {
    screen: SelfDetection,
    navigationOptions: {
      drawerLabel: t('leftitem4'),
      drawerIcon: ({ focused, tintColor }) => {
        return (
          <Ionicons
            name={'ios-barcode'}
            size={26}
            style={{ color: Colors.fontcolorone }}
          />
        )
      }
    }
  },
}

const DrawerNavigatorConfigs = {
  initialRouteName: null,
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: Colors.drowcolor,
    activeBackgroundColor: 'rgba(0,0,0,0)',
    inactiveTintColor: Colors.drowcolor,
    inactiveBackgroundColor: 'rgba(0,0,0,0)',
    //all setting color
    itemsContainerStyle: {
      marginVertical: 0,
      flex: 1,
      backgroundColor: 'rgba(0,0,0,.1)'
    },
    //item setting color
    itemStyle: {
    },
    //icon setting color
    iconContainerStyle: {
      opacity: 1,
    }
  }
};

const Drawer = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfigs);


export const AppNavigator = StackNavigator({
  Drawer: {
    screen: Drawer,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        height: 0,
      }
    })
  },
  ArticleDetail: {
    screen: ArticleDetail,
    path: '/articleDetail',
    navigationOptions: ({ navigation }) => ({
      title: t('atitle'),
      headerTintColor: Colors.fontcolorone
    })
  },
  SwiperDetails: {
    screen: SwiperDetails,
    path: '/swiperDetails',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        height: 0,
      },
      headerTintColor: 'rgba(0,0,0,0)'
    })
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.CH,
    position: 'relative',
  },
  tabstyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.tabcolortwo
  },
  tabcheckstyle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.tabcolorone
  },
  listItem: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFF'
  },
  drawbg: {
    width: '100%',
    height: Metrics.CH,
    position: 'absolute',
    zIndex: -1
  },
  uname: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})