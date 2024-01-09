import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
const ProductHeader =() =>{
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View style={styles.header}>
      <Text style={styles.headerTitle}>New Products</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("ViewProduct")}>
      <Text style={styles.viewAll}>View all</Text>
      </TouchableOpacity>
    
    </View>
    </View>
  )
}

export default ProductHeader;
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
    viewAll: {
      fontSize: SIZES.large -2,
      color: COLORS.primary
  }
  });