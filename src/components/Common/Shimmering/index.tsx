/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { Animated, Dimensions, StyleProp, View, ViewStyle, StyleSheet, LayoutChangeEvent } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

interface IShimmeringProps {
  colors?: Array<string>
  gradientStyle?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle> & { width: number | '100%'; height: number | '100%' }
}

const GREY = 'rgb(234, 234, 234)'
const shimmeringAnimatedValue = new Animated.Value(0)
const ShimmringAnimation = Animated.loop(
  Animated.timing(shimmeringAnimatedValue, {
    useNativeDriver: false,
    delay: 1200,
    duration: 750,
    toValue: 1
  })
)

const Shimmering = (props: IShimmeringProps) => {
  const animation: Animated.CompositeAnimation = ShimmringAnimation
  const gradientColors = [GREY, '#fff', GREY]
  const [viewWidth, setViewWidth] = useState<number>(-1)
  const { colors, gradientStyle, wrapperStyle } = props
  const width = Dimensions.get('screen').width
  const loadingStyle = { backgroundColor: GREY }
  const startAnimation = () => {
    animation.start()
  }

  const _getLeftValue = () => {
    return shimmeringAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-viewWidth, viewWidth]
    })
  }
  const left = _getLeftValue()
  const _onLayoutChange = (event: LayoutChangeEvent) => {
    setViewWidth(event.nativeEvent.layout.width)
    startAnimation()
  }

  return (
    <View
      style={{
        width: wrapperStyle?.width ?? width,
        height: wrapperStyle?.height ?? 80
      }}
    >
      <View style={[styles.container, loadingStyle, wrapperStyle]} onLayout={(event) => _onLayoutChange(event)}>
        <Animated.View
          style={[
            {
              flex: 1,
              left
            },
            gradientStyle
          ]}
        >
          <LinearGradient
            colors={colors || gradientColors}
            start={{ x: 0.3, y: 0.2 }}
            end={{ x: 0.8, y: 0.5 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
})
export default Shimmering
