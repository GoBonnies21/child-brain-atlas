import React from "react";
import { Text, View, Button } from "react-native";
import LandingImage from "./LandingPageImage";
import styles from "./styles";
// eslint-disable-next-line react/prop-types
export default function LandingPageFx({ navigation }) {
  return (
    <View>
      <View style={styles.LandingImage}>
        <View style={styles.LandingContainer}>
          <View style={styles.LandingImage}>
            <LandingImage></LandingImage>
          </View>
        </View>
      </View>
      <View style={styles.NavigationButtons}>
        <Text>
          The neuron is the building block of the brain! Take a visit to see the
          brain on a microscopic level.
        </Text>
        <Button
          title="Go to the Neuron!"
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate("neuron")}
        ></Button>
        <Text>
          The exterior of the brain has lots of cool functions that help you do
          day to day activities!
        </Text>
        <Button
          title="Go to the Exterior of the Brain!"
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate("exterior")}
        ></Button>
        <Text>
          The interior of the brain helps your body out and makes sure that you
          can do everything you love!
        </Text>
        <Button
          title="Go to the Interior of the Brain!"
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate("interior")}
        ></Button>
        <Text>
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
