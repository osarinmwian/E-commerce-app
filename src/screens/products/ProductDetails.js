import React,{useRef} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme';
import { Ionicons,MaterialCommunityIcons, AntDesign, Fontisto}  from '@expo/vector-icons';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Paystack } from 'react-native-paystack-webview';
import { payStack_KEY } from '../../utils';
const ProductDetails =({navigation}) =>{
  const paystackWebViewRef = useRef(null);
  const {price, category, description, image, location} = useRoute().params ?? ""
  const amount = price.replaceAll(",","")
  const [successfulPayment, setSuccessfulPayment] = useState(false)
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1);
 }
 const decrement = () => {
if(count > 1){
  setCount(count - 1);
}
}
  return (
 
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name= "chevron-back-circle"size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {}}>
        <Ionicons name= "heart"size={24} color={COLORS.primary}/>
        </TouchableOpacity>
    </View>
    <Image style={styles.image} source={image}/>
    <View style={styles.details}>
    <View style={styles.titleRow}>
     <Text style={styles.title}>{category}</Text>
     <View style={styles.priceWrapper}>
     <Text style={styles.price}>&#x20A6;{price}</Text>
     </View>
     </View>
     <View style={styles.ratingRow}>
<View style={styles.rating}>
  {[1,2,3,4,5].map((index)=> (
     <Ionicons
     key={index} name= "star"size={24} color="gold"/>
  )) }
   <Text style={styles.ratingText}>(4.9)</Text>
</View>

<View style={styles.rating}>
 <TouchableOpacity onPress={()=>increment()}>
 <AntDesign name="pluscircleo" size={20} color="black" />
 </TouchableOpacity>
   <Text style={styles.ratingText}>{count}</Text>
   <TouchableOpacity onPress={()=>decrement()}>
   <AntDesign name="minuscircleo" size={20} color="black" />
 </TouchableOpacity>
</View>
     </View>
     <View style={styles.descriptionWrapper}>
<Text style={styles.description}>Description</Text>
<Text style={styles.descriptionText}>{description}</Text>
     </View>
     <View style={{marginBottom: SIZES.small}}>

      <View style={styles.location}>
        <View style={{flexDirection: "row"}}>
        <Ionicons name= "location-outline" size={20}/>
      <Text style={styles.locationText}> {location}</Text>
        </View>
        <View style={{flexDirection: "row"}}>
        <MaterialCommunityIcons name= "truck-delivery-outline" size={20}/>
      <Text> Free Delivery </Text>
        </View>
      </View>
     </View>
     <View style={styles.cartRow}>
      {successfulPayment ? (<TouchableOpacity  style={styles.paidBtn}>
<Text style={styles.cartTitle}>PAID</Text>
</TouchableOpacity>): (
        <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()} style={styles.cartBtn}>
        <Text style={styles.cartTitle}>BUY NOW</Text>
        </TouchableOpacity>
      )}


<TouchableOpacity onPress={()=> {}} style={styles.addCart}>
<Fontisto name="shopping-bag" size={19} color={COLORS.lightWhite}/>
</TouchableOpacity>
     </View>
    </View>

    <Paystack
       ref={paystackWebViewRef}
       paystackKey={payStack_KEY}
       billingEmail="paystackwebview@something.com"
       billingName='ada'
       currency='NGN'
       amount={amount}
       onCancel={(e) => {
         // handle response here
       }}
       onSuccess={(res) => {
         // handle response here
         setSuccessfulPayment(res)
        
       }}
     />
    </View>

  )
}

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
flex: 1, 
backgroundColor: COLORS.lightWhite,  
  },
  upperRow: {
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection: "row",
    top: SIZES.xxLarge,
    zIndex: 999,
    width: SIZES.width  -44,
    position: "absolute",
    marginHorizontal:20


  },
  details:{
marginTop: -SIZES.large,
backgroundColor: COLORS.lightWhite,
width: SIZES.width,
borderTopLeftRadius: SIZES.medium,
borderTopRightRadius: SIZES.medium,
  },
  image: {
  width: 40,
  height: "55%",
    aspectRatio: 1,
    resizeMode: "cover"
   },
   titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width -44,
    top: 20
   },
   title: {
    fontSize: SIZES.large,
   },
   priceWrapper: {
backgroundColor: COLORS.secondary,
borderRadius: SIZES.large
   },
   price: {
    fontSize: SIZES.large,
    paddingHorizontal: 10
   },
   ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width -10,
    top:5 
   },
   rating: {
    
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    top:SIZES.large,
    paddingHorizontal: 5
   
   }, 
   ratingText: {
    color: COLORS.black,
    marginHorizontal: SIZES.xSmall
   },
   descriptionWrapper: {
    marginTop: SIZES.medium * 2,
    marginHorizontal: SIZES.large,
   },
   description: {
    fontSize: SIZES.large -2,
   },
   descriptionText: {
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small
   },
   location: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: SIZES.large,
    backgroundColor:  COLORS.secondary,
    marginHorizontal: 12
   },
   locationText:{
    marginHorizontal: SIZES.xxSmall,
    marginTop: SIZES.xxSmall -3
   },
   cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width ,
   },
   cartBtn: {
    padding: SIZES.xSmall,
    backgroundColor:  COLORS.black,
    width: SIZES.width * 0.7,
    marginLeft: 12,
    borderRadius: SIZES.large
   },
   paidBtn:{
    padding: SIZES.xSmall,
    backgroundColor:  COLORS.primary,
    width: SIZES.width * 0.7,
    marginLeft: 12,
    borderRadius: SIZES.large
   },
   cartTitle: {
    color: COLORS.lightWhite,
    fontSize: SIZES.medium, 
    marginLeft: SIZES.small
   },
   addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: SIZES.small
   }
});