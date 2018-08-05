import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import ApiCatalogScreen from '../ApiCatalog';
import ApiDetailScreen from '../ApiDetail';
import HomeScreen from '../Home';
import LoginScreen from '../Login';
import ApiCategoriesScreen from '../ApiCategories';

const ApisStack = createStackNavigator(
  {
    ApiCategories: {
      screen: ApiCategoriesScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Catalogo de APIs`
      })
    },
    ApiCatalog: {
      screen: ApiCatalogScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Catalogo de APIs`
      })
    },
    ApiDetail: {
      screen: ApiDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam('name')}`
      })
    }
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerStyle: { backgroundColor: '#003c80' },
      headerTintColor: 'white'
    }
  }
);

export const Root = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  ApisCatalog: {
    screen: ApisStack,
    navigationOptions: {
      title: 'Catálogo de APIs'
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Iniciar sesión'
    }
  }
});

/*
const TabsNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" type="entypo" size={28} color={tintColor} />
      )
    }
  },
  Catalog: {
    screen: ApisStack,
    navigationOptions: {
      tabBarLabel: 'APIs',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      )
    }
  }
});
*/
