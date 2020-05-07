import React from "react";
import { Text, View, Button, Image } from "react-native";
import LandingPagePicture from "../assets/LandingPageBrain.jpg";
import styles from "../components/styles";
// eslint-disable-next-line react/prop-types
export default function LandingPageFx({ navigation }) {
  return (
    <View style={styles.LandingContainer}>
      <Image source={LandingPagePicture} style={styles.LandingPageImage} />
      <View style={styles.NavigationButtons}>
        <Text style={styles.CenterText}>
          The neuron is the building block of the brain! Take a visit to see the
          brain on a microscopic level.
        </Text>
        <Button
          title="Go to the Neuron!"
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate("neuron")}
        ></Button>
        <Text style={styles.CenterText}>
          The exterior of the brain has lots of cool functions that help you do
          day to day activities!
        </Text>
        <Button
          title="Go to the Exterior of the Brain!"
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate("exterior")}
        ></Button>
        <Text style={styles.CenterText}>
          The interior of the brain helps your body out and makes sure that you
          can do everything you love!
        </Text>
        <Button
          title="Go to the Interior of the Brain!"
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate("interior")}
        ></Button>
        <Text style={styles.CenterText}>
          The heart pumps blood around the body!
        </Text>
        <Button
          title="Go to the Heart"
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate("heart")}
        ></Button>
      </View>
    </View>
  );
}
