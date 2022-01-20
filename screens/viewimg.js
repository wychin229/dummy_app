import React from 'react';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backgroundImg } from './home';

export default ViewImg = ({ navigation, route }) => {
    const { uri } = route.params;
    return (
        <SafeAreaView>
            <ImageBackground source={backgroundImg} resizeMode="stretch" style={{ width: '100%', height: '110%' }}>
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
                <Image style={{ width: "100%", height: "100%", resizeMode: 'contain' }} source={{ uri: uri }} />
            </ImageBackground>
        </SafeAreaView>
    )
}