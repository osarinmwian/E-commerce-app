import React from 'react'
import {  Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme';

const Button =({onPress, title}) =>{
  return (
   
       <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Text style={styles.touchableText}>{title}</Text>
        </TouchableOpacity>
  
  )
}

export default Button;
const styles = StyleSheet.create({
   
      touchable: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        padding: SIZES.medium
      },
      touchableText: {
        textAlign: "center",
        color: COLORS.lightWhite
      }
  });