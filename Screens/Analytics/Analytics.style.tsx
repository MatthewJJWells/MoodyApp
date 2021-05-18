import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#a178b1',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    alignItems: 'center',
    position: 'relative',
  },
});

export default styles;
