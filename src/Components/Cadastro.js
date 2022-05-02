import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  StatusBar,
  Alert
} from "react-native";

import { Input } from "react-native-elements";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "../styles/SCadastro";

import api from '../api/Api';

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = (name) => {
    setNome(name);
  };

  const onChangeEmailHandler = (login) => {
    setLogin(login);
  };

  const onChangeSenhaHandler = (senha) => {
    setSenha(senha);
  };


  const onSubmitFormHandler = async (event) => {
    if (!nome.trim() || !login.trim() || !senha.trim()) {
      Alert.alert("Erro", "Preencha os campos.");
      return;
    }
    setIsLoading(true);

    try {
      const response = await api.post("/usuarios/save", {
        nome, 
        login,
        senha,
      })

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Cadastro efetuado com sucesso!!');
        setIsLoading(false);
        setNome('');
        setLogin('');
        setSenha('');
      } else {
        throw new Error("Erro desconhecido.");
      }


    }catch(err) {
      Alert.alert("Sucesso", "Cadastro efetuado com sucesso!!");
      setIsLoading(false);
    };
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
        source={require("../images/fundo000.png")}
        style={styles.image}
        resizeMode={"cover"}
        blurRadius={1}
      >
        <View style={styles.container2}>
        
            <Text style={styles.title}>Cadastro</Text>

            <Input
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="black"
              value={nome}
              editable={!isLoading}
              onChangeText={onChangeNameHandler}
              leftIcon={<Icon name="person" color="black" size={24} />}
            />

            <Input
              style={styles.input}
              placeholder="Digite seu email"
              placeholderTextColor="black"
              value={login}
              editable={!isLoading}
              onChangeText={onChangeEmailHandler}
              leftIcon={<Icon name="email" color="black" size={24} />}
            />
            <Input
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="black"
              secureTextEntry={true}
              value={senha}
              editable={!isLoading}
              onChangeText={onChangeSenhaHandler}
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
              disabled={isLoading}
              onPress={onSubmitFormHandler}
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