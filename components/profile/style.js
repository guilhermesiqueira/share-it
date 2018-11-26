import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  content: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },

  image: {
    margin: 30,
    marginBottom: 10,
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  row: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
  },

  col: {
    width: '50%',
    borderWidth: 10,
    borderColor: 'transparent',
    alignItems: 'center',
  },

  thread: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
  },

  logout: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: '#F3903D',
    padding: 5,
    borderRadius: 2,
  },

  exit: {
    color: 'white',
  },

  friends: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  },

  friend: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
