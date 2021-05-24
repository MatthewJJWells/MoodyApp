import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: width,
    backgroundColor: '#a178b1',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  header: {
    display: 'flex',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#fefefe',
    width: width,
  },
  headerText: {
    textAlign: 'center',
    color: '#fefefe',
    fontSize: 30,
  },
  buttons: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fefefe',
    backgroundColor: '#fefefe',
    marginVertical: 7.5,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default styles;
