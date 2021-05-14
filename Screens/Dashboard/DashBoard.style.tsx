import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a178b1',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    alignItems: 'center',
  },
  entriesContainer: {
    alignItems: 'center',
    display: 'flex',
    overflow: 'scroll',
    width: width,
    flex: 1,
    borderColor: '#fefefe',
    borderWidth: 2,
  },
  title: {
    textAlign: 'center',
    color: '#fefefe',
    fontSize: 24,
    paddingBottom: 5,
  },
});

export default styles;
