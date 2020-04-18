import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BrainButton from "./components/button";
export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
          infoAboutArea: []
        };
        this.showInfoAboutArea = this.showInfoAboutArea.bind(this);
      }
      showInfoAboutArea(info) {
        this.setState({
          infoAboutArea: [info]
        });
      }
      render() {
        return (
          <View style={styles.container}>
            <Text>{this.state.infoAboutArea}</Text>
            <BrainButton
              showOnButton="The Neuron"
              info="Welcome to the neuron"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            <BrainButton
            showOnButton="The Exterior of the Brain"
            info="Welcome to the exterior of the brain"
            showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            <BrainButton
            showOnButton="The Interior of the Brain"
            info="Welcome to the interior of the brain"
            showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
        )}} 

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center"
            }
          });