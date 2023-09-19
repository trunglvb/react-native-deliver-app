//import liraries
import React from 'react'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { IAppState } from '../../../redux/store'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
  const items = useSelector((state: IAppState) => state.basket.items)
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const totalPrice = items?.reduce((total, item) => total + item?.price, 0)
  return (
    <>
      {items?.length ? (
        <View className='absolute bottom-10 w-full z-50'>
          <TouchableOpacity
            className='mx-5 bg-[#2563eb] p-4 rounded-lg flex-row items-center space-x-1 text-white'
            onPress={() => {
              navigation.navigate('Basket')
            }}
          >
            <Text className='text-white font-extrabold text-lg bg-[#143c93] py-1 px-2'>{items?.length}</Text>
            <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
            <Text className='text-lg text-white font-extrabold'>
              <Currency quantity={totalPrice} currency='GBP' />
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  )
}

export default BasketIcon
