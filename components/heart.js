import React from "react";
import { Text, View, Image } from "react-native";
import BrainButton from "./button";
// import HeartImage from "./HeartImage";
import HeartImageFile from "../assets/HeartImage.jpeg";
import styles from "./styles";
export default class Heart extends React.Component {
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
      <View style={styles.HeartContainer}>
        <Text style={styles.message}>{this.state.infoAboutArea}</Text>
        <View style={styles.HeartImageContainer}>
          <Image source={HeartImageFile} style={styles.HeartImage} />
          <View style={styles.Heart}>
            <BrainButton
              showOnButton="The Heart"
              info="The heart pumps blood around the body"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.LeftVentricle}>
            <BrainButton
              showOnButton="The Left Ventricle"
              info="The left ventricle takes blood from the lungs and sends it to the organs. It has very thick walls."
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.RightVentricle}>
            <BrainButton
              showOnButton="The Right Ventricle"
              info="The right ventricle pumps blood to the lungs so it can get oxygen and get rid of carbon dioxide."
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.RightAtrium}>
            <BrainButton
              showOnButton="The Right Atrium"
              info="Blood from the body enters the right atrium before it fills the right ventricle"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.LeftAtrium}>
            <BrainButton
              showOnButton="The Left Atrium"
              info="Blood from the lungs enters the right atrium before it fills the left ventricle"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.Aorta}>
            <BrainButton
              showOnButton="The Aorta"
              info="The aorta brings blood from the heart to the rest of the body"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.InfVenaCava}>
            <BrainButton
              showOnButton="The Inferior Vena Cava"
              info="Carries deoxygenated blood from the lower body back to the heart"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.SupVenaCava}>
            <BrainButton
              showOnButton="The Superior Vena Cava"
              info="Carries deoxygenated blood from the chest ande head back to the heart"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.PulmonaryArtery}>
            <BrainButton
              showOnButton="The Pulmonary Artery"
              info="Deoxygenated blood travels through here to get back to the lungs."
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.Tricuspid}>
            <BrainButton
              showOnButton="The Tricuspid Valve"
              info="Blocks blood from flowing back into the right atrium when the right ventricle contracts"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
          <View style={styles.Mitral}>
            <BrainButton
              showOnButton="The Mitral Valve"
              info="Blocks blood from flowing back into the left atrium when the left ventricle contracts"
              showInfoAboutArea={this.showInfoAboutArea}
            ></BrainButton>
          </View>
        </View>
      </View>
    );
  }
}
