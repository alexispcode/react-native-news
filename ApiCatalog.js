import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';

export default class ApiCatalogScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  async componentDidMount() {
    const categoryName = this.props.navigation.getParam('name');
    const fetchProducts = await fetch(
      `http://13.59.225.126:8081/apiproducts?category=${categoryName}`
    );
    const { apiProduct } = await fetchProducts.json();
    const data = apiProduct.map((api, index) => ({
      ...api,
      key: index.toString()
    }));

    this.setState({ data });
  }

  handleClick = item => {
    this.props.navigation.navigate('ApiDetail', { name: item.product });
  };

  renderItem = ({ item }) => (
    <ListItem data={item} onPress={() => this.handleClick(item)} />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.data}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
