import React from 'react';
import {FlatList, View, Text} from 'react-native';

const ShowList = props => {
  const {shows} = props;

  function Item({name}) {
    return (
      <View>
        <Text>{name}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={shows}
      renderItem={({item}) => <Item name={item.show.name} image={item.show.image} />}
      keyExtractor={item => item.id}
    />
  );
};

export default ShowList;
