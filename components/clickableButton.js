import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-elements';

export default ClickButton = (props) => {
  return (
    <SafeAreaView
      style={styles.button_top}>
      <Button
        onPress={props.onpress}
        raised
        title={props.title} />
    </SafeAreaView>
  );
};

const ButtonWithIcon = () => {
  return (
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
  )
}