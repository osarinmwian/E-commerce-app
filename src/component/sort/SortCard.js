import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { SORT_DATA } from '../../utils';

const SortCard = ({ onPress }) => {


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSort(item.key)} style={styles.sortWrapper}>
      <Text style={styles.sortButton}>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleSort = (key) => {
    onPress(key);
  };

  return (
    <FlatList
      data={SORT_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    />
  );
};

export default SortCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  sortButton: {
    color: COLORS.lightWhite,
    paddingHorizontal: SIZES.xSmall,
    marginVertical: SIZES.xSmall,
    textAlign: 'center',

  },
  sortWrapper: {
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    marginBottom: SIZES.xSmall,
    marginRight: SIZES.xSmall,
  },
});