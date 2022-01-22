/**
 * ScrollView
 */
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { backgroundImg } from './Home';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style';

import { useSelector, useDispatch } from 'react-redux';
import { loadImg, loveIt, getPressed } from '../redux/actions';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 100,
    height: 100
};

const Album = ({ navigation }) => {
    const { movies, favorites, pictures } = useSelector(state => state.moviesReducer);
    console.log(pictures);
    const dispatch = useDispatch();
    const fetchImgs = () => dispatch(loadImg());
    useEffect(() => {
        fetchImgs();
    }, []);
    const addLoveNum = img => dispatch(loveIt(img));
    const handleAdd = img => {
        addLoveNum(img);
        console.log("P")
    };
    const pressed = img => {
        if (pictures.filter(item => item.id === img.id).pressed === true) {
          return true;
        }
        return false;
      };
    return (
        <ImageBackground source={backgroundImg} resizeMode="stretch" style={{ width: '100%', height: '100%' }}>
            <SafeAreaView marginTop={50}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        height: 40,
                        backgroundColor: '#fff',
                        borderRadius: 100,
                    }}
                >
                    <Icon name='angle-left' type='font-awesome' size={30} color='#01a699' onPress={() => navigation.navigate('Home')} />
                </TouchableOpacity>
                <FlatList
                    style={{ marginTop: 60 }}
                    data={pictures}
                    renderItem=
                    {({ item }) => {
                        return (
                            <Card
                                borderRadius={15} >
                                <Card.Image
                                    borderRadius={15}
                                    source={{
                                        uri: item.uri
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                    <Text style={{ marginBottom: 10, marginTop: 10, alignSelf: 'center', fontFamily: 'American Typewriter' }}>
                                        {item.title}
                                    </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ marginRight: 10, marginBottom: 10, marginTop: 10, alignSelf: 'center', fontFamily: 'American Typewriter' }}>{item.love}</Text>
                                        <TouchableOpacity
                                            style={[styles.button_shadow, { marginRight: 10 }]}
                                            disabled={item.pressed}
                                            activeOpacity={0.8}
                                            onPress={() => handleAdd(item)}>
                                            <LinearGradient
                                                colors={['#fcbdd1', '#b3fce8']}
                                                style={{ borderRadius: 30, width: 45, alignSelf: 'flex-end' }} >
                                                <View
                                                    style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                                                    <Icon
                                                        name={pressed(item) ? 'heart-o' : 'heart'}
                                                        type="font-awesome"
                                                        color={pressed(item) ? 'white' : 'red'} />
                                                </View>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.button_shadow}
                                            onPress={() => navigation.navigate('ViewImg', { uri: item.uri })}>
                                            <LinearGradient
                                                colors={['#fcbdd1', '#b3fce8']}
                                                style={{ borderRadius: 30, width: 45, alignSelf: 'flex-end' }} >
                                                <View
                                                    style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                                                    <Icon
                                                        name="angle-right"
                                                        type="font-awesome"
                                                        color='white' />
                                                </View>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                        );
                    }} />
            </SafeAreaView>
        </ImageBackground>
    )
}


export default Album;