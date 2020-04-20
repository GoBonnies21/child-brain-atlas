/* eslint-disable react/prop-types */
import React from "react";
import {TouchableOpacity, View, Text} from "react-native";
import styles from "./styles";

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
            <View style ={styles.ButtonContainer}>
            <TouchableOpacity onPress={this.showInfoHandler} style={styles.button}>
            <Text style={styles.buttonText}>{this.props.showOnButton}</Text>
            </TouchableOpacity>
            </View>
        );
    }
       
    }
    