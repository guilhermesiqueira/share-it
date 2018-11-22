import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    margin: 16,
  },

  content: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 3,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  body: {
    marginTop: 3,
  },
});
