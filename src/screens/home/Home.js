import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { Ionicons, Fontisto}  from '@expo/vector-icons';
import ProductList from '../products/ProductList';
import Carousel from '../../component/carousel/Carousel';
import ProductHeader from '../../component/products/ProductHeader';
import NewProduct from '../../component/products/NewProducts';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Ionicons name="locate-outline" size={24} />
         
          <Text style={styles.locationText}>Lagos, Nigeria</Text>
          <View style={{alignItems: "flex-end"}}>
            <View style={styles.cartCount}>
             <Text style={styles.cartNumber}>8</Text>  
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={19}/>
             </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <ProductList/>
        <Carousel/>
        <ProductHeader/>
        <NewProduct/>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 22,
    marginTop: SIZES.small,
  },
  locationText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:"green",
    zIndex: 999
  },
  cartNumber:{
    fontWeight:"600",
    fontSize: SIZES.xSmall,
    color: COLORS.lightWhite,
  

  },
});