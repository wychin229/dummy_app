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