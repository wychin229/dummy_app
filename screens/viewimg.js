import React from 'react';
import {Image, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default ViewImg = ({navigation, route}) => {
    const { uri } = route.params;
    return (
        <SafeAreaView>
            <Image style={{width: "100%", height: "100%", resizeMode: 'contain'}} source={{uri:uri}} />
        </SafeAreaView>
    )
}