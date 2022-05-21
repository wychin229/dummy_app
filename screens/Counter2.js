import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class Counter2 extends React.Component {
  shouldComponentUpdate(nextProps) {
    // Rendering the component only if
    // passed props value is changed

    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log('Counter 2 is calling');
    return (
      <View>
        <Text style={styles.text}>Counter 2: {this.props.value}</Text>
        <Button
          onPress={this.props.onClick}
          style={styles.button}
          title="Add"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 150,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Counter2;
