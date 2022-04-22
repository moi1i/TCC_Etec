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

export default function Login( { navigation }) {
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
                  navigation.navigate('Cadastro')
                }}
              >
                <Text style={styles.text2}>Não possui cadastro?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                navigation.navigate('Home')
              }}
            >
              <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>

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
