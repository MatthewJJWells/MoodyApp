import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: 'center',
    backgroundColor: '#a178b1',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    alignItems: 'center',
  },
  entriesContainer: {
    width: width,
    flex: 1,
    borderColor: '#fefefe',
    borderWidth: 2,
  },
});

export default styles;
