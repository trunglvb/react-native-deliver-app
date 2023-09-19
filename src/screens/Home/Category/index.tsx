//import liraries
import React, { useEffect, useState } from 'react'
import { ScrollView, FlatList } from 'react-native'
import CategoryCard from './CategoryCard'
import { getCategoryList } from '../../../apis/category.api'
import { ICategory } from '../../../types'
import Shimmering from '../../../components/Common/Shimmering'
import axios from 'axios'

// const { width: screenWidth } = Dimensions.get('screen')
// const width = screenWidth * 0.92 - 30

const Categories = () => {
  const [categoryList, setCategoryList] = useState<ICategory[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    getCategoryList().then((response) => {
      setCategoryList(response.data)
      setIsLoading(false)
    })
  }, [])
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 8,
        width: '100%'
      }}
    >
      {isLoading ? (
        <Shimmering
          wrapperStyle={{
            flex: 1,
            width: '100%',
            height: 80,
            borderRadius: 5
          }}
        />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categoryList}
          renderItem={({ item }) => <CategoryCard imgUrl={item.imgUrl} title={item.title} key={item.id} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 8
          }}
        />
      )}
    </ScrollView>
  )
}

export default Categories
