/* eslint-disable func-style */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BrainExterior from "../Views/brainExterior";
import BrainInterior from "../Views/brainInterior";
import LandingPageFx from "../Views/LandingPage";
import NeuronPage from "../Views/neuronPage";
import Heart from "../Views/heart";

function brainExteriorFx() {
  return <BrainExterior></BrainExterior>;
}
function heartFx(){
  return <Heart></Heart>;
}

function brainInteriorFx() {
  return <BrainInterior></BrainInterior>;
}

function theNeuronFx() {
  return <NeuronPage></NeuronPage>;
}

const Stack = createStackNavigator();
export default class Nav extends React.Component {
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
            options={{ title: "Welcome to the Body" }}
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
            options={{ title: "The Neuron" }}
          />
          <Stack.Screen
            name="heart"
            component={heartFx}
            options={{ title: "The Heart" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
