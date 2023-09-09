import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Text, View } from 'react-native'

interface IState {
  name: string
  age: string
}
export default function App() {
  const [info, setInfo] = useState<IState>({
    name: 'ne trung',
    age: '10'
  })

  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Text className='text-red-700 font-semibold text-xl'>{info.name}</Text>
      <StatusBar style='auto' />
    </View>
  )
}
