import React, {useState, useEffect} from 'react';
import {View, TextInput, Alert, ActivityIndicator, Text} from 'react-native';
import {useDataApi} from '../hooks/useDataApi';
import Screens from '../styles/Screens';
import Forms from '../styles/Forms';

import Colors from '../styles/Colors';
import Typo from '../styles/Typo';
import ShowList from './ShowList';

const Home = props => {
  const {navigation} = props;

  const [text, setText] = useState('Artista');
  const [wordCount, setWordCount] = useState(0);
  const [{data, isLoading, isError}, setURL] = useDataApi(undefined, undefined);

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', `No se encontró nada con ${text}`, [{text: 'OK'}]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => setWordCount(text.split(' ').length), [text]);

  useEffect(() => {
    if (text !== '') {
      const url = `http://api.tvmaze.com/search/shows?q=${text.replace(
        ' ',
        '%20',
      )}`;
      setURL(url);
    }
  }, [setURL, text, wordCount]);

  return (
    <View style={[Screens.default, Screens.HomeScreen]}>
      <Text style={[Typo.altBold, Typo.extra, {color: 'white'}]}>Buscar</Text>
      <TextInput
        value={text}
        style={Forms.textInput}
        onChangeText={value => setText(value)}
      />
      {!isLoading && !isError && (
        <ShowList shows={data} navigation={props.navigation} />
      )}
      {isLoading && (
        <ActivityIndicator
          style={{margin: 20}}
          size="large"
          color={Colors.pale}
        />
      )}
    </View>
  );
};

export default Home;
