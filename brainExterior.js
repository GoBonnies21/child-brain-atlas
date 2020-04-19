import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BrainButton from "./components/button";
import ExteriorBrainImage from "./components/OuterBrainImage";
export default class BrainExterior extends React.Component {
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
            <ExteriorBrainImage></ExteriorBrainImage>
            </View>
            <View style={styles.Brain}>
            <BrainButton
              showOnButton="The Brain"
              info="The brain tells your body what to do"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.FrontalLobe}>
            <BrainButton
              showOnButton="The Frontal lobe"
              info='The frontal lobe is the "thinking" part of the brain. It gives us our emotions and lets us solve problems '
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.ParietalLobe}>
            <BrainButton
              showOnButton="The Parietal Lobe"
              info="The parietal lobe takes our different senses and makes connections between them. This lets us do things like catch a baseball or tell what room of the house our dog is barking in"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.OccipitalLobe}>
            <BrainButton
              showOnButton="The Occipital Lobe"
              info="The occipital lobe helps us see. Can you believe all that information travels from your eyes to the back of your head?"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.TemporalLobe}>
            <BrainButton
              showOnButton="The Temporal Lobe"
              info="The temporal lobe allows us to hear sounds, understand words and remember pictures and faces."
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
            </View>
            <View style={styles.Cerebellum}>
            <BrainButton
              showOnButton="The Cerebellum"
              info="The cerebellum is responsible for keeping us balance. It lets us dance, play sports or carry glasses full of water or juice."
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
        ParietalLobe: {
          flex: 1,
          position: "absolute",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          top: 325,
          right: 1000
        },
        FrontalLobe: {
          flex: 1, 
          position: "absolute",
          top: 350, 
          right: 1500
        },
        OccipitalLobe: {
          flex: 1, 
          position: "absolute",
          right: 900, 
          top: 525
        },
        TemporalLobe: {
          flex: 1, 
          position: "absolute",
          right: 1300, 
          top:600
        },
        Cerebellum: {
          flex: 1, 
          position: "absolute",
          right:1050, 
          top: 800
        },
        Brain: {
          flex: 1, 
          position: "absolute",
          right: 1230, 
          top: 100
        }
      });