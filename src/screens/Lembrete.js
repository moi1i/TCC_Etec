//Importando Componentes do React-Native
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar,
} from "react-native";

//Importação React-Hook-Form
import { useForm, Controller } from "react-hook-form";
//Importando Yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Importando Ícones do MaterialIcons do react-native-vector-iconss
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//Importando styles
import styles from "../styles/SLembrete";

//Importação do componente para selecionar data/horário
import DatePicker from "../components/DatePicker";

export default function Lembrete({ navigation }) {
  //Validação com Yup
  const schema = yup.object({
    nomeM: yup
      .string()
      .required("Digite o nome do medicamento")
      .matches(
        /^[aA-zZ\s]+$/,
        "Sem caracteres especiais"
      )
      .max(30, "O nome do medicamento deve ter no máximo 30 caracteres"),
    quantidade: yup
      .string()
      .required("Digite a quantidade de medicamentos")
      .matches(
        /^[aA-zZ\s]+$/,
        "Sem caracteres especiais"
      ),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        translucent={true}
        backgroundColor={"white"}
      />
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
            <Controller
              control={control}
              name={"nomeM"}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder='"Dipirona"'
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          {errors.nomeM && (
            <Text style={styles.inputError}>{errors.nomeM?.message}</Text>
          )}
        </View>

        <View style={styles.view03}>
          <Text style={styles.text}>Quantidade</Text>
          <View style={styles.view0}>
            <Icon name="pill" color="black" size={30} />
            <Controller
              control={control}
              name={"quantidade"}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder='"2"'
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          {errors.quantidade && (
            <Text style={styles.inputError}>{errors.quantidade?.message}</Text>
          )}
        </View>

        <View style={styles.view03}>
          <Text style={styles.textN}>Notificação</Text>
          <DatePicker />
        </View>
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.text2}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
