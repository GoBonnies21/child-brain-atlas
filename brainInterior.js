import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BrainButton from "./components/button";
import InteriorBrainImage from "./components/InnerBrainImage";
export default class BrainInterior extends React.Component {
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
          showOnButton="The Cerebrum"
          info="The cerebrum allows us to understand speech"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Corpus Callosum"
          info="The corpus callosum allows both sides of our brain to communicate"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Thalamus"
          info="The thalamus allows the spine to communicate with the brain and helps control whether we're awake or asleep"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Hypothalamus"
          info="The hypothalamus controls our body temperature and hunger"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Amygdala"
          info="The amygdala helps regulate emotions and behavior."
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Medulla"
          info="The medulla helps regulate our hearts and breathing, as well as sneezing and swallowing."
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Pituitary Gland"
          info="The pituitary gland releases hormones into your bloodstream, which go on to do more cool things!"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <InteriorBrainImage>
        </InteriorBrainImage>
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