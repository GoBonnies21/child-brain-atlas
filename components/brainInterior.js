import React from "react";
import { Text, View, Image } from "react-native";
import BrainButton from "./button";
import InnerBrainImageFile from "../assets/InnerBrainBW.png";
import styles from "./styles";
export default class BrainInterior extends React.Component {
  constructor() {
    super();
    this.state = {
      infoAboutArea: [],
    };
    this.showInfoAboutArea = this.showInfoAboutArea.bind(this);
  }
  showInfoAboutArea(info) {
    this.setState({
      infoAboutArea: [info],
    });
  }
  render() {
    return (
      <View style={styles.BrainInteriorContainer}>
        <Text style={styles.message}>{this.state.infoAboutArea}</Text>
        <View style={styles.InnerBrainImageContainer}>
          <Image source={InnerBrainImageFile} style={styles.InnerBrainImage} />

          <View style={styles.CorpusCallosum}>
            <BrainButton
              showOnButton="The Corpus Callosum"
              info="The corpus callosum allows both sides of our brain to communicate"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.Thalamus}>
            <BrainButton
              showOnButton="The Thalamus"
              info="The thalamus allows the spine to communicate with the brain and helps control whether we're awake or asleep"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.Hypothalamus}>
            <BrainButton
              showOnButton="The Hypothalamus"
              info="The hypothalamus controls our body temperature and hunger"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.Amygdala}>
            <BrainButton
              showOnButton="The Amygdala"
              info="The amygdala helps regulate emotions and behavior."
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.Medulla}>
            <BrainButton
              showOnButton="The Medulla"
              info="The medulla helps regulate our hearts and breathing, as well as sneezing and swallowing."
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.PituitaryGland}>
            <BrainButton
              showOnButton="The Pituitary Gland"
              info="The pituitary gland releases hormones into your bloodstream, which go on to do more cool things!"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.BrainStem}>
            <BrainButton
              showOnButton="The Brain Stem"
              info="The brain stem keeps our heart pumping and tells our lungs to breathe."
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.SpinalCord}>
            <BrainButton
              showOnButton="The Spinal Cord"
              info="The spinal cord takes all of the instructions from our brain and brings them to the rest of our body. It also takes all the things we feel with our skin and tells our brain about it."
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
        </View>
      </View>
    );
  }
}
