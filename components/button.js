import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class BrainButton extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Button title={this.props.showOnButton}></Button>
        )
    }
}