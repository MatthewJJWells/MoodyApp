import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a178b1',
    paddingTop: 30,
    alignItems: 'center',
  },
  entriesContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    overflow: 'scroll',
    width: width,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#fefefe',
    fontSize: 24,
    paddingBottom: 5,
  },
  dashboard_header: {
    borderBottomColor: '#fefefe',
    borderBottomWidth: 2,
    width: '100%',
  },
});

export default styles;
