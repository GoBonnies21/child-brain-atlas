// import React from "react";
// import {Dimensions} from "react-native";

// const window= Dimensions.get("window")
// const screen= Dimensions.get("screen");

// export default class Dimensions extends React.Component {
//     constructor() {
//         super(); 
//         this.state= {
//             dimensions: {
//                 window,
//                 screen
//             }
//         }
//         onChange=({window, screen}) => {
//             this.setState({dimensions: {window, screen}});
//         }
    
//     };
//     render() {
//         const { dimensions }=this.state;
//         return (
//             dimensions 
//         )
//     }


// }
import {Dimensions, PixelRatio} from 'react-native';
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
export {
  widthPercentageToDP,
  heightPercentageToDP
};