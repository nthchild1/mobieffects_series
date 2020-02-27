import React from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import Typo from '../styles/Typo';

/**
 * Displays a list of shows results
 * @param {array} shows - The list of shows found
 * @author @TKY2048
 */
const ShowList = props => {
  const {shows} = props;

  function Item({show}) {
    const {image, name, language, genres} = show;
    console.log(show);
    const imageURL = image && 'medium' in image ? image.medium : null;

    return (
      <TouchableOpacity
        style={{margin: 10, display: 'flex', flexDirection: 'row'}}
        onPress={() => props.navigation.navigate('SingleShow', {...show})}>
        <View>
          <Image source={{uri: imageURL}} style={{width: 100, height: 160}} />
        </View>
        <View>
          <Text
            style={[Typo.altBold, Typo.large, {color: 'white', margin: 10}]}>
            {name}
          </Text>
          <Text style={[Typo.altBold, {color: 'white', margin: 10}]}>
            {language}
          </Text>
          <Text style={[Typo.altBold, {color: 'white', margin: 10}]}>
            {genres.join(', ')}
          </Text>
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
