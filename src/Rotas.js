//Importando os pacotes necessários
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importando as telasComponents
import Home from "./screens/Home";
import Lembrete from "./screens/Lembrete";
import Historico from "./screens/Historico";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    //Criando as rotas
    <NavigationContainer>
      <Stack.Navigator
        //Definindo a primeira tela que vai aparecer
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lembrete"
          component={Lembrete}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Historico"
          component={Historico}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Exportando "Rotas"
export default Rotas;
