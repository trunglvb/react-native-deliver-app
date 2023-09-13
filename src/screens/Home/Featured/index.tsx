/* eslint-disable react-hooks/exhaustive-deps */
//import liraries
import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import FeaturedCard from '../../../components/Common/Card'
import { IFeatured } from '../../../types'
import { getFeaturedList } from '../../../apis/category.api'
import Shimmering from '../../../components/Common/Shimmering'

interface IFeaturedProps {
  title: string
  description: string
}
const Featured = (props: IFeaturedProps) => {
  const { title, description } = props
  const [featuredList, setFeaturedList] = useState<IFeatured[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubscribed, setIsSubcribed] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFeaturedList()
      if (isSubscribed) {
        setFeaturedList(response.data)
        setIsLoading(false)
      }
    }
    fetchData()
    return () => {
      setIsSubcribed(false)
    }
  }, [])

  return (
    <View className='px-4 mt-4'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-lg font-semibold'>{title}</Text>
        <ArrowRightIcon size={20} color={'#2563eb'} />
      </View>
      <Text className='text-gray-500 text-xs'>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='pt-4 '
        contentContainerStyle={{
          gap: 8,
          width: '100%'
        }}
      >
        {isLoading ? (
          <Shimmering
            wrapperStyle={{
              flex: 1,
              width: '100%',
              height: 180,
              borderRadius: 5
            }}
          />
        ) : (
          featuredList?.map((item: IFeatured) => (
            <FeaturedCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              ratring={item.ratring}
              genre={item.genre}
              address={item.address}
            />
          ))
        )}
      </ScrollView>
    </View>
  )
}

export default React.memo(Featured)
