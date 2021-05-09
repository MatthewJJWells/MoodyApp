import { StyleSheet, Platform, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal:5,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    alignItems: 'center',
  },
  box: {
    width: '100%'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 300,
    height: 50,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fefefe',
    // backgroundColor: 'red',
    marginVertical: 7.5,
  },
  textInputStyle: {
    color: '#fefefe',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  footer: {
    display: 'flex',
    // backgroundColor: '#46bb81',
    backgroundColor: '#a178b1',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 2
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fefefe',
    marginVertical: 7.5,
  },
  buttonText: {
    textAlign: 'center'
  }

});

export default styles;