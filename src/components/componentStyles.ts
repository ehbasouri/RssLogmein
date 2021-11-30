import {StyleSheet} from 'react-native';

export const componentStyles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingTop: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 6,
  },
  back: {
    color: 'blue',
    fontWeight: 'bold',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    width: 40,
    fontSize: 18,
    flex: 4,
  },
});
