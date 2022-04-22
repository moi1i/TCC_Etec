import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../styles/SLembrete";

export default function Lembrete({ navigation }) {
  return (
    <View style={styles.view1}>
      <TouchableOpacity style={styles.botaoTop} onPress={() => {
          navigation.goBack();
        }}>
        
        <Icon name="arrow-left" color="white" size={35} />
      </TouchableOpacity>
      <Text style={styles.title}>Adicionar Lembrete</Text>

      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.text}>Nome do medicamento</Text>
          <View style={styles.view0}>
            <Icon name="pill" color="black" size={30} />
            <TextInput style={styles.input} placeholder="" />
          </View>
          <Text style={styles.text}>Quantidade</Text>
          <View style={styles.view0}>
            <Icon name="pill" color="black" size={30} />
            <TextInput style={styles.input} placeholder="" />
          </View>
          <Text style={styles.text}>Notificação</Text>
          <View style={styles.view02}>
            <Icon name="pill" color="black" size={30} />
            <TextInput style={styles.input} placeholder="" />
          </View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.text2}>OK</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
