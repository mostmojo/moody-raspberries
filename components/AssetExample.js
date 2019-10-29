import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Derp derp!
        </Text>
        <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      </View>
    );
  }
}

// Styling objects
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
