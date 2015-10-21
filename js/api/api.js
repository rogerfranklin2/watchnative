module.exports = {
  getCategories(onSuccess, onError){
    fetch("https://api.myjson.com/bins/2v08i")
      .then(function(response) { return response.json() })
      .then(function(data) { onSuccess(data) })
      .catch(function(error) { onError(error); })
  },

  getMoviesForCategory(category, onSuccess, onError){
    //dynamic url based on category
    fetch("https://api.myjson.com/bins/2n2qq")
      .then(function(response) { return response.json() })
      .then(function(data) { onSuccess(data) })
      .catch(function(error) { onError(error)})
  },

  getMovie(movie, onSuccess, onError){
    fetch('https://api.myjson.com/bins/1jf9u')
      .then(function(response) { return response.json()})
      .then(function(data) { onSuccess(data)})
      .catch(function(error) { onError(error)})
  }
}
