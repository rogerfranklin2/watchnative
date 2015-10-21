var alt = require('../alt');
var UserActions = require('../actions/favoriteActions');

class FavoritesStore {
  constructor() {
    this.liked = false;

    this.bindListeners({
      likeMovie: UserActions.LIKE_MOVIE
    });
  }

  likeMovie(like) {
    this.liked = !this.liked;
  }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');
