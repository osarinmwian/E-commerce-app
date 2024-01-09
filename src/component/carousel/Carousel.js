import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants/theme';


const Carousel =() =>{
    const slides =[
        require('../../assets/images/fn1.jpg'), 
        require('../../assets/images/fn2.jpg'), 
        require('../../assets/images/fn3.jpg'), 
        require('../../assets/images/fn4.jpg'), 
        require('../../assets/images/fn5.jpg'), 
    ]
  return (
    <View style={styles.sliderContainer}>
      <SliderBox
      images={slides}
      dotColor={COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: 15}}
      autoPlay
      circleLoop
      autoplayInterval={300}
      resizeMethod={'resize'}
      resizeMode={'cover'}
      paginationBoxStyle={{
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 10
      }}
      paginationBoxVerticalPadding={20}
      />
     
    </View>
  )
}

export default Carousel;
const styles = StyleSheet.create({
    sliderContainer: {
   width: "100%",   
    },
  });