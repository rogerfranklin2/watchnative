var React = require('react-native');

var Category = require('./Category.react')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  ScrollView,
  TouchableHighlight
} = React;

class CategoryListing extends React.Component {
  constructor(){
    super()

    this._onPressButton = this._onPressButton.bind(this);
      console.log("props", this.props)
  }

  render(){
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={styles.category}>
          <Image style={{width: 375, height: 210}} source={{uri: this.props.image}}>
            <View styles={styles.textContainer}>
            <Text style={styles.categoryTitle}>{this.props.title}</Text>
            <Text style={styles.categoryNumber}>{this.props.number} movies</Text>
            </View>
          </Image>

        </View>
      </TouchableHighlight>
    )
  }

  _onPressButton(){
    this.props.navigator.push({component:Category, title: 'Hot Right Now', passProps: { navigator: this.props.navigator} })
  }
}


var styles = StyleSheet.create({
  category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'

  },
  imageStyles: {
    paddingTop: 60
  },
  categoryTitle: {
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingTop: 90
  },
  categoryNumber: {
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

module.exports = CategoryListing;
