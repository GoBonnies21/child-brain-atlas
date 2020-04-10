/* eslint-disable func-style */
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BrainExterior from "./brainExterior";
import BrainInterior from "./brainInterior";

// eslint-disable-next-line react/prop-types
function brainExteriorFx({ navigation }) {
  return (
    <View>
      <BrainExterior></BrainExterior>
      <Button
        title="Flip the Brain"
        // eslint-disable-next-line react/prop-types
        onPress={() => navigation.navigate("interior")}
      />
    </View>
  );
}

function brainInteriorFx() {
  return <BrainInterior></BrainInterior>;
}
const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="exterior">
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
