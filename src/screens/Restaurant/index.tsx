/* eslint-disable react-hooks/exhaustive-deps */
//import liraries
import { useRoute, RouteProp, useNavigation, ParamListBase } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ScrollView, Image, TouchableOpacity, Text } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IFeatured } from '../../types'
import { ArrowLeftIcon, ChevronRightIcon, StarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { useAppDispatch } from '../../redux/store'
import DishCard from './DishCard'
import BasketIcon from './BasketIcon'
import { setRestaurant } from '../../redux/reducer/restaurantSlice'

type ParamList = {
  Restaurant: IFeatured
}
const RestaurantScreen = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const route = useRoute<RouteProp<ParamList, 'Restaurant'>>()
  const { id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat } = route.params

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        long,
        lat
      })
    )
  }, [])

  return (
    <>
      <BasketIcon />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50
        }}
      >
        <View className='relative'>
          <Image
            source={{
              uri: imgUrl
            }}
            className='w-full h-56 bg-gray-300 p-4'
          />
          <TouchableOpacity
            className='p-2 bg-gray-200 rounded-full w-8 h-8 items-center justify-center absolute top-14 left-5'
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color={'#2563eb'} />
          </TouchableOpacity>
        </View>
        <View className='bg-white px-4'>
          <View className='pt-4'>
            <Text className='text-3xl font-semibold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon size={22} opacity={0.5} color={'#2563eb'} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-[#2563eb]'>{rating}</Text> . {genre}
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <MapPinIcon size={22} opacity={0.5} color={'gray'} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-gray-500 text-xs'>Nearby . </Text>
                  {address}
                </Text>
              </View>
            </View>
            <Text className='mt-2 pb-4 text-gray-500' numberOfLines={3} ellipsizeMode='tail'>
              {shortDescription}
            </Text>
          </View>
          <TouchableOpacity className='flex-row items-center space-x-2 py-4 border-t border-gray-200'>
            <QuestionMarkCircleIcon size={22} color={'gray'} />
            <Text className='pl-2 flex-1 text-md font-bold'>Have a food allergy</Text>
            <ChevronRightIcon size={22} color={'#2563eb'} />
          </TouchableOpacity>
        </View>
        <View className='pb-20'>
          <Text className='pt-6 font-bold text-xl p-4'>Menu</Text>
          <View>
            {dishes?.map((item) => (
              <DishCard
                key={item.id}
                id={item.id}
                description={item.description}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen
