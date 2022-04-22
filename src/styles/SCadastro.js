import {StyleSheet} from 'react-native';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 0.69,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffceb',
    width: '85%',
    borderRadius: 25,
    elevation: 2,
  },
  text:{
    color: '#202020',
  },
  title: {
      fontSize: 25,
      margin: 25,
      marginTop: 30,
      color: '#2a2a2a',
      fontWeight: '700',
      textShadowRadius: 2,
      textShadowColor: "#fae588",
      alignSelf: 'center',
  },
  input: {
      backgroundColor: 'white',
      borderRadius: 10,
      width: 250,
      padding: 10,
      marginTop: 10,
      elevation: 2,
      alignSelf: 'center',
      alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%'
  },
  botao: {
      backgroundColor: '#fae278',
      padding: 13,
      margin: 30,
      width: 280,
      alignItems: 'center',
      borderRadius: 10,
      elevation: 1,
      alignSelf: 'center'
  },
  scroll: {
    width: '100%',
  },
  //style "Já tem uma conta?"
  botao2: {
    backgroundColor: '#fffceb',
    padding: 5,
    width: 150,
    alignItems: 'flex-end',
    borderRadius: 10,
  },
  viewB: {
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginTop: 5,
      marginRight: 25
  },

  text2:{
    color: '#2a2a2a',
    textDecorationLine: 'underline',
    fontWeight: '700'
  },

});

export default styles;