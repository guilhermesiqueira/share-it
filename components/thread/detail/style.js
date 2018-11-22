import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  all: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },

  share: {
    width: 25,
    height: 25,
    tintColor: 'black',
    position: 'absolute',
    margin: 8,
    top: 0,
    right: 0,
  },

  like: {
    width: 20,
    height: 20,
    marginRight: 16,
  },

  deslike: {
    width: 20,
    height: 20,
  },

  votes: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
    bottom: 0,
    margin: 8,
  },

  shareButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 3,
  },

  card: {
    width: '70%',
    borderRadius: 10,
    backgroundColor: 'white',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },

  body: {
    fontSize: 16,
    color: 'black',
    marginTop: 8,
  },

  tags: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginTop: 8,
  },

  content: {
    padding: 16,
    marginBottom: 22,
  },

  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },

  textVotes: {
    fontSize: 16,
    color: 'green',
    marginLeft: 16,
  },
});
