//import liraries
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

interface ICategoryCardProps {
  imgUrl: string
  title: string
}
const CategoryCard = (props: ICategoryCardProps) => {
  const { imgUrl, title } = props
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl
        }}
        className='h-20 w-20 rounded'
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
