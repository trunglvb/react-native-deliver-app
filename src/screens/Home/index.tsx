//import liraries
import React from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../../components/Category'

// create a component
const urlAvatar: string =
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* header */}
      <View className='flex-row justify-between items-center px-4'>
        <View className='flex flex-row gap-2 items-center'>
          <Image
            source={{
              uri: urlAvatar
            }}
            className='h-7 w-7 p-4 bg-gray-300 rounded-full object-cover'
          />
          <View>
            <Text className='font-bold text-xs text-gray-400'>Deliver now!</Text>
            <View className='flex flex-row items-center gap-1'>
              <Text className='font-semibold text-lg'>Current Location</Text>
              <ChevronDownIcon size={20} />
            </View>
          </View>
        </View>
        <UserIcon size={34} />
      </View>
      {/* search */}
      <View className='flex-row items-center pb-2 space-x-2 mt-3 px-4'>
        <View className='flex-1 flex-row bg-gray-200 p-3 space-x-2'>
          <MagnifyingGlassIcon color={'gray'} />
          <TextInput placeholder='Restaurants and Cuisine' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon />
      </View>
      {/* Body */}
      <ScrollView className='bg-gray-200 '>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
