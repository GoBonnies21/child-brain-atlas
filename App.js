/* eslint-disable func-style */
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BrainExterior from "./brainExterior";
import BrainInterior from "./brainInterior";
import LandingPage from "./LandingPage";
import NeuronPage from "./neuronPage";

// eslint-disable-next-line react/prop-types
function LandingPageFx({ navigation }) {
  return (
    <View>
  <View style= {styles.image}>
    <LandingPage></LandingPage>
    </View>
    <View style= {styles.NavigationButtons}>
      <Text>
      The neuron is the building block of the brain!  Take a visit to see the brain on a microscopic level.
      </Text>
    <Button
    title="Go to the Neuron!"
    // eslint-disable-next-line react/prop-types
    onPress={() => navigation.navigate("neuron")}
    ></Button>
    <Text>
      The exterior of the brain has lots of cool functions that help you do day to day activities!
    </Text>
    <Button
    title="Go to the Exterior of the Brain!"
    // eslint-disable-next-line react/prop-types
    onPress={() => navigation.navigate("exterior")}
    ></Button>
    <Text>
      The interior of the brain helps your body out and makes sure that you can do everything you love!
    </Text>
    <Button
    title="Go to the Interior of the Brain!"
    // eslint-disable-next-line react/prop-types
    onPress={() => navigation.navigate("interior")}
    ></Button>
    </View>
  </View>
  );
}

function brainExteriorFx() {
  return <BrainExterior></BrainExterior>
};

function brainInteriorFx() {
  return <BrainInterior></BrainInterior>;
};

function theNeuronFx() {
  return <NeuronPage></NeuronPage>
};

const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing Page">
          <Stack.Screen
            name="Landing Page"
            component={LandingPageFx}
            options={{ title: "Welcome to the Brain" }}
          />
          <Stack.Screen
            name="exterior"
            component={brainExteriorFx}
            options={{ title: "The Exterior of the Brain" }}
          />
           <Stack.Screen
            name="interior"
            component={brainInteriorFx}
            options={{ title: "The Interior of the Brain" }}
          />
          <Stack.Screen
          name="neuron"
          component={theNeuronFx}
          options={{ title: "The Neuron"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  NavigationButtons: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: "center",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
