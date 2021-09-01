import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFood} from './action/food';

const FoodList = () => {
  const dispatch = useDispatch();

  const deleteCurrent = key => dispatch(deleteFood(key));

  const foods = useSelector(state => state.foodReducer.foodList);

  return (
    <FlatList
      style={styles.listContainer}
      data={foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={data => (
        <View style={styles.list}>
          <Text style={styles.listText}>{data.item.name}</Text>
          <View style={{alignSelf: 'center'}}>
            <Icon
              name="trash"
              size={26}
              color="black"
              onPress={() => deleteCurrent(data.item.key)}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 6,
  },
  listText: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default FoodList;
