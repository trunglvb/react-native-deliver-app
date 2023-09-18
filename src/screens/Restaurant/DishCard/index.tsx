//import liraries
import React from 'react'
import { View, Text } from 'react-native'
import { IDishes } from '../../../types'
import Currency from 'react-currency-formatter'

// create a component
const DishCard = (props: IDishes) => {
  const { id, image, description, name, price } = props
  return (
    <View>
      <Text className='text-lg mb-1'>{name}</Text>
      <Text className='text-gray-400'>{description}</Text>
    </View>
  )
}

export default DishCard
