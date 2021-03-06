/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { source } from './home';

export default ViewImg = ({ navigation, route }) => {
    const { uri } = route.params;
    return (
        <SafeAreaView>
            <ImageBackground source={source.backgroundImg} resizeMode="stretch" style={{ width: '100%', height: '110%' }}>
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
                    <Icon name='angle-left' type='font-awesome' size={30} color='#01a699' onPress={() => navigation.navigate('Album')} />
                </TouchableOpacity>
                <View style={{ marginTop: 60, marginHorizontal: 20 }}>
                    <Image style={{ width: "100%", height: "80%", resizeMode: 'contain' }} source={{ uri: uri }} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

