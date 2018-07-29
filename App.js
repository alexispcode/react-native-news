import { createStackNavigator } from 'react-navigation';
import ApiCatalogPage from './ApiCatalog';
import ApiDetailPage from './ApiDetail';

const App = createStackNavigator({
  ApiCatalog: { screen: ApiCatalogPage },
  ApiDetail: {
    screen: ApiDetailPage,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.getParam('name')}`
    })
  }
});
export default App;
