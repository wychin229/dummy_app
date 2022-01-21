/**
 * ScrollView
 */
import React from 'react';
import { FlatList, ImageBackground, SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { backgroundImg } from './home';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style';


const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 100,
    height: 100
};

const imgs = [{
    uri: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "Small Timmy",
    details: "Some text here"
},
{
    uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
    title: "Timmy's friend - Garry",
    details: "Some text here"
},
{
    uri: "https://cdn.shopify.com/s/files/1/0284/2391/3547/articles/photo-1570579380989-4ad216439577_1024x1024.jpg?v=1596407005",
    title: "Timmy's Paw",
    details: "Some text here"
}];
const ScrollingImg = ({ navigation }) => {
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
                <FlatList
                    style={{ marginTop: 60 }}
                    data={imgs}
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
                            </Card>
                        );
                    }} />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ScrollingImg;