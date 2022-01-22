import { SafeAreaView } from 'react-native-safe-area-context';
import { backgroundImg } from './Home';
import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getMovies, addFavorite, removeFavorite } from '../redux/actions';


const Movies = () => {
  const { movies, favorites } = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  useEffect(() => {
    fetchMovies();
  }, []);
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

  return (
    <ImageBackground source={backgroundImg} style={{ width: '100%', height: '100%' }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, marginTop: 44, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 22, alignSelf: 'center' }}>Popular Movies</Text>
          <View style={{ flex: 1, marginTop: 12 }}>
            <FlatList
              data={movies.results}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => {
                const IMAGE_URL =
                  'https://image.tmdb.org/t/p/w185' + item.poster_path;
                return (
                  <View style={{ marginVertical: 12 }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                      <Image
                        source={{
                          uri: IMAGE_URL,
                        }}
                        resizeMode="cover"
                        style={{ width: 100, height: 150, borderRadius: 10 }}
                      />
                      <View style={{ flex: 1, marginLeft: 12 }}>
                        <View>
                          <Text style={{ fontSize: 22 }}>
                            {item.title}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            alignItems: 'center',
                          }}>
                          <MaterialIcons color="green" name="thumb-up" size={32} />
                          <Text
                            style={{
                              fontSize: 18,
                              paddingLeft: 10,
                              color: '#64676D',
                            }}>
                            {item.vote_count}
                          </Text>
                          <TouchableOpacity
                            onPress={() => exists(item) ? handleRemoveFavorite(item) : handleAddFavorite(item)}
                            activeOpacity={0.7}
                            style={{
                              marginLeft: 14,
                              flexDirection: 'row',
                              padding: 2,
                              borderRadius: 20,
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: 40,
                              width: 40,
                            }}>
                            <MaterialIcons
                              color="orange"
                              size={32}
                              name={exists(item) ? 'favorite' : 'favorite-outline'}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Movies;