//Importando Componentes do React-Native
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
  ImageBackground,
  DrawerLayoutAndroid,
} from "react-native";

//Importando Ícones do MaterialIcons do react-native-vector-icons
import Icon from "react-native-vector-icons/MaterialIcons";
import api from "../api/Api";
//Importando styles
import styles from "../styles/SHome";

export default function Home({ navigation }) {
  const drawer = useRef(null);

  const [remedio, setRemedio] = useState([]);

  useEffect(() => {
    const remedioToken = async () => {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        try {
          const data = await api.get("/remedios", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(data.data);
          setRemedio(data.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    remedioToken();
  }, []);

  const Menu = () => (
    <View style={styles.viewBotao}>
      <View style={[styles.containerMenu]}>
        <TouchableOpacity
          style={styles.botaoTelas}
          onPress={() => {
            navigation.navigate("Lembrete");
          }}
        >
          <Icon
            style={styles.iconMenu}
            name="add-alarm"
            color="#fae278"
            size={40}
          />
          <Text style={styles.textBotao}>Adicionar Lembrete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoTelas}
          onPress={() => {
            navigation.navigate("Historico");
          }}
        >
          <Icon
            style={styles.iconMenu}
            name="history"
            color="#fae278"
            size={40}
          />
          <Text style={styles.textBotao}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoSair}
          onPress={() => {
            AsyncStorage.removeItem("token");
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.textBotao2}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerBackgroundColor="white"
      ref={drawer}
      drawerWidth={250}
      drawerPosition={"right"}
      renderNavigationView={Menu}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/fundo03.jpg")}
          style={styles.image}
          resizeMode={"cover"}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Olá,</Text>
            <View style={styles.frasesView}>
              <Text style={styles.textFrases}>
                Cuidar da sua saúde mental é algo que somente você pode fazer.
              </Text>
            </View>

            <Text style={styles.text}>Medicamentos de hoje</Text>

            <View style={styles.containerList}>
              <FlatList
                data={remedio}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.viewList}>
                      <View style={styles.viewRemedio}>
                        <TouchableOpacity
                          style={styles.botaoIcon}
                          onPress={() => {
                            Alert.alert(
                              "Excluído",
                              "Lembrete excluido com sucesso!!"
                            );
                          }}
                        >
                          <Text>
                            <Icon name="delete" color="#868684" size={25} />
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <Text>
                        {item.titulo}
                        {"\n"}Data: {item.dataLembreteRemedio}
                        {"\n"}Horário: {item.horarioLembreteRemedio}
                      </Text>
                      <View style={styles.viewCheck}>
                      <TouchableOpacity
                          style={styles.botaoCheck}
                          onPress={() => {
                            Alert.alert(
                              "Certo",
                              "Remédio adicionado ao histórico"
                            );
                          }}
                        >
                          <Text>
                            <Icon name="check-box" color="green" size={25} />
                          </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                  );
                }}
              ></FlatList>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Lembrete");
              }}
            >
              <Text>
                <Icon name="add-circle" color="#fae278" size={50} />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </DrawerLayoutAndroid>
  );
}
