/* eslint-disable react/prop-types */
import React from "react";
import {TouchableOpacity, View, StyleSheet, Text} from "react-native";

export default class BrainButton extends React.Component {
    constructor(props){
        super(props);
        this.showInfoHandler= this.showInfoHandler.bind(this);
    }
    showInfoHandler(){
        this.props.showInfoAboutArea(this.props.info);
    }
    render(){
        return (
            <View style ={styles.container}>
            <TouchableOpacity onPress={this.showInfoHandler} style={styles.button}>
            <Text style={styles.buttonText}>{this.props.showOnButton}</Text>
            </TouchableOpacity>
            </View>
        )
    };
       
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "pink",
          alignItems: "center",
          justifyContent: "center"
        }});