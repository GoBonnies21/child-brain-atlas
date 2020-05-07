import React from "react";
import { Text, View, Image } from "react-native";
import InfoButton from "./button";
import NeuronImageFile from "../assets/ColoredNeuron.png";
import styles from "./styles";
export default class NeuronPage extends React.Component {
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
      <View style={styles.NeuronContainer}>
        <Text style={styles.message}>{this.state.infoAboutArea}</Text>
        <View style={styles.backgroundImage}>
          <Image source={NeuronImageFile} style={styles.NeuronImage} />

          <View style={styles.CellBody}>
            <InfoButton
              showOnButton="The Cell Body"
              info="The cell body contains all the pieces the neuron needs to survive"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.Dendrite}>
            <InfoButton
              showOnButton="The Dendrites"
              info="The dendrites receive information from other neurons and help relay messages"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.Axon}>
            <InfoButton
              showOnButton="The Axon"
              info="The axon is what allows a neuron to relay its messages to other neurons.  Electrical signals travel along it!"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.NodeofRanvier}>
            <InfoButton
              showOnButton="Node of Ranvier"
              info="A node of Ranvier allows the signal to keep moving.  It is a gap in the myelin sheath on the axon"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.MyelinSheath}>
            <InfoButton
              showOnButton="The Myelin Sheath"
              info="The myelin sheath insulates the axon and allows signals to move quickly down it"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.Synapse}>
            <InfoButton
              showOnButton="The Synapse"
              info="The synapse is the junction between two neurons where messages will be transferred using neurotransmitters, a special type of chemical"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.SchwannCell}>
            <InfoButton
              showOnButton="The Schwann Cells"
              info="The Schwann cells surround the axon and provide the myelin for the sheath"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
          <View style={styles.AxonHillock}>
            <InfoButton
              showOnButton="The Axon Hillock"
              info="The axon hillock joins the cell body and the axon so messages can keep moving"
              showInfoAboutArea={this.showInfoAboutArea}
            ></InfoButton>
          </View>
        </View>
      </View>
    );
  }
}
