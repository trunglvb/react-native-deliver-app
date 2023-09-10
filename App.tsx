import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/Home'
import { NativeWindStyleSheet } from 'nativewind'

NativeWindStyleSheet.setOutput({
  default: 'native'
})

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  )
}
