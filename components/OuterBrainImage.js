import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import BrainExteriorFile from "../assets/BrainExterior.jpg"

export default class OuterBrainImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={BrainExteriorFile}
          style={styles.OuterBrainImage}
        />
      </View>
    );
  }
}
