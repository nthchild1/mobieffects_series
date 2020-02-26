import React from 'react';
import {View, Text, Image} from 'react-native';

const SingleShow = props => {
  const {name, image, summary} = props.route.params;

  const imageURL = image && 'medium' in image ? image.medium : null;

  return (
    <View>
      <Image source={{uri: imageURL}} style={{width: 200, height: 320}} />
      <Text>{name}</Text>
          <Text>{summary}</Text>
    </View>
  );
};

export default SingleShow;
