import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  moodPost: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    height: 90,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fefefe',
    marginVertical: 7.5,
  },
  item: {
    color: '#664C70',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fefefe',
  },
  groupContainer: {
    width: '100%',
  },
  group1: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  group2: {
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
  },
});

export default styles;
