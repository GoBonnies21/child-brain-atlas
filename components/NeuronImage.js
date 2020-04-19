import React from "react";
import { View, Image } from "react-native";

export default class NeuronImage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
      <Image 
      source={require("../assets/NeuronImage.jpg")}
      style={{width: 775, height: 735}}
      />
      </View>
    );
  }
}