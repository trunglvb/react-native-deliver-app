//import liraries
import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import { IAppState, useAppDispatch } from '../../redux/store'
import { XMarkIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

// create a component
const DeliveryScreen = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const restaurant = useSelector((state: IAppState) => state.restaurant.restaurant)
  return (
    <View className='bg-[#457bf0] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-4'>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <XMarkIcon size={35} color='white' />
          </TouchableOpacity>
          <Text className='text-lg text-white font-light'>Order Help</Text>
        </View>
        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-center items-center mb-1 gap-3'>
            <View>
              <Text className='text-gray-400 text-lg mb-1'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: 'https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg'
              }}
              className='h-20 w-20 object-cover rounded-md'
            />
          </View>
          <Progress.Bar indeterminate={true} color='#457bf0' />
          <Text className='mt-3 text-gray-500'>You order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          title={restaurant.title}
          description={restaurant.shortDescription}
          identifier='origin'
          pinColor='#457bf0'
        />
      </MapView>
    </View>
  )
}

export default DeliveryScreen
