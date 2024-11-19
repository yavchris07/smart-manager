import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import SplashScreen from './src/screens/SplashScreen';
import Create from './src/screens/Create';
import MainTabNavigator from './src/components/MainTabNavigator';

export type RootParamList = {
  Splash: undefined;
  Login: undefined;
  Welcome: undefined;
  Home: undefined,
  Create:undefined,
  MainTabs: undefined; 
};

const AuthenticationStack = createStackNavigator<RootParamList>()

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator >
      <AuthenticationStack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <AuthenticationStack.Screen name='Create' component={Create} options={{ headerShown: false }} />
      {/* Intégrer le BottomTabNavigator ici */}
      <AuthenticationStack.Screen name="MainTabs" component={MainTabNavigator} options={{ headerShown: false }} />
    </AuthenticationStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}


