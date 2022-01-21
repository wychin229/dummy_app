import React from 'react';
import { Text, SafeAreaView, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import styles from '../style';
import ClickButton from '../components/clickableButton';
import LinearGradient from 'react-native-linear-gradient';

export const backgroundImg = { uri: "https://wallpaperaccess.com/full/729333.jpg" };
export default HelloWorld = ({ navigation, route }) => {
    const profileImg = { uri: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80" };
    return (
        <SafeAreaView
            style={{ flex: 1 }}>
            <ImageBackground
                source={backgroundImg}
                resizeMode="stretch"
                style={{ width: '100%', height: '110%' }}>
                <Card
                    borderRadius={15}
                    height="70%"
                    marginTop={100}>
                    <View
                        style={styles.img_shadow}>
                        <Image
                            style={styles.round_img}
                            source={profileImg} />
                    </View>
                    <Text
                        style={{ alignSelf: 'center', fontSize: 15, fontFamily: 'American Typewriter' }}>
                        Welcome</Text>
                    <Card.Title
                        style={styles.landing_text}>
                        {route.params.user}</Card.Title>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 15 }}>
                        <Icon
                            name="birthday-cake"
                            type="font-awesome" />
                        <Text
                            style={styles.home_detail}>
                            Age 2</Text>

                        <Icon
                            name="paw"
                            type="font-awesome"
                            style={{ marginLeft: 15 }} />
                        <Text
                            style={styles.home_detail}>
                            European Shorthair</Text>

                        <Icon
                            name="mars"
                            type="font-awesome"
                            color="blue"
                            style={{ marginLeft: 15 }} />
                    </View>

                    <Card.Divider></Card.Divider>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Album')}
                            style={styles.button_shadow}>
                            <LinearGradient
                                colors={['#fcbdd1', '#b3fce8']}
                                style={{ borderRadius: 30, width: 100, alignSelf: 'center' }} >
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                                    <Icon
                                        name="picture-o"
                                        type="font-awesome"
                                        color='white' />
                                    <Text
                                        style={{ marginTop: 5, marginLeft: 5, color: 'white' , fontFamily: "American Typewriter"}}>
                                        Album</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Card>
            </ImageBackground>
        </SafeAreaView>
    );
};