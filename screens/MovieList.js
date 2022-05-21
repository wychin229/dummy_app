/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, getMovies, removeFavorite} from '../redux/actions';

const MovieList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const {movies, favorites, pictures} = useSelector(
    state => state.moviesReducer,
  );
  const addToFavorites = movie => dispatch(addFavorite(movie));
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));
  const handleAddFavorite = movie => {
    addToFavorites(movie);
  };
  const handleRemoveFavorite = movie => {
    removeFromFavorites(movie);
  };
  const exists = movie => {
    if (favorites.filter(item => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };
  const renderButtons = item => {
    return (
      <View style={{flex: 1, marginLeft: 12}}>
        <View>
          <Text style={{fontSize: 22}}>{item.title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <MaterialIcons color="green" name="thumb-up" size={32} />
          <Text style={styles.voteCount}>{item.vote_count}</Text>
          <TouchableOpacity
            onPress={() =>
              exists(item)
                ? handleRemoveFavorite(item)
                : handleAddFavorite(item)
            }
            activeOpacity={0.7}
            style={styles.loveButton}>
            <MaterialIcons
              color="orange"
              size={32}
              name={exists(item) ? 'favorite' : 'favorite-outline'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={movies.results}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => {
        const IMAGE_URL = 'https://image.tmdb.org/t/p/w185' + item.poster_path;
        return (
          <View style={{marginVertical: 12}}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image
                source={{
                  uri: IMAGE_URL,
                }}
                resizeMode="cover"
                style={styles.cardImg}
              />
              {renderButtons(item)}
            </View>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  loveButton: {
    marginLeft: 14,
    flexDirection: 'row',
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  voteCount: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#64676D',
  },
  cardImg: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});

export default MovieList;
