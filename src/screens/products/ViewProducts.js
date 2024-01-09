import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme';
import ProductCard from '../../component/products/ProductCard';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTS } from '../../utils';

const ViewProduct=() =>{
    
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
    <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name= "chevron-back-circle"size={24} color={"white"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {}}>
        <Text style={styles.productText}>Products</Text>
        </TouchableOpacity>
    </View>
    <View >
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
        location: item.location,
       })}
     /> )}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    bounces={false}
    contentContainerStyle={{columnGap: SIZES.xSmall, paddingBottom:150}}
    ItemSeparatorComponent={() => <View style={styles.separator}/>}
    />
    </View>
    </SafeAreaView>
  )
}

export default ViewProduct;
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
    separator: {
      height: 16
    },
    upperRow: { 
        alignItems:"center",
        flexDirection: "row",
        marginBottom: SIZES.xLarge, 
        marginTop: SIZES.medium,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        paddingVertical: SIZES.xxSmall, 
        paddingLeft: SIZES.small,
    
      },
      productText: {
        marginHorizontal: SIZES.xxSmall,
        color: COLORS.lightWhite,
        fontSize: SIZES.medium
      }
  });