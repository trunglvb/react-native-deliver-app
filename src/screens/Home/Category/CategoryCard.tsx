//import liraries
import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'

interface ICategoryCardProps {
  imgUrl: string
  title: string
}
const CategoryCard = (props: ICategoryCardProps) => {
  const { imgUrl, title } = props
  return (
    <TouchableOpacity className='relative'>
      <Image
        source={{
          uri: imgUrl
        }}
        className='h-20 w-20 rounded'
      />
      <Text className='absolute bottom-1 left-1 text-white font-semibold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
