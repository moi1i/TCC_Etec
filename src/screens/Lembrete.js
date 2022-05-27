//Importando Componentes do React-Native
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

//Importando Ícones do MaterialIcons do react-native-vector-iconss
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//Importando styles
import styles from "../styles/SLembrete";

export default function Lembrete({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoTop}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" color="white" size={35} />
      </TouchableOpacity>
      <Text style={styles.title}>Adicionar Lembrete</Text>
        <View style={styles.container2}>
          <View style={styles.view03}>
            <Text style={styles.text3}>Nome do medicamento</Text>
            <View style={styles.view0}>
              <Icon name="pill" color="black" size={30} />
              <TextInput style={styles.input} placeholder="" />
            </View>
          </View>

          <View style={styles.view03}>
            <Text style={styles.text}>Quantidade</Text>
            <View style={styles.view0}>
              <Icon name="pill" color="black" size={30} />
              <TextInput style={styles.input} placeholder="" />
            </View>
          </View>

          <View style={styles.view03}>
            <Text style={styles.text}>Notificação</Text>
            <View style={styles.view02}>
              <Icon name="pill" color="black" size={30} />
              <TextInput style={styles.input} placeholder="" />
            </View>
          </View>
        </View>

    
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.text2}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
