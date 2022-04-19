import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";

import styles from "../styles/Slogin";

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/fundoImagem2.jpg")}
        style={styles.image}
        resizeMode={"cover"}
        blurRadius={1}
      >
        <View style={styles.container2}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.title}>Login</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu email"

            />

            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
            />

            <View style={styles.viewB}>
              <TouchableOpacity
                style={styles.botao2}
                onPress={() => {
                  Alert.alert("Tudo certo", "Cadastro efetuado com sucesso!!");
                }}
              >
                <Text style={styles.text2}>Não possui cadastro?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                Alert.alert("Tudo certo", "Login efetuado com sucesso!!");
              }}
            >
              <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.viewC}>
              <TouchableOpacity
                style={styles.botao3}
                onPress={() => {
                  Alert.alert("Tudo certo", "Cadastro efetuado com sucesso!!");
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
