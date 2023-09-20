/* eslint-disable react-hooks/exhaustive-deps */
//import liraries
import React, { useEffect } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'

// create a component
const PreparingOrderScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 3000)
  }, [])
  return (
    <SafeAreaView className='bg-[#f17f7f] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../../../assets/nelson-tiapa-gif-delivery.gif')}
        animation='slideInDown'
        iterationCount={1}
        className='h-96 w-96'
      ></Animatable.Image>
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Bar indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
