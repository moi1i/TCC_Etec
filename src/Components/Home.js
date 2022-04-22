import React, { useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
  ImageBackground,
  DrawerLayoutAndroid,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/SHome";

export default function Home({ navigation }) {
  const drawer = useRef(null);
  const Menu = () => (
    <View style={styles.viewBotao}>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => drawer.current.closeDrawer()}
      >
        
        <Icon name="arrow-back" color="white" size={33} />
       
      </TouchableOpacity>
      

      <View style={[styles.containerMenu]}>
        <TouchableOpacity
          style={styles.botaoTelas}
          onPress={() => {
            navigation.navigate('Lembrete')
          }}
        >
           <Icon style={styles.iconMenu} name="add-alarm" color="#fae278" size={40} />
          <Text style={styles.textBotao}>Adicionar Lembrete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoTelas}
          onPress={() => {
            navigation.navigate('Historico')
          }}
        >
           <Icon style={styles.iconMenu} name="history" color="#fae278" size={40} />
          <Text style={styles.textBotao}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoSair}
          onPress={() => {
            navigation.navigate('Login')
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
      drawerPosition={"left"}
      renderNavigationView={Menu}
    >
      <View style={styles.view1}>
        <ImageBackground
          source={require("../images/fundo03.jpg")}
          style={styles.image}
          resizeMode={"cover"}
        >
          <TouchableOpacity
            style={styles.botaoTop}
            onPress={() => drawer.current.openDrawer()}
          >
            <Icon style={styles.iconTop} name="menu" color="white" size={40} />
          </TouchableOpacity>
          <View style={styles.container}>
          <Text style={styles.title}>Olá,{"\n"}Usuário</Text>
            <View style={styles.frasesView}>
              <Text style={styles.textFrases}>
                Cuidar da sua saúde mental é algo que somente você pode fazer.
              </Text>
            </View>
            <Text style={styles.text}>Medicamentos de hoje</Text>

            <View style={styles.containerList}>
              <FlatList
                data={[
                  { key: "Remédio" },
                  { key: "Remédio0" },
                  { key: "Remédio1" },
                  { key: "Remédio2" },
                  { key: "Remédio3" },
                  { key: "Remédio4" },
                ]}
                renderItem={({ item }) => (
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
                      {item.key} {"\n"}3:00 PM
                    </Text>
                  </View>
                )}
              ></FlatList>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Lembrete')
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
