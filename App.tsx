import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IState {
  name: string
  age: string
}
export default function App() {
  const [info, setInfo] = useState<IState>({
    name: 'ne trung',
    age: '10'
  })
  const expr: any = 'Papayas'
  switch (expr) {
    case '1':
      console.log('Oranges are $0.59 a pound.')
      break

    default:
      console.log(`Sorry, we are out of ${expr}.`)
  }

  return (
    <View style={styles.container}>
      <Text>{info.name}</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
