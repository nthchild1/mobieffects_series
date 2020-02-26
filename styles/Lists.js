import {StyleSheet} from 'react-native';
import Colors from './Colors';

const Lists = StyleSheet.create({
  default: {
    flex: 1,
    width: '100%',
  },
  HomeScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.vibrant,
  },
  LyricsScreen: {
    alignItems: 'center',
  },
});

export default Lists;
