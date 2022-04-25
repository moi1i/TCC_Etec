import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";

import { Input } from "react-native-elements";

import styles from "../styles/Slogin";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        translucent={true}
        backgroundColor={"white"}
      />
      <ImageBackground
        source={require("../images/fundo00.png")}
        style={styles.image}
        resizeMode={"cover"}
        blurRadius={1}
      >
        <View style={styles.container2}>
          <ScrollView
            style={styles.scroll}
            keyboardShouldPersistTaps={"always"}
          >
            <Text style={styles.title}>Login</Text>

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
              color={'black'}
            />

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.viewB}>
              <TouchableOpacity
                style={styles.botao2}
                onPress={() => {
                  navigation.navigate("Cadastro");
                }}
              >
                <Text style={styles.text2}>Não possui cadastro?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.viewC}>
              <TouchableOpacity
                style={styles.botao3}
                onPress={() => {
                  Alert.alert("Restauração de senha", "Em breve...");
                }}
              >
                <Text style={styles.text2}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
