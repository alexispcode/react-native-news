import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';

class HomeScreen extends React.Component {
  handleChangeText = () => {};
  onClearText = () => {};

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text h1>¿Qué Api estás buscando?</Text>
        <SearchBar
          containerStyle={styles.searchbar}
          round
          lightTheme
          onChangeText={this.handleChangeText}
          onClearText={this.onClearText}
          placeholder="Buscá por APIs, categorias o palabras clave..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchbar: {
    width: 300
  }
});

export default HomeScreen;
