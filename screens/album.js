/**
 * ScrollView
 */
import React from 'react';
import { FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { backgroundImg } from './home';
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
                    <Icon name='angle-left' type='font-awesome' size={30} color='#01a699' onPress={() => navigation.navigate('Home')}/>
                </TouchableOpacity>
                <FlatList
                    style={{ marginTop: 60 }}
                    data={imgs}
                    renderItem=
                    {({ item }) => {
                        return (
                            <Card>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Divider />
                                <Card.Image
                                    source={{
                                        uri: item.uri
                                    }}
                                />
                                <Text style={{ marginBottom: 10, marginTop: 10 }}>
                                    {item.details}
                                </Text>
                                <Button
                                    buttonStyle={{
                                        borderRadius: 10,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        marginBottom: 0,
                                    }}
                                    title="VIEW NOW"
                                    onPress={() => navigation.navigate('ViewImg', { uri: item.uri })}
                                />
                            </Card>
                        );
                    }} />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        row_img: {
            flex: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        one_img: {
            flexDirection: 'column',
            alignItems: 'center',
            top: 50,
            bottom: 50
        }
    }
)

export default ScrollingImg;