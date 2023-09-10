//import liraries
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

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
      <CategoryCard imgUrl='https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg' title='Tesdddt2' />
      <CategoryCard imgUrl='https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg' title='Test1' />
      <CategoryCard imgUrl='https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg' title='Test1' />
      <CategoryCard imgUrl='https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg' title='Test1' />
      <CategoryCard imgUrl='https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg' title='Test1' />
      <CategoryCard imgUrl='https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg' title='Test1' />
    </ScrollView>
  )
}

export default Categories
