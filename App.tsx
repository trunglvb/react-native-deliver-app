import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/Home'
import RestaurantScreen from './src/screens/Restaurant'
import { NativeWindStyleSheet } from 'nativewind'
import { IFeatured } from './src/types'

NativeWindStyleSheet.setOutput({
  default: 'native'
})
type RootStackParamList = {
  Home: undefined
  Restaurant: IFeatured
}
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}
