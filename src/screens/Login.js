//Importando Componentes do React-Native
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
  StatusBar,
} from "react-native";

//Importação React-Hook-Form
import { useForm, Controller } from "react-hook-form";

//Importando Yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Importando caixa de texto do React Native Elements
import { Input } from "react-native-elements";
//Importando styles
import styles from "../styles/Slogin";
//Importando Ícones do MaterialIcons do react-native-vector-icons
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Login({ navigation }) {
  const schema = yup.object({
    email: yup.string().email("Email inválido").required("Digite seu email"),
    senha: yup.string().required("Digite sua senha"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignIn(data) {
    console.log(data);
    navigation.navigate("Home")
  }

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
          <Text style={styles.title}>Login</Text>

          <Controller
            control={control}
            name={"email"}
            render={({ field: { onChange, value } }) => (
              <Input
                style={styles.input}
                placeholder="Digite seu email"
                placeholderTextColor="black"
                autoCapitalize="none"
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
                leftIcon={<Icon name="email" color="black" size={24} />}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.inputError}>{errors.email?.message}</Text>
          )}

          <Controller
            control={control}
            name={"senha"}
            render={({ field: { onChange, value } }) => (
              <Input
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="black"
                autoCapitalize="none"
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
                leftIcon={<Icon name="lock" color="black" size={24} />}
              />
            )}
          />
          {errors.senha && (
            <Text style={styles.inputError}>{errors.senha?.message}</Text>
          )}

          <TouchableOpacity
            style={styles.botao}
            onPress={handleSubmit(handleSignIn)}
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
        </View>
      </ImageBackground>
    </View>
  );
}
