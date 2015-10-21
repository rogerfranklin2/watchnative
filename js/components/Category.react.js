var React = require("react-native")

var api = require('../api/api')
var MovieCard = require('./MovieCard.react')

var {
  Text,
  View,
  ListView,
  ScrollView
} = React

class Category extends React.Component {
  constructor(){
    super()

    this.state = {
      loading: true,
      movies: []
    }
  }

  componentDidMount(){
    api.getMoviesForCategory(this.state.id,
      (data)=> {

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          loading: false,
          movies: ds.cloneWithRows(data)
        })
      },
       (error) => { console.log(error)})
  }

  render(){
    return(
      <ScrollView>
        <Text>Blas</Text>
        { this.state.loading ? <View><Text></Text></View> :
        <ListView
              dataSource={this.state.movies}
              renderRow={(movie) => <MovieCard
                image={movie.image}
                title={movie.title}
                rating={movie.raiting}
                year={movie.year}
                certificate={movie.certificate}
                navigator={this.props.navigator}
                />
              }
        />
        }
      </ScrollView>
    )
  }
}

module.exports = Category
