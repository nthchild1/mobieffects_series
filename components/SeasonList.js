import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
} from 'react-native';
import WebView from 'react-native-webview';
import HTML from 'react-native-render-html';
import Typo from '../styles/Typo';

/**
 * Displays a list of given episode as a list of seasons
 * @param {array} seasons - The list of episodes grouped by seasons
 * @author @TKY2048
 */
const SeasonList = ({seasons}) => {
  const data = Object.keys(seasons).map((key, index) => {
    return seasons[key];
  });

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

  return data.map((season, index) => {
    return (
      <View>
        <Text> {`Temporada ${index + 1}`} </Text>
        {season.map(episode => {
          console.log(episode);
          const imageURL =
            episode.image && 'medium' in episode.image
              ? episode.image.medium
              : null;

          return (
            <View>
              <Image
                style={{width: 100, height: 160}}
                source={{uri: imageURL}}
              />
              <Text style={[Typo.altBold, {color: 'white', margin: 10}]}>{episode.name}</Text>
              <HTML
                html={episode.summary}
                renderers={renderers}
                ignoredStyles={['width', 'height']}
                baseFontStyle={{
                  fontSize: 15,
                  color: '#FFFFFF',
                }}
                imagesMaxWidth={100}
                staticContentMaxWidth={160}
                onLinkPress={(evt, href) => onLinkPress(href)}
              />
            </View>
          );
        })}
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

export default SeasonList;
