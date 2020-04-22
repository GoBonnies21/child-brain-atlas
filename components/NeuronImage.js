import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
export default class NeuronImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={require("../assets/NeuronImage.jpg")}
          style={styles.NeuronImage}
        />
      </View>
    );
  }
}
