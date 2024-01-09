
import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, FlatList } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme';
import { Feather, Ionicons } from '@expo/vector-icons';
import ProductCard from '../../component/products/ProductCard';
import { PRODUCTS } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import SortCard from '../../component/sort/SortCard';

const Search =() =>{
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const handleSort = (sortOption) => {
    if (sortBy === sortOption) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(sortOption);
      setSortOrder('asc');
    }
  };

  const filteredData = PRODUCTS?.filter(item =>
    `${item.category ?? ""} ${item.price ?? ""} ${item.location ?? ""} `.toLowerCase()
      .includes((searchQuery || "").toLocaleLowerCase()),
  );

  const sortedData = filteredData.slice().sort((a, b) => {
    if (sortBy === 'category') {
      return sortOrder === 'asc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
    } else if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'location') {
      return sortOrder === 'asc' ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location);
    }
    return 0;
  });
  return (
    <SafeAreaView>
    <View style={{marginHorizontal: 20}}>
       
    <View style={styles.searchContainer}>
       <TouchableOpacity>
       <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite} style={styles.searchIcon}/>
        </TouchableOpacity>
         <View style={styles.searchWrapper}>
        <TextInput
       value={searchQuery}
       placeholder='what are you looking for'
       onChangeText={handleSearch}
       style={styles.searchInput}
    />

     </View>
     <View>
        <TouchableOpacity style={styles.searchBtn}>
        <Feather name='search' size={24} color={COLORS.offwhite}/>
            
        </TouchableOpacity>
    </View>
    </View>
    <SortCard onPress={handleSort} />
    <FlatList
    data={sortedData}
    renderItem={(({item})=> 
    <ProductCard 
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
    contentContainerStyle={{columnGap: SIZES.xSmall, paddingBottom:220}}
    ItemSeparatorComponent={() => <View style={styles.separator}/>}
    />
    </View>
    </SafeAreaView>
  )
}

export default Search;
const styles = StyleSheet.create({
   
    container: {
   width: "100%",
   marginHorizontal: 22
     
    },
   
    searchContainer: {
        flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: COLORS.secondary,
      borderRadius: SIZES.medium,
      marginVertical: SIZES.medium, 
    
      height: 50
    },
    separator: {
      height: 16
    },
    searchIcon:{
     marginHorizontal: SIZES.small,
     color: COLORS.gray,
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
    sortButton: {
      color: COLORS.lightWhite,
     
      marginVertical: SIZES.xSmall,
    
      paddingHorizontal: SIZES.small,
      textAlign: "center",
      padding: SIZES.xxSmall -2,
    },
    sortWrapper: {
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.medium,
     marginBottom: SIZES.xSmall,
     marginRight: SIZES.xSmall
         },
    
  });