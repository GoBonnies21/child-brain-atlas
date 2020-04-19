import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BrainButton from "./components/button";
import NeuronImage from "./components/NeuronImage";
export default class NeuronPage extends React.Component {
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
              <View style={styles.backgroundImage}>
              <NeuronImage></NeuronImage>
              </View>
            <View style={styles.CellBody}>
            <BrainButton
              showOnButton="The Cell Body"
              info="The cell body contains all the pieces the neuron needs to survive"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.Dendrite}>
            <BrainButton
              showOnButton="The Dendrites"
              info="The dendrites receive information from other neurons and help relay messages"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.Axon}>
            <BrainButton
              showOnButton="The Axon"
              info="The axon is what allows a neuron to relay its messages to other neurons.  Electrical signals travel along it!"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.NodeofRanvier}>
            <BrainButton
              showOnButton="Node of Ranvier"
              info="A node of Ranvier allows the signal to keep moving.  It is a gap in the myelin sheath on the axon"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.MyelinSheath}>
            <BrainButton
              showOnButton="The Myelin Sheath"
              info="The myelin sheath insulates the axon and allows signals to move quickly down it"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.Synapse}>
            <BrainButton
              showOnButton="The Synapse"
              info="The synapse is the junction between two neurons where messages will be transferred using neurotransmitters, a special type of chemical"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.SchwannCell}>
                <BrainButton
                showOnButton="The Schwann Cells"
                info="The Schwann cells surround the axon and provide the myelin for the sheath"
                showInfoAboutArea={this.showInfoAboutArea}
                ></BrainButton>
            </View>
            <View style={styles.AxonHillock}>
                <BrainButton
                showOnButton="The Axon Hillock"
                info="The axon hillock joins the cell body and the axon so messages can keep moving"
                showInfoAboutArea={this.showInfoAboutArea}
                ></BrainButton>
            </View>
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
        }, 
        backgroundImage: {
            flex:20, 
            backgroundColor:"transparent", 
            justifyContent: "center", 
            alignItems: "center"
          },
        CellBody: {
            flex: 1, 
            postion: "absolute", 
            right:135, 
            top:-550
        },
        Dendrite: {
            flex: 1, 
            postion: "absolute", 
            right:135, 
            top:-750
        },
        Axon: {
            flex: 1, 
            postion: "absolute", 
            right:50, 
            top:-325
        },
        NodeofRanvier: {
            flex: 1, 
            postion: "absolute", 
            right:-50, 
            top:-450
        },
        MyelinSheath: {
            flex: 1, 
            postion: "absolute", 
            right:100, 
            top:-500
        },
        Synapse: {
            flex: 1, 
            postion: "absolute", 
            right:-375, 
            top:-330
        },
        SchwannCell: {
            flex: 1, 
            postion: "absolute", 
            right:-100, 
            top:-450
        },
        AxonHillock: {
            flex: 1, 
            postion: "absolute", 
            right:25, 
            top:-725
        },
      });