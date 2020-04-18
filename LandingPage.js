import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LandingImage from "./components/LandingPageImage";
export default class LandingPage extends React.Component {
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
            <View style={styles.image}>
            <LandingImage></LandingImage>
            </View>
            </View>
        
            
        )}}

        const styles = StyleSheet.create({
           container: {
            backgroundColor: "white" 
          },
          image: {
            flex: "center",
            justifyContent: "center"
          }
        });
      
        