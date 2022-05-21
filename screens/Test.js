/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { getMovies, updatePoint } from '../redux/actions';
import { connect } from 'react-redux';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';

class ClassComponent extends React.Component {
  /*
  [1]Mount
  - first method invoked before the component is mounted to the DOM
  - should not introduce any side effects of subscriptions (event handlers, etc.)
  */
  constructor(props) {
    super(props);
    this.state = {
      counter1: 0,
      counter2: 0,
      point: 0,
      chatlist: ['Hi', 'How are you?'],
    };
    this.increase1 = this.increase1.bind(this);
    this.increase2 = this.increase2.bind(this);
  }

  /*
  [2]Mount [1]Update
  - this method is called before the component is rendered to DOM on initial mount
  - to ensure that the state and props are in sync for when it's
    required. Used to replace componentWillReceiveProps in React 17
  - allows a componenet to update its internal state in response to a change in props.
  */
  static getDerivedStateFromProps(props, state) {
    return null; // to make no updates
    // return {
    //   point: 200, // update the state with this
    // };
  }

  //#region interact with global state
  decrementPoint() {
    this.state.point--;
    this.props.changePoint(this.props.point - 1);
  }

  incrementPoint() {
    this.state.point++;
    this.props.changePoint(this.props.point + 1);
  }
  //#endregion

  updateLocalPoint(isIncrease) {
    if (isIncrease) {
      this.setState((state) => ({ point: state.point + 1 }));
    } else {
      this.setState((state) => ({ point: state.point - 1 }));
    }
  }

  //#region only update when state changes
  increase1() {
    this.setState((state) => ({ counter1: state.counter1 + 1 }));
  }

  increase2() {
    this.setState((state) => ({ counter2: state.counter2 + 1 }));
  }
  //#endregion

  /*
  [3]Mount [3]Update
  - is the ONLY required method for a class component
  - the function should be pure (do not use setState or interact with external APIs)
  */
  render() {
    return (
      <SafeAreaView>
        <View styles={styles.container}>
          <View style={styles.itemContainer}>
            <Text style={styles.subtitle}>Interact with Global State and dispatch actions</Text>
            <View style={styles.innerContainer}>
              <Text style={{ textAlign: 'center', paddingBottom: 10 }}>Global point: {this.props.point}, Local point: {this.state.point}</Text>
              <View style={styles.rowButton}>
                <Text style={{paddingTop: 10}}>Both:</Text>
                <Button
                  title="+"
                  style={styles.button}
                  onPress={() => this.incrementPoint()}
                />
                <Button
                  title="-"
                  style={styles.button}
                  onPress={() => this.decrementPoint()}
                />
              </View>
              <View style={styles.rowButton}>
                <Text style={{paddingTop: 10}}>Local:</Text>
                <Button
                  title="+"
                  style={styles.button}
                  onPress={() => this.updateLocalPoint(true)}
                />
                <Button
                  title="-"
                  style={styles.button}
                  onPress={() => this.updateLocalPoint(false)}
                />
              </View>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.subtitle}>Testing on shouldComponentUpdate</Text>
            <Text style={styles.subtitle}>(See console log)</Text>
            <View style={styles.innerContainer}>
              <Counter1 value={this.state.counter1} onClick={this.increase1} />
              <Counter2 value={this.state.counter2} onClick={this.increase2} />
            </View>
          </View>
          <Button
            title="Dispatch getMovies"
            onPress={() => this.props.fetchMovies()}
          />
        </View>
      </SafeAreaView>
    );
  }

  /*
  [4]Mount
  - invoked straight after component is mounted to DOM
  */
  componentDidMount() {
  }

  /*
  [2]Update
  - return a boolean to control whether a component gets rerendered upon a change in state or props
  - only updates the component if the props passed to it changes.
  */
  // shouldComponentUpdate() { }

  /*
  [4]Update
  - stores the previous values of the state after the DOM is updated.
  - rarely used, unless need to grab information from DOM just after an update is made
  - the information queried refers to the value just before the DOM is updated
  - meant to use with componentDidUpdate()
  */
  // getSnapshotBeforeUpdate() { }

  /*
   [5]Update
   - value returned from getSnapshotBeforeUpdate() is passed as the third argument
  */
}

/*
useDispatch() equivalent for class component
*/
const mapDispatchToProps = (dispatch) => {
  return {
    doSmtg: () => dispatch({ type: 'TEST' }),
    fetchMovies: () => { dispatch(getMovies()); },
    changePoint: (point) => { dispatch(updatePoint(point)); },
  };
};

/*
useSelector() equivalent for class component
*/
const mapStateToProps = (state) => {
  return ({
    movies: state.moviesReducer.movies,
    point: state.moviesReducer.point,
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
  },
  itemContainer: {
    backgroundColor: '#a8d5e5',
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 10,
  },
  button: {
    width: 50,
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);
