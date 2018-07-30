import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class ApiDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    const name = this.props.navigation.getParam('name');
    const fetchProduct = await fetch(
      `http://13.59.225.126:8081/apiproducts?name=${name}`
    );
    const { apiProduct } = await fetchProduct.json();

    this.setState({
      data: apiProduct[0]
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.data !== null && (
          <View style={styles.content}>
            <Text style={styles.title}>{this.state.data.product}</Text>
            <Text style={styles.version}>
              Versión: {this.state.data.versionNumber}
            </Text>
            <Text style={styles.description}>
              {this.state.data.description}
            </Text>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  content: { padding: 20 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003c80'
  },
  version: {
    color: '#46b4b8',
    fontSize: 16
  },
  description: { fontSize: 16, marginTop: 20 }
});
