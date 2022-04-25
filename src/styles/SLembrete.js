import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTop: {
    justifyContent: "center",
    backgroundColor: "#fae278",
    alignSelf: "flex-start",
    marginTop: 40,
    marginLeft: 20,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  title: {
    fontSize: 25,
    alignSelf: "flex-start",
    fontWeight: "700",
    marginLeft: 25,
    color: "black",
    margin: 20,
    marginTop: 35,
  },
  text: {
    fontWeight: "600",
    color: "black",
    fontSize: 18,
    marginTop: 40,
    marginLeft: 40,
    alignSelf: "flex-start",
  },
  text2: {
    fontSize: 15,
    fontWeight: '700'
  },
  view0: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 18,
    paddingLeft: 8,
    alignSelf: "center",
    elevation: 1,
  },
  view02: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 18,
    paddingLeft: 8,
    alignSelf: "center",
    marginBottom: 40,
    elevation: 1
  },
  input: {
    alignSelf: "center",
    width: 250,
    padding: 15,
    borderRadius: 15,
  },
  scroll: {
    flex: 1,
  },
  botao: {
    backgroundColor: "#fae278",
    padding: 13,
    margin: 20,
    width: 130,
    alignItems: "center",
    borderRadius: 11,
    elevation: 1,
    alignSelf: "center",
  },
  container2: {
    backgroundColor: "#fffceb",
    width: '90%',
    borderRadius: 25,
    elevation: 3,
    paddingVertical: 30,
  },
});

export default styles;
