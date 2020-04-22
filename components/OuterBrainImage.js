import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default class OuterBrainImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={require("../assets/BrainExterior.jpg")}
          style={styles.OuterBrainImage}
        />
      </View>
    );
  }
}
