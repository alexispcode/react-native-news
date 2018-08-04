import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import ApiCatalogPage from './ApiCatalog';
import ApiDetailPage from './ApiDetail';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Catalog: ApiCatalogPage
});

const App = createStackNavigator(
  {
    Tabs: { screen: Tabs },
    ApiDetail: {
      screen: ApiDetailPage,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam('name')}`
      })
    }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

export default App;
