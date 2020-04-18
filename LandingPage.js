import React from "react";
import { StyleSheet, View } from "react-native";
import BrainButton from "./components/button";
export default class LandingPage extends React.Component {
    constructor() {
        super();
        // this.state = {
        //   infoAboutArea: []
        // };
    //     this.showInfoAboutArea = this.showInfoAboutArea.bind(this);
    //   }
    //   showInfoAboutArea(info) {
    //     this.setState({
    //       infoAboutArea: [info]
    //     });
      }
      render() {
        return (
          <View style={styles.container}>
            <BrainButton
              showOnButton="The Neuron"
            ></BrainButton>
            <BrainButton
            showOnButton="The Exterior of the Brain"
            ></BrainButton>
            <BrainButton
            showOnButton="The Interior of the Brain"
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