import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import WebView from 'react-native-webview';
import HTML from 'react-native-render-html';
import {useDataApi} from '../hooks/useDataApi';
import SeasonList from './SeasonList';
import Typo from '../styles/Typo';
import Screens from '../styles/Screens';

/**
 * Displays the most important info of a show
 * @param {string} name - The list of episodes grouped by seasons
 * @param {string} image - The featured image of the show
 * @param {string} summary - The description of the show
 * @param {object} schedule - The time and day a show is aired
 * @param {string} network - The network on which the show is aired
 * @param {string} url - The url to the website of the show
 * @param {string} id - The id number for the show

 * @author @TKY2048
 */
const SingleShow = props => {
  const {
    name,
    image,
    summary,
    schedule: {time, days},
    network,
    url,
    id,
  } = props.route.params;

  useEffect(() => {
    const dataURL = `http://api.tvmaze.com/shows/${id}/episodes`;
    setURL(dataURL);
  }, [id, setURL]);

  const imageURL = image && 'medium' in image ? image.medium : null;
  const [seasons, setSeasons] = useState([]);
  const [{data, isLoading, isError}, setURL] = useDataApi(undefined, undefined);

  useEffect(() => {
    if (data && data.length > 0) {
      const seasonsArray = data.reduce(
        (result, item) => ({
          ...result,
          [item.season]: [...(result[item.season] || []), item],
        }),
        {},
      );
      setSeasons(seasonsArray);
    }
  }, [data, isLoading]);

  const renderers = {
    iframe: (htmlAttribs, children, convertedCSSStyles, passProps) => (
      <WebView
        key={passProps.key}
        source={{uri: htmlAttribs.src}}
        style={{
          width: '100%',
          height: 200,
        }}
      />
    ),
  };

  const onLinkPress = website => {
    Linking.openURL(website).catch(err =>
      console.error('Error de enlace.', err),
    );
  };

  const windowWidth = Dimensions.get('window').width;
  const imgWidth = windowWidth - 50;

  return (
    <ScrollView style={[Screens.default, Screens.SingleShow]}>
      <View style={{margin: 10, display: 'flex', flexDirection: 'row'}}>
        <Image source={{uri: imageURL}} style={{width: 200, height: 320}} />
        <View style={{alignContent: 'center', top: 40}}>
          <Text
            style={[Typo.altBold, {color: 'white', margin: 10}]}>{`${name} - ${
            network ? network.name : ''
          }`}</Text>
          {days.map(day => (
            <View>
              <Text style={[Typo.altBold, {color: 'white', margin: 10}]}>
                {day}
              </Text>
            </View>
          ))}
          <Text style={[Typo.altBold, {color: 'white', margin: 10}]}>
            {time}
          </Text>
        </View>
      </View>
      <HTML
        html={summary}
        renderers={renderers}
        ignoredStyles={['width', 'height']}
        baseFontStyle={{
          fontSize: 15,
          color: '#FFFFFF',
        }}
        imagesMaxWidth={imgWidth}
        staticContentMaxWidth={imgWidth}
        onLinkPress={(evt, href) => onLinkPress(href)}
      />
      <TouchableOpacity onPress={() => onLinkPress(url)}>
        <Text style={{color: 'white'}}>Sitio Web</Text>
      </TouchableOpacity>
      <SeasonList seasons={seasons} />
    </ScrollView>
  );
};

export default SingleShow;
