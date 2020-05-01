import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import NeuronImageFile from "../assets/NeuronImage.jpg"
export default class NeuronImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={NeuronImageFile}
          style={styles.NeuronImage}
        />
      </View>
    );
  }
}
