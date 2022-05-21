/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { SafeAreaView } from 'react-native-safe-area-context';
import { source } from './home';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import MovieList from './MovieList';

const Movies = () => {
  return (
    <ImageBackground source={source.backgroundImg} style={{ width: '100%', height: '100%' }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, marginTop: 44, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 22, alignSelf: 'center' }}>Popular Movies</Text>
          <View style={{ flex: 1, marginTop: 12 }}>
          <MovieList />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Movies;
