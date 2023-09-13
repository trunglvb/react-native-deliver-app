//import liraries
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'

type IFeaturedCardProps = {
  id?: string
  imgUrl: string
  title: string
  ratring: number
  genre: string
  address: string
  shortDescription?: string
  dishes?: string[]
  long?: number
  lat?: number
}
const FeaturedCard = (props: IFeaturedCardProps) => {
  const { imgUrl, title, ratring, genre, address } = props
  return (
    <TouchableOpacity className='rounded'>
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
            <Text className='text-[#2563eb]'> {ratring}</Text> . {genre}
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
