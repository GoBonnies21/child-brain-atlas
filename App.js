import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BrainButton from "./components/button";

export default class App extends React.Component {
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
        <Text>The text below this changes!</Text>
        <Text>{this.state.infoAboutArea}</Text>
        <BrainButton
          showOnButton="The Brain"
          info="The brain tells your body what to do"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The frontal lobe"
          info="The frontal lobe is .... "
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
