import React from "react";
import { View, Image } from "react-native";

export default class LandingImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
      <Image 
      source={require("../assets/LandingPageBrain.jpg")}
      style={{width: 675, height: 475}}
      />
      </View>
    );
  }
}