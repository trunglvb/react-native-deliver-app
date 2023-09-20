import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/Home'
import RestaurantScreen from './src/screens/Restaurant'
import { NativeWindStyleSheet } from 'nativewind'
import { IFeatured } from './src/types'
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import BasketScreen from './src/screens/Basket'
import PreparingOrderScreen from './src/screens/PreparingOrder'
import DeliveryScreen from './src/screens/Delivery'

NativeWindStyleSheet.setOutput({
  default: 'native'
})
type RootStackParamList = {
  Home: undefined
  Restaurant: IFeatured
  Basket: undefined
  PreparingOrder: undefined
  Delivery: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen
            name='PreparingOrder'
            component={PreparingOrderScreen}
            options={{
              presentation: 'fullScreenModal'
            }}
          />
          <Stack.Screen
            name='Basket'
            component={BasketScreen}
            options={{
              presentation: 'modal'
            }}
          />
          <Stack.Screen
            name='Delivery'
            component={DeliveryScreen}
            options={{
              presentation: 'fullScreenModal'
            }}
          />
        </Stack.Navigator>
        <StatusBar />
      </Provider>
    </NavigationContainer>
  )
}
