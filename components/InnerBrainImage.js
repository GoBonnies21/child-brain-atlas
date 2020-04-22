import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default class InteriorBrainImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={require("../assets/InnerBrainBW.png")}
          style={styles.InnerBrainImage}
        />
      </View>
    );
  }
}
