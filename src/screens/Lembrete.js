//Importando Componentes do React-Native
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  Alert,
  Platform,
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

import DateTimePicker from "@react-native-community/datetimepicker";
import api from "../api/Api";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";

/*
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
*/

export default function Lembrete({ navigation }) {
  /*
  //NOTIFICAÇÃO
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  //AQUI
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Notificação",
        body: "Isso é uma notificação",
        data: { dataBody: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  }

  //NOTIFICAÇÃO
*/

  const [isPickerDateShow, setIsPickerDateShow] = useState(false);
  const [isPickerTimeShow, setIsPickerTimeShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPickerDate = () => {
    setIsPickerDateShow(true);
  };

  const showPickerTime = () => {
    setIsPickerTimeShow(true);
  };

  const onChangeDate = (event, value) => {
    setDate(value);
    if (Platform.OS === "android") {
      setIsPickerDateShow(false);
    }
  };

  const onChangeTime = (event, value) => {
    setDate(value);
    if (Platform.OS === "android") {
      setIsPickerTimeShow(false);
    }
  };
  //let formatTeste = `${date.toLocaleDateString('pt-BR')}`
  let formatDate =
    ("0" + date.getDate()).slice(-2) +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    date.getFullYear();
  let formatTime =
    ("0" + date.getHours()).slice(-2) -
    3 +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  //Validação com Yup
  const schema = yup.object({
    titulo: yup
      .string()
      .required("Digite o nome do medicamento")
      .matches(/^[aA-zZ\s]+$/, "Sem caracteres especiais")
      .max(30, "O nome do medicamento deve ter no máximo 30 caracteres"),
    quantidadeMedicamento: yup
      .number()
      .typeError("Digite a quantidade de medicamentos")
      .required("Digite a quantidade de medicamentos")
      .integer("Somente números inteiros")
      .positive("Somente números positivos"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const token = await AsyncStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const dataBody = {
      titulo: data.titulo,
      quantidadeMedicamento: data.quantidadeMedicamento,
      dataLembreteRemedio: formatDate,
      horarioLembreteRemedio: formatTime,
    };

    if (token) {
      try {
        api.post("/remedios/save", dataBody, {
          headers: headers,
        });
        console.log(dataBody);
        Alert.alert("Sucesso!!", "Lembrete adicionado");
      } catch (error) {
        console.log(error);
      }
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
              name={"titulo"}
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
          {errors.titulo && (
            <Text style={styles.inputError}>{errors.titulo?.message}</Text>
          )}
        </View>

        <View style={styles.view03}>
          <Text style={styles.text}>Quantidade</Text>
          <View style={styles.view0}>
            <Icon name="pill" color="black" size={30} />
            <Controller
              control={control}
              name={"quantidadeMedicamento"}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder='"2"'
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          {errors.quantidadeMedicamento && (
            <Text style={styles.inputError}>
              {errors.quantidadeMedicamento?.message}
            </Text>
          )}
        </View>

        <View style={styles.view03}>
          <Text style={styles.textN}>Notificação</Text>
          {!isPickerDateShow && (
            <View style={stylesPicker.btnContainer}>
              <TouchableOpacity
                style={stylesPicker.botao}
                onPress={showPickerDate}
              >
                <Icon name="calendar-today" color="black" size={30} />
                <Text style={stylesPicker.text2}>Data: {formatDate}</Text>
              </TouchableOpacity>
            </View>
          )}

          {!isPickerTimeShow && (
            <View style={stylesPicker.btnContainer}>
              <TouchableOpacity
                style={stylesPicker.botao}
                onPress={showPickerTime}
              >
                <Icon name="clock" color="black" size={30} />
                <Text style={stylesPicker.text2}>Horário: {formatTime}</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* The date picker */}
          {isPickerDateShow && (
            <DateTimePicker
              value={date}
              mode={"date"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={true}
              onChange={onChangeDate}
              style={stylesPicker.datePicker}
            />
          )}

          {/* The date picker */}
          {isPickerTimeShow && (
            <DateTimePicker
              value={date}
              mode={"time"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={true}
              onChange={onChangeTime}
              style={stylesPicker.datePicker}
            />
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleSubmit(onSubmit)}>
        <Text style={stylesPicker.text}>Adicionar</Text>
      </TouchableOpacity>

      {/*
      <TouchableOpacity
        style={stylesPicker.botao2}
        onPress={async () => {
          await schedulePushNotification();
        }}
      >
        <Text style={stylesPicker.text}>Notif</Text>
      </TouchableOpacity>
      */}
    </View>
  );
}

/*
async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
*/
const stylesPicker = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: "black",
  },
  btnContainer: {
    padding: 10,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  botao: {
    flexDirection: "row",
    width: 320,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    elevation: 1,
  },
  text: {
    fontWeight: "600",
    color: "black",
    fontSize: 15,
    alignSelf: "center",
  },
  text2: {
    marginLeft: 12,
    color: "grey",
    alignSelf: "center",
  },
  botao2: {
    backgroundColor: "#fae278",
    padding: 16,
    width: 140,
    alignItems: "center",
    borderRadius: 11,
    elevation: 1,
    alignSelf: "center",
    marginTop: 10,
  },
});
