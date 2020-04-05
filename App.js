import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BrainButton from "./components/button";
import BrainImage from "./components/images"

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
        <Text>{this.state.infoAboutArea}</Text>
        <BrainButton
          showOnButton="The Brain"
          info="The brain tells your body what to do"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Frontal lobe"
          info='The frontal lobe is the "thinking" part of the brain. It gives us our emotions and lets us solve problems '
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Parietal Lobe"
          info="The parietal lobe takes our different senses and makes connections between them. This lets us do things like catch a baseball or tell what room of the house our dog is barking in"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Occipital Lobe"
          info="The occipital lobe helps us see. Can you believe all that information travels from your eyes to the back of your head?"
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Temporal Lobe"
          info="The temporal lobe allows us to hear sounds, understand words and remember pictures and faces."
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Cerebellum"
          info="The cerebellum is responsible for keeping us balance. It lets us dance, play sports or carry glasses full of water or juice."
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Brain Stem"
          info="The brain stem keeps our heart pumping and tells our lungs to breathe."
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainButton
          showOnButton="The Spinal Cord"
          info="The spinal cord takes all of the instructions from our brain and brings them to the rest of our body. It also takes all the things we feel with our skin and tells our brain about it."
          showInfoAboutArea={this.showInfoAboutArea}
        ></BrainButton>
        <BrainImage>
        </BrainImage>
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
