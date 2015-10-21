var React = require('react-native');

var CategoryListing = require('./CategoryListing.react')
var api = require('../api/api')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ListView,
  ScrollView,
} = React;

class Homepage extends React.Component {
  constructor(){
    super()

    this.state = {
      loading: true,
      categories: []
    }
  }

  componentDidMount(){
    //https://api.myjson.com/bins/3npey
    api.getCategories((data)=> {

      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        loading: false,
        categories: ds.cloneWithRows(data)
      })
    }, (error) => {
      console.log(error);
    } )
  }


  render(){
    console.log("SOME PROPS", this.props)
    return (
      <ScrollView>
        { this.state.loading ? <View><Text>Loading</Text></View> :
        <ListView
              navigator={this.props.navigator}
              initialListSize={5}
              dataSource={this.state.categories}
              renderRow={(category) => <CategoryListing
                id={category.id}
                image={category.image}
                title={category.title}
                number={category.number}
                navigator={this.props.navigator}
              />}
            />
       }
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    backgroundColor: 'red'
  },
});

module.exports = Homepage
