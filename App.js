// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
// Import React Navigation
import { createAppContainer, createStackNavigator } from 'react-navigation';

// Create the navigator
const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

const AppContainer = createAppContainer(AppNavigator);
// Export it as the root component
export default AppContainer