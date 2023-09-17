//import liraries
import { useRoute, RouteProp, useNavigation, ParamListBase } from '@react-navigation/native'
import React from 'react'
import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IFeatured } from '../../types'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

type ParamList = {
  Restaurant: IFeatured
}
const RestaurantScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const route = useRoute<RouteProp<ParamList, 'Restaurant'>>()
  const { id, imgUrl, title, ratring, genre, address, shortDescription, dishes, long, lat } = route.params

  return (
    <ScrollView>
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
    </ScrollView>
  )
}

export default RestaurantScreen
