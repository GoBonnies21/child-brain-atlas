/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-native";

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
            <Button 
            color= "black"
            title={this.props.showOnButton}
            onPress = {this.showInfoHandler}
            ></Button>
        );
    }
}