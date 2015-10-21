var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var Homepage = require('./js/components/Homepage.react')

class watchnative extends React.Component {
  render() {
    return (
      <NavigatorIOS
      ref="navigator"
      style={styles.wrapper}
      titleTextColor="white"
      barTintColor="#37AC47"
      tintColor="white"
      initialRoute={{
        component: Homepage,
        title: 'NOW TV'
      }}
    />

    );
  }
};

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

AppRegistry.registerComponent('watchnative', () => watchnative);
