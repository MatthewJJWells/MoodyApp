import { StyleSheet, Platform } from 'react-native';

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
    color: '#fefefe',
    fontSize: 30,
    position: 'absolute',
    top: 40,
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
