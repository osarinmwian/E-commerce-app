import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SIZES } from '../../constants/theme';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../../utils';
import { useNavigation } from '@react-navigation/native';
const NewProduct=() =>{
  const navigation = useNavigation();
  return (
    <View style={{marginTop: SIZES.medium}}>
    <FlatList
    data={PRODUCTS}
    renderItem={(({item})=> <ProductCard 
    image={item.image} 
    category={item.category}
     price={item.price}
     location={item.location}
     onPress={()=> navigation.navigate("ProductDetails", {
      image: item.image,
      category: item.category,
      description: item.description,
      price: item.price,
      location: item.location
     })}
     
     /> 
     
     )}
    horizontal
    showsHorizontalScrollIndicator={false}
    bounces={false}
    contentContainerStyle={{columnGap: SIZES.xSmall}}
   
    />
    </View>
    
  )
}

export default NewProduct;
const styles = StyleSheet.create({
    container: {
  marginTop: SIZES.medium,
  marginHorizontal: 12  
    },
    header:{
        flexDirection: "row",
        justifyContent:"space-between",
    },
    headerTitle: {
        fontSize: SIZES.xLarge -2
    },
    
  });