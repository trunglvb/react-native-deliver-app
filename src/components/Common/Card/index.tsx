//import liraries
import React from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { IFeatured } from '../../../types'

type IFeaturedCardProps = IFeatured

const FeaturedCard = (props: IFeaturedCardProps) => {
  const { id, dishes, shortDescription, long, lat, imgUrl, title, rating, genre, address } = props
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  return (
    <TouchableOpacity
      className='rounded'
      onPress={() => {
        navigation.navigate('Restaurant', {
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
      }}
    >
      <Image
        source={{
          uri: imgUrl
        }}
        className='h-36 w-64 object-cover rounded-t-sm'
      />
      <View className='bg-white px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center gap-1'>
          <StarIcon color={'#2563eb'} opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-[#2563eb]'> {rating}</Text> . {genre}
          </Text>
        </View>
        <View className='flex-row items-center gap-2 '>
          <MapPinIcon size={22} color={'gray'} opacity={0.4} />
          <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(FeaturedCard)
