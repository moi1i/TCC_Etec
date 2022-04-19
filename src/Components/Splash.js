import {
  View,
  Image
} from "react-native";

import styles from "../styles/StSplash";

export default function Home() {
  return (
  <View style={styles.container}>
      <Image style={styles.image} source={require('../images/splash01.jpeg')}></Image>
  </View>
  );
}
