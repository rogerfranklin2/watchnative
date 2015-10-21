var React = require('react-native')

var api = require('../api/api')

var FavoritesStore = require('../stores/favoritesStore')
var FavoriteActions = require('../actions/favoriteActions')

var {
  Image,
  View,
  Text,
  StyleSheet,
} = React

class Movie extends React.Component {
  constructor(){
    super()
    this.state = {
      movie: {},
      liked: true
    }

    this.onChange = this.onChange.bind(this)
  }

  componentDidMount(){
    FavoritesStore.listen(this.onChange);
    //https://api.myjson.com/bins/3npey
    api.getMovie("id",(data)=> {
      this.setState({
        loading: false,
        movie: data
      })
    }, (error) => {
      console.log(error);
    } )
  }

  render(){
    console.log("state",this.state)
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.movie.image}} style={{width: 370, height: 270 }}/>
        <View>
              {this.state.liked ? <Text onPress={this.likeMovie}>LIKE</Text> : 
                                  <Text onPress={this.likeMovie}>DISLIKE</Text>
              }
        </View>
        <View>
          <Text>{this.state.movie.title}</Text>
          <View>
            <Text>{this.state.movie.year}</Text>
            <Text>{this.state.movie.duration}</Text>
          </View>
          <View>
            <Text>
              {this.state.movie.blurb}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  likeMovie(){
    console.log("like movie action")
    FavoriteActions.likeMovie()
  }


  onChange(state){
    console.log("on change")
    this.setState(state);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = Movie;
