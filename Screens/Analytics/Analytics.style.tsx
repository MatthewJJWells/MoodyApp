import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#a178b1',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    alignItems: 'center',
    position: 'relative',
  },
  card: {
    backgroundColor: '#fefefe',
    borderRadius: 10,
  },
  cardTitle: {
    color: '#fefefe',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
});

export default styles;
