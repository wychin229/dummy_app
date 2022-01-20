import React from 'react';
import { Text, SafeAreaView, View, Image, ImageBackground } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import styles from '../style';
import ClickButton from '../components/clickableButton';
export default HelloWorld = ({ navigation, route }) => {
    const backgroundImg = { uri: "https://wallpaperaccess.com/full/729333.jpg" };
    const profileImg = { uri: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80" };
    return (
        <SafeAreaView
            style={{ flex: 1 }}>
            <ImageBackground source={backgroundImg} resizeMode="stretch" style={{width: '100%', height: '110%'}}>
            <Card borderRadius={15} height="70%" marginTop={100}>
                <View style={styles.img_shadow}>
                    <Image style={styles.round_img} source={profileImg} /></View>
                <Card.Title style={styles.landing_text}>Hi, {route.params.user}</Card.Title>
                <View style={{ flexDirection: 'row', justifyContent: 'center' , marginBottom: 15}}>
                    <Icon name="birthday-cake" type="font-awesome" />
                    <Text style={styles.main_font_family,{ marginTop: 5, marginLeft: 5}}>Age 2</Text>

                    <Icon name="paw" type="font-awesome" style={{ marginLeft: 20 }}/>
                    <Text style={styles.main_font_family,{ marginTop: 5, marginLeft: 5}}>European Shorthair</Text>
                </View>

                <Card.Divider></Card.Divider>
                <Button
                    icon={{
                        name: 'picture-o',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    iconContainerStyle={{ marginRight: 10 }}
                    title="Album"
                    titleStyle={styles.main_font_family}
                    buttonStyle={{
                        backgroundColor: '#8b4513',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 'auto',
                        height: 50,
                        alignSelf: 'center'
                    }}
                    onPress={() => navigation.navigate('Album')}
                />

            </Card>
            </ImageBackground>
        </SafeAreaView>
    );
};