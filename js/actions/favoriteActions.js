var alt = require('../alt');

class FavoriteActions {
  likeMovie(res) {
    this.dispatch(res);
  }
}

module.exports = alt.createActions(FavoriteActions);
