import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductList =() =>{
    const navigation = useNavigation();
  return (
    <View>
       <View style={styles.container}> 
      <Text style={styles.productHeaderText}>Find Product</Text>
      <Text style={styles.productText}> View Available Products</Text>
    </View>
    <View style={styles.searchContainer}>
       <TouchableOpacity>
    <Feather name='search' size={24} style={styles.searchIcon}/>
        </TouchableOpacity>
         <View style={styles.searchWrapper}>
        <TextInput
       value=''
       placeholder='what are you looking for'
       onPressIn={()=> navigation.navigate("Search")}
       style={styles.searchInput}
    />

     </View>
     <View>
        <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
        </TouchableOpacity>
    </View>
    </View>
    
    </View>
  )
}

export default ProductList ;
const styles = StyleSheet.create({
    container: {
   width: "100%",
   marginHorizontal: 22
     
    },
    productHeaderText: {
      fontSize: SIZES.medium,
      color: COLORS.black,
      marginTop:SIZES.small,

    },
    productText: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        marginTop: SIZES.xSmall,
      },

    searchContainer: {
        flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: COLORS.secondary,
      borderRadius: SIZES.medium,
      marginVertical: SIZES.medium, 
      marginHorizontal: SIZES.small,
      height: 50
    },
    searchIcon:{
     marginHorizontal: SIZES.small,
     color: COLORS.gray,
     marginTop: SIZES.small,
    },
    searchWrapper:{
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        width: "100%",
        height:"100%",
        paddingHorizontal: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.primary,
        alignItems:"center",
        justifyContent:"center"
    },
    
  });