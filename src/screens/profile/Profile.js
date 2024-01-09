import React from 'react'
import { View, Text, SafeAreaView, StyleSheet , Image, TouchableOpacity, Alert} from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../store';
import { resetSignUpData } from '../../redux/signUpSlice';
const Profile =() =>{
  const  navigation = useNavigation();
  const products = useAppSelector((state) => state.products);
  const product= {...products[0]}
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    navigation.navigate("Login")
  dispatch(resetSignUpData());
  Alert.alert('Logout', 'Logout Successful');
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>  
    <View >
    <Image style={styles.cover} source={require('../../assets/images/space.jpg')}/>
    <View style={styles.profileContainer}>
    <Image style={styles.image} source={require('../../assets/images/userDefault.png')}/>
    </View>
     </View>
     <Text style={styles.nameText}>name</Text>
     <View style={styles.emailWrapper}>
      <Text style={styles.emailText}>email..@gmail.com</Text>
     </View>
     <TouchableOpacity style={styles.menuItem}>
     <Ionicons name= "heart"size={24} color={COLORS.primary} style={styles.icon}/>
      <Text style={styles.menuText}>Favourites</Text>
     </TouchableOpacity>
     <View style={styles.line}/>
     <TouchableOpacity style={styles.menuItem}>
     <Ionicons name= "heart"size={24} color={COLORS.primary} style={styles.icon}/>
      <Text style={styles.menuText}>Orders</Text>
     </TouchableOpacity>
     <View style={styles.line}/>
     <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("ProductDetails", {
      category: product.category,
      price: product.price,
      description: product.description,
      image: product.image
     })}>
     <Ionicons name= "heart"size={24} color={COLORS.primary} style={styles.icon}/>
      <Text style={styles.menuText}>Product Details</Text>
     </TouchableOpacity>
     <View style={styles.line}/>
     <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate("ViewProduct")}>
     <Ionicons name= "heart"size={24} color={COLORS.primary} style={styles.icon}/>
      <Text style={styles.menuText}>Available Products</Text>
     </TouchableOpacity>
     <View style={styles.line}/>
     <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
     <Ionicons name= "heart"size={24} color={COLORS.primary} style={styles.icon} />
      <Text style={styles.menuText}>Logout</Text>
     </TouchableOpacity>
     <View style={styles.line}/>
     </View>
    </SafeAreaView>
  )
}

export default Profile
const styles = StyleSheet.create({
  container: {
flex: 1,
backgroundColor: COLORS.lightWhite 
  },
  cover: {
    height: 290,
    width: "100%",
    resizeMode: "cover"
  },
  image:{
    height: 155,
    width: 155,
    resizeMode: "cover",
    borderRadius: 999,
    borderWidth: SIZES.xxSmall -3,
    marginTop: -90,
    borderColor: COLORS.primary
  },
  profileContainer: {
    flex: 1,
    alignItems: "center"
  },
  nameText: {
    color: COLORS.primary,
    marginTop: SIZES.xLarge * 3, 
    marginBottom: SIZES.xxSmall,
    textAlign: "center"
  },
  emailText: {
    color: COLORS.primary,
    textAlign: "center"
  },
  emailWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    justifyContent:"center",
    alignItems:"center",
    height: SIZES.large*2,
    marginBottom: SIZES.small
       },
  menuText: {
    color: COLORS.primary,
    marginTop: SIZES.small , 
    textAlign: "center",
    fontWeight: "600",
    marginLeft: SIZES.large
  },
  menuItem: {
    flexDirection: "row",
    paddingHorizontal: SIZES.large,
    marginVertical: SIZES.xxSmall 
  },
  icon:{
    marginTop: SIZES.xxSmall
  },
  line: {
    borderBottomWidth: 0.2,
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.large +10,
    borderColor: COLORS.gray,
  }
});