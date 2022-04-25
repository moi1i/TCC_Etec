import { StyleSheet } from "react-native";
import { textDecorationColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flex: 0.65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "85%",
    borderRadius: 25,
    elevation: 3,
    padding: 10,
  },
  text: {
    color: "#2a2a2a",
    fontSize: 15,
    fontWeight: '700'
  },
  title: {
    fontSize: 30,
    margin: 25,
    marginTop: 30,
    color: "#2a2a2a",
    fontWeight: "700",
    textShadowRadius: 2,
    textShadowColor: "#fae588",
    alignSelf: "center",
  },
  input: {
    borderRadius: 10,
    width: 250,
    padding: 10,
    marginTop: 10,
    alignSelf: "center",
    
  },
  botao: {
    backgroundColor: "#fae278",
    padding: 13,
    margin: 30,
    marginBottom: 15,
    width: 280,
    alignItems: "center",
    borderRadius: 10,
    elevation: 1,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  scroll: {
    width: "100%",
  },
  //botão "Não possui cadastro?"
  viewB: {
    justifyContent: "center",
    alignSelf: "center",
    margin: 5,
  },
  botao2: {
    padding: 5,
    width: 150,
    alignItems: "center",
    borderRadius: 10,
  },
  text2: {
    color: '#2a2a2a',
    fontWeight: "700",
  },

  //Esqueceu sua senha
  viewC: {
    justifyContent: "center",
    alignSelf: "center",
  },
  botao3: {
    padding: 5,
    width: 150,
    alignItems: "center",
    borderRadius: 10,
  },
});

export default styles;