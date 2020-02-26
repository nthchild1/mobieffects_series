import React from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';

const ShowList = props => {
  const {shows} = props;

  function Item({show}) {
    const {image, name} = show;

    const imageURL = image && 'medium' in image ? image.medium : null;

    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SingleShow', {...show})}>
        <View>
          <Image source={{uri: imageURL}} style={{width: 100, height: 160}} />
        </View>
        <View>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList
      style={{width: '100%'}}
      data={shows}
      renderItem={({item}) => <Item show={item.show} />}
      keyExtractor={item => item.id}
    />
  );
};

export default ShowList;
