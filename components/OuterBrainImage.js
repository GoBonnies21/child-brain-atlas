import React from "react";
import { View, Image } from "react-native";

export default class OuterBrainImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Image
          source={require("../assets/BrainExterior.jpg")}
          style={{ width: 900, height: 725 }}
        />
      </View>
    );
  }
}