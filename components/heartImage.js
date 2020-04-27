import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default class HeartImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={require("../assets/HeartImage.jpeg")}
          style={styles.HeartImage}
        />
      </View>
    );
  }
}
