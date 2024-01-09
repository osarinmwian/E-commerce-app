import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet , Image} from 'react-native'
import { COLORS, SIZES } from '../../constants/theme';
import {  Ionicons } from '@expo/vector-icons';

const ProductCard =({image, category, price, onPress, location}) =>{
  
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
    <View style={styles.imageContainer}>
     <Image style={styles.image} source={image}/>
     </View>
     <View style={styles.details}>
      <Text style={styles.title} numberOfLines={1}>{category}</Text>
      <Text style={styles.supplier} numberOfLines={1}>{location}</Text>
      <Text style={styles.price}>&#x20A6;{price}</Text>
      <TouchableOpacity style={styles.addBtn}>
       <Ionicons  name="add-circle" size={25} color={COLORS.primary}/>
      </TouchableOpacity>
     </View>
    </View>
    </TouchableOpacity>
  )
}

export default ProductCard;
const styles = StyleSheet.create({
    container: {
  marginEnd: 10,
  width:170,
  height: 250,
  borderRadius:SIZES.medium,
  backgroundColor: COLORS.secondary
    },
   imageContainer: {
    flex: 1,
    width: 160,
    marginLeft: SIZES.small/2,
    marginTop: SIZES.small/2,
    borderRadius: SIZES.small,
    overflow: "hidden",
   

   },
   image: {
    height: "120%",
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover"
   },
   details: {
    padding: SIZES.small
   },
   title: {
    fontSize: SIZES.medium,
    marginBottom: 2
   },
   supplier: {
    fontSize: SIZES.small,
    marginBottom: 2,
    color: COLORS.gray
   },
   price: {
    fontSize: SIZES.medium,
    marginBottom: 2
   },
   addBtn: {
  position: "absolute",
  bottom: SIZES.small,
  right: SIZES.small
   },
  });