import React, {useState, useEffect} from 'react';
import {View, TextInput, Alert, ActivityIndicator, Text} from 'react-native';
import {useDataApi} from '../hooks/useDataApi';
import Screens from '../styles/Screens';
import Forms from '../styles/Forms';

import Colors from '../styles/Colors';
import Typo from '../styles/Typo';
import ShowList from './ShowList';

/**
 * Main component launched on start. handles searching shows on the API and displaying them in a ShowList Component.
 * @author @TKY2048
 */
const Home = props => {
  const {navigation} = props;

  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [{data, isLoading, isError}, setURL] = useDataApi(undefined, undefined);

  useEffect(() => setWordCount(text.split(' ').length), [text]);

  useEffect(() => {
    if (text !== '') {
      const url = `https://api.tvmaze.com/search/shows?q=${text.replace(
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
