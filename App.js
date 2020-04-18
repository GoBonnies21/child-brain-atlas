/* eslint-disable func-style */
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BrainExterior from "./brainExterior";
import BrainInterior from "./brainInterior";
import LandingPage from "./LandingPage";

// eslint-disable-next-line react/prop-types
function LandingPageFx({ navigation }) {
  return (
  <View>
    <LandingPage></LandingPage>
    <Button
    title="The Neuron"
    // eslint-disable-next-line react/prop-types
    onPress={() => navigation.navigate("neuron")}
    ></Button>
    <Button 
    title="The Exterior of the Brain"
    // eslint-disable-next-line react/prop-types
    onPress={() => navigation.navigate("exterior")}
    ></Button>
    <Button
    title="The Interior of the Brain"
    // eslint-disable-next-line react/prop-types
    onPress={() => navigation.navigate("interior")}
    ></Button>
  </View>
  );
}

function brainExteriorFx() {
  return <BrainExterior></BrainExterior>
};

function brainInteriorFx() {
  return <BrainInterior></BrainInterior>;
};

// function theNeuronFx() {
//   return ""
// }

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
          {/* <Stack.Screen 
          name="neuron"
          component={""}
          options={{ title: "The Neuron"}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
