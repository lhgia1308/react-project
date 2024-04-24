export const isPresentInFavorites = (favorites, store) => {
  var result = favorites.filter((fa) => fa.id === store.id) ? true : false;
  return result;
};
