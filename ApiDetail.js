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
          <View>
            <Text style={styles.title}>{this.state.data.product}</Text>
            <Text>{this.state.data.description}</Text>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3'
  },
  title: {
    backgroundColor: '#1f3752',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingTop: 15,
    paddingBottom: 15
  }
});
