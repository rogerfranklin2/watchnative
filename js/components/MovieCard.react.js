var React = require('react-native')
var Movie = require('./Movie.react.js')


var {
  Image,
  View,
  Text,
  StyleSheet,
} = React

class MovieCard extends React.Component {
  constructor(){
    super()

    this._goToMovie = this._goToMovie.bind(this)
  }

  render(){
    console.log("rendering moviecard", this.props)
    return(
      <View onPress={this._goToMovie} style={styles.MovieCard}>
        <Image onPress={this._goToMovie} source={{ uri:this.props.image}} style={{width: 370, height: 270 }} />
        <View style={styles.texts}>
          <Text onPress={this._goToMovie}>{this.props.title}</Text>
          <Text>Stars:{this.props.rating}</Text>
          <Text>Year:{this.props.year}</Text>
          <Text>{this.props.certificate}</Text>
        </View>
      </View>
    )
  }

  _goToMovie() {
    this.props.navigator.push({component:Movie, title: 'Horrible Bosses 2'})
  }
}

var styles = StyleSheet.create({
  category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37AC47',
    color: 'white'
  },
  MovieCard: {

  },
  texts: {

  }
});

module.exports = MovieCard
