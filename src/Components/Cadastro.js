import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";

import styles from "../styles/SCadastro";

export default function Cadastro( { navigation } ) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/fundoImagem.jpg")}
        style={styles.image}
        resizeMode={"cover"}
        blurRadius={1}
      >
        <View style={styles.container2}>
          <ScrollView style={styles.scroll}>
          <Text style={styles.title}>Cadastro</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            secureTextEntry={true}
          />

          <View style={styles.viewB}>
          <TouchableOpacity
            style={styles.botao2}
            onPress={() => {
              navigation.navigate('Login')
            }}
          >
            <Text style={styles.text2}>Já possui uma conta?</Text>
          </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              navigation.navigate('Login')
            }}
          >
            <Text style={styles.text}>Cadastrar</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
    //XD
  );
}
