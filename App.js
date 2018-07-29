import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

import ListItem from './ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const apiCall = await fetch('http://13.59.225.126:8081/apiproducts');
    const response = await apiCall.json();
    this.setState({
      data: response.apiProduct.map(feed => ({ ...feed, key: feed.name }))
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Catalogo de APIs</Text>
        <FlatList
          style={styles.list}
          data={this.state.data}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    backgroundColor: '#f3f3f3'
  },
  title: {
    backgroundColor: '#1f3752',
    fontSize: 18,
    color: '#ffffff',
    height: 50
  },
  list: {  }
});
