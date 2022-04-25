import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";

import { Input } from "react-native-elements";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "../styles/SCadastro";

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        translucent={true}
        backgroundColor={"white"}
      />
      <ImageBackground
        source={require("../images/fundo000.png")}
        style={styles.image}
        resizeMode={"cover"}
        blurRadius={1}
      >
        <View style={styles.container2}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.title}>Cadastro</Text>

            <Input
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="black"
              leftIcon={<Icon name="person" color="black" size={24} />}
            />

            <Input
              style={styles.input}
              placeholder="Digite seu email"
              placeholderTextColor="black"
              leftIcon={<Icon name="email" color="black" size={24} />}
            />
            <Input
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="black"
              secureTextEntry={true}
              leftIcon={<Icon name="lock" color="black" size={24} />}
            />

            <Input
              style={styles.input}
              placeholder="Confirme sua senha"
              placeholderTextColor="black"
              secureTextEntry={true}
              leftIcon={<Icon name="lock" color="black" size={24} />}
            />

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.text}>Cadastrar</Text>
            </TouchableOpacity>

            <View style={styles.viewB}>
              <TouchableOpacity
                style={styles.botao2}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.text2}>Já possui uma conta?</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
    //XD
  );
}
