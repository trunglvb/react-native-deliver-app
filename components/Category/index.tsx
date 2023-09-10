//import liraries
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

// create a component
const urlAvatar: string =
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        gap: 8
      }}
    >
      <CategoryCard imgUrl={urlAvatar} title='Tesdddt2' />
      <CategoryCard imgUrl='https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg' title='Test1' />
      <CategoryCard imgUrl='https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg' title='Test1' />
    </ScrollView>
  )
}

export default Categories
