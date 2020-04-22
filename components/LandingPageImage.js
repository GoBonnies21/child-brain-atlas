import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default class LandingImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={require("../assets/LandingPageBrain.jpg")}
          style={styles.LandingPageImage}
        />
      </View>
    );
  }
}
