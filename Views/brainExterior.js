import React from "react";
import { Text, View, Image } from "react-native";
import InfoButton from "../components/button";
import BrainExteriorFile from "../assets/brainExteriorColored.png";
import styles from "../components/styles";
export default class BrainExterior extends React.Component {
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
      <View style={styles.BrainExteriorContainer}>
        <Text style={styles.message}>{this.state.infoAboutArea}</Text>
        <View style={styles.backgroundImage}>
          <Image source={BrainExteriorFile} style={styles.OuterBrainImage} />
          <View style={styles.Brain}>
            <InfoButton
              showOnButton="The Brain"
              info="The brain tells your body what to do"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.FrontalLobe}>
            <InfoButton
              showOnButton="The Frontal lobe"
              info='The frontal lobe is the "thinking" part of the brain. It gives us our emotions and lets us solve problems '
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.ParietalLobe}>
            <InfoButton
              showOnButton="The Parietal Lobe"
              info="The parietal lobe takes our different senses and makes connections between them. This lets us do things like catch a baseball or tell what room of the house our dog is barking in"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.OccipitalLobe}>
            <InfoButton
              showOnButton="The Occipital Lobe"
              info="The occipital lobe helps us see. Can you believe all that information travels from your eyes to the back of your head?"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.TemporalLobe}>
            <InfoButton
              showOnButton="The Temporal Lobe"
              info="The temporal lobe allows us to hear sounds, understand words and remember pictures and faces."
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.Cerebellum}>
            <InfoButton
              showOnButton="The Cerebellum"
              info="The cerebellum is responsible for keeping us balance. It lets us dance, play sports or carry glasses full of water or juice."
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
        </View>
      </View>
    );
  }
}
