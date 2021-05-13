import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#a178b1',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    fontSize: 35,
    position: 'absolute',
    top: 50,
  },
  moodContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    height: 200,
    // backgroundColor: '#fefefe',
  },
  toggleContainer: {
    width: 80,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: width,
    height: 60,
    backgroundColor: '#fefefe',
    position: 'absolute',
    bottom: 0,
  },
  addMoodBtn: {
    color: '#fefefe',
  },

  textInput: {
    paddingLeft: 10,
  },
});

export default styles;
