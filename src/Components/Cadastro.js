import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "../styles/SCadastro";

import api from "../api/Api";

export default function Cadastro({ navigation }) {
  //Mensagens de erro da validação
  const schema = yup.object({
    nome: yup.string().required("Digite seu nome"),
    login: yup.string().email("Email inválido").required("Digite seu email"),
    senha: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Digite uma senha"),
      confirmarSenha: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas não são iguais"),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  //Conexão com a ap
  const onSubmit = async (data) => {
    try {
      const response = await api.post("/usuarios/save", data);
      //console.log(data);

      if (response.status === 200) {
        Alert.alert("Sucesso", "Cadastro efetuado com sucesso!!");
      } else {
        throw new Error("Erro desconhecido.");
      }
    } catch (err) {
      Alert.alert("Erro", "deu ruim");
      setIsLoading(false);
    }
  };


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
          <Text style={styles.title}>Cadastro</Text>

          <Controller
            control={control}
            name={"nome"}
            render={({field: { onChange, value }}) => (
              <Input
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor="black"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                leftIcon={<Icon name="person" color="black" size={24} />}
              />
            )}
          />
       {errors.nome && (
            <Text style={styles.inputError}>{errors.nome?.message}</Text>
          )}

          <Controller
            control={control}
            name={"login"}
            render={({field: { onChange, value }}) => (
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

          {errors.login && (
            <Text style={styles.inputError}>{errors.login?.message}</Text>
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

          <Controller
            control={control}
            name={"confirmarSenha"}
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
          {errors.confirmarSenha && (
            <Text style={styles.inputError}>
              {errors.confirmarSenha?.message}
            </Text>
          )}

          <TouchableOpacity
            style={styles.botao}
            onPress={handleSubmit(onSubmit)}
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
        </View>
      </ImageBackground>
    </View>
  );
}
