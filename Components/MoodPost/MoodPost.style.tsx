import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  moodPost: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '95%',
    // height: 100,
    borderRadius: 10,
    backgroundColor: '#fefefe',
    marginVertical: 7.5,
  },
  fieldTitle: {
    fontSize: 11,
    color: '#664C70',
  },
  item: {
    color: '#664C70',
    fontSize: 22,
  },
  section1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    backgroundColor: '#c898db',
    height: '100%',
    flex: 1.5,
  },
  section2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 2,
  },
  section3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1.5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fefefe',
  },
  recordContainer: {
    width: '100%',
  },
  date_mood_int: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: '#cecece',
    borderBottomWidth: 1,
  },
  date_time: {
    textAlign: 'center',
  },
  note_container: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
  },
  noteText: {
    fontSize: 16,
    color: '#664C70',
  },
  arrow_container: {
    display: 'flex',
    paddingTop: 15,
    paddingBottom: 5,
  },
});

export default styles;
