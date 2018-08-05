import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class ApiCategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const fetchProducts = await fetch(
      'http://13.59.225.126:8081/categories?available=true'
    );
    const data = await fetchProducts.json();

    this.setState({ data });
  }

  handleOnPress = item => {
    this.props.navigation.navigate('ApiCatalog', { name: item.name });
  };
  render() {
    const { data } = this.state;

    return (
      <View>
        <Text h1>Categorias</Text>
        <List>
          {data.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              leftIcon={{ name: 'av-timer' }}
              onPress={() => this.handleOnPress(item)}
            />
          ))}
        </List>
      </View>
    );
  }
}

export default ApiCategoriesScreen;
