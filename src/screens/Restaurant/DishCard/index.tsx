//import liraries
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { IDishes } from '../../../types'
import Currency from 'react-currency-formatter'
import { PlusCircleIcon, MinusCircleIcon } from 'react-native-heroicons/solid'
import { IAppState, useAppDispatch } from '../../../redux/store'
import { addToBasket, removeFromBasket } from '../../../redux/reducer/basketSlice'
import { useSelector } from 'react-redux'

const DishCard = (props: IDishes) => {
  const { id, image, description, name, price } = props
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const items = useSelector((state: IAppState) => state.basket.items)
  const itemsLength = items?.filter((item) => item?.id === id).length
  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, image, description, name, price }))
  }
  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(id))
  }
  return (
    <View className='border-b border-gray-100'>
      <TouchableOpacity
        className='flex-row items-center justify-between w-full bg-white p-4 '
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className='flex-1 mr-4'>
          <Text className='text-lg mb-1'>{name}</Text>
          <Text className='text-gray-400' numberOfLines={2}>
            {description}
          </Text>
          <Text className='text-gray-400 mt-2'>
            <Currency quantity={price} currency='GBP' />
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: image
            }}
            className='h-20 w-20 bg-gray-300 rounded-md'
          />
        </View>
      </TouchableOpacity>

      {isPressed ? (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity
              disabled={itemsLength <= 0}
              onPress={handleRemoveFromBasket}
              className={itemsLength <= 0 ? 'opacity-50' : ''}
            >
              <MinusCircleIcon color={'#2563eb'} size={40} />
            </TouchableOpacity>

            <Text>{itemsLength}</Text>

            <TouchableOpacity onPress={handleAddToBasket}>
              <PlusCircleIcon color={'#2563eb'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default DishCard
