//import liraries
import React, { useMemo } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IAppState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { IDishes } from '../../types'
import { XCircleIcon } from 'react-native-heroicons/solid'
import Currency from 'react-currency-formatter'
import { removeFromBasket } from '../../redux/reducer/basketSlice'

const BasketScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const dispatch = useAppDispatch()
  const items = useSelector((state: IAppState) => state.basket.items)
  const totalPrice = items?.reduce((total, item) => total + item?.price, 0)
  const restaurant = useSelector((state: IAppState) => state.restaurant.restaurant)

  const groupsList = useMemo(() => {
    const resultArray = items.reduce((acc: IDishes[], currentItem) => {
      const existingItem = acc.find((item) => item.id === currentItem.id)

      if (existingItem) {
        existingItem.quantity!++
      } else {
        acc.push({ ...currentItem, quantity: 1 })
      }

      return acc
    }, [])
    return resultArray
  }, [items])

  return (
    <SafeAreaView className='bg-white flex-1'>
      <View className='relative bg-gray-100 flex-1'>
        <View className='bg-white p-4 border-b border-[#2563eb]'>
          <View className='justify-center items-center  '>
            <Text className='text-lg font-semibold'>Basket</Text>
            <Text className='text-gray-500'>{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} className='absolute top-1 right-5'>
            <XCircleIcon size={40} />
          </TouchableOpacity>
        </View>
        <View className='bg-white mt-5 p-4 flex-row items-center'>
          <Image
            source={{
              uri: 'https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg'
            }}
            className='h-7 w-7 rounded-full'
          />
          <Text className='flex-1 ml-3'>Deliver in 50-70 min</Text>
          <TouchableOpacity>
            <Text className='text-[#2563eb]'>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            marginTop: 20,
            flex: 1
          }}
        >
          {groupsList?.map((item) => (
            <View className='bg-white flex-row justify-between border-b border-gray-100 p-3' key={item.id}>
              <View className='flex-row gap-3 items-center'>
                <Text className='text-[#2563eb]'>{item?.quantity} x</Text>
                <Image
                  className='h-10 w-10 rounded-full'
                  source={{
                    uri: item.image
                  }}
                />
                <Text>{item.name}</Text>
              </View>
              <View className='flex-row items-center gap-3'>
                <Text>
                  <Currency quantity={item.price * item.quantity!} currency='GBP' />
                </Text>
                <TouchableOpacity onPress={() => dispatch(removeFromBasket(item.id))}>
                  <Text className='text-[#2563eb]'>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>
              <Currency quantity={totalPrice} currency='GBP' />
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Deliver Fee</Text>
            <Text className='text-gray-400'>
              <Currency quantity={5.99} currency='GBP' />
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text>Order total</Text>
            <Text className='font-semibold'>
              <Currency quantity={totalPrice + 5.99} currency='GBP' />
            </Text>
          </View>
          <TouchableOpacity>
            <View className='py-4 items-center bg-[#2563eb] rounded-md'>
              <Text className='font-semibold text-base text-white'>Place Order</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
