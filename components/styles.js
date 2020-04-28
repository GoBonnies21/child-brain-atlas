import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')
// const window= Dimensions.get("window")
// const screen= Dimensions.get("screen")

export default StyleSheet.create({
  NavigationButtons: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  LandingImage: {
    flex: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  LandingContainer: {
    backgroundColor: "white",
  },
  NeuronContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "relative",
    width: 775,
    height: 735,
  },
  CellBody: {
    flex: 1,
    position: "absolute",
    right: width*.6,
    top: height*.33,
  },
  Dendrite: {
    flex: 1,
    position: "absolute",
    right: width*.6,
    top: height*.18,
  },
  Axon: {
    flex: 1,
    position: "absolute",
    right: width*.48,
    top: height*.60,
  },
  NodeofRanvier: {
    flex: 1,
    position: "absolute",
    right: width*.58,
    top: height*.54,
  },
  MyelinSheath: {
    flex: 1,
    position: "absolute",
    right: width*.48,
    top: height*.67,
  },
  Synapse: {
    flex: 1,
    position: "absolute",
    right: width*.10,
    top: height*.67,
  },
  SchwannCell: {
    flex: 1,
    position: "absolute",
    right: width*.40,
    top: height*.64,
  },
  AxonHillock: {
    flex: 1,
    position: "absolute",
    right: width*.26,
    top: height*.67,
  },
  OuterBrainImage: {
    width: 900,
    height: 725,
  },
  NeuronImage: {
    width: 775,
    height: 735,
  },
  LandingPageImage: {
    width: 675,
    height: 475,
  },
  InnerBrainImage: {
    width: 775,
    height: 775,
  },
  ButtonContainer: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  BrainInteriorContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  CorpusCallosum: {
    flex: 1,
    position: "absolute",
    right: width*.38,
    top: height*.34,
  },
  Thalamus: {
    flex: 1,
    position: "absolute",
    right: width*.42,
    top: height*.42,
  },
  Hypothalamus: {
    flex: 1,
    position: "absolute",
    right: width*.34,
    top: height*.55,
  },
  Amygdala: {
    flex: 1,
    position: "absolute",
    right: width*.34,
    top: height*.49,
  },
  Medulla: {
    flex: 1,
    position: "absolute",
    right: width*.54,
    top: height*.80,
  },
  PituitaryGland: {
    flex: 1,
    position: "absolute",
    right: width*.32,
    top: height*.62,
  },
  BrainStem: {
    flex: 1,
    position: "absolute",
    right: width*.48,
    top: height*.62,
  },
  SpinalCord: {
    flex: 1,
    position: "absolute",
    right: width*.58,
    top: height*.90,
  },
  BrainExteriorContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ParietalLobe: {
    flex: 1,
    position: "absolute",
    top: height*.20,
    right: width*.22,
  },
  FrontalLobe: {
    flex: 1,
    position: "absolute",
    top: height* .33,
    right: width*.62,
  },
  OccipitalLobe: {
    flex: 1,
    position: "absolute",
    right: width*.5,
    top: height*.51,
  },
  TemporalLobe: {
    flex: 1,
    position: "absolute",
    right: width*.40,
    top: height*.57,
  },
  Cerebellum: {
    flex: 1,
    position: "absolute",
    top: height*.80,
    right: width*.35,
  },
  Brain: {
    flex: 1,
    position: "absolute",
    top: height*.05,
  },
  Heart: {
    position: "absolute",
    top: height*.03,
  },
  LeftVentricle: {
    flex: 1,
    position: "absolute",
    right: width*.31,
    top: height*.65,
  },
  RightVentricle: {
    flex: 1,
    position: "absolute",
    right: width*.55,
    top: height*.65,
  },
  RightAtrium: {
    flex: 1,
    position: "absolute",
    right: width*.60,
    top: height*.45,
  },
  LeftAtrium: {
    flex: 1,
    position: "absolute",
    right: width*.33,
    top: height*.45,
  },
  Aorta: {
    flex: 1,
    position: "absolute",
    right: width*.50,
    top: height*.20,
  },
  InfVenaCava: {
    flex: 1,
    position: "absolute",
    right: width*.62,
    top: height*.82,
  },
  SupVenaCava: {
    flex: 1,
    position: "absolute",
    right: width*.60,
    top: height*.30,
  },
  PulmonaryArtery: {
    flex: 1,
    position: "absolute",
    right: width*.38,
    top: height*.28,
  },
  Tricuspid: {
    flex: 1,
    position: "absolute",
    right: width*.58,
    top: height*.56,
  },
  Mitral: {
    lex: 1,
    position: "absolute",
    right: width*.32,
    top: height*.53,
  },
  HeartContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  HeartImage: {
    position: "relative",
    top: height*.1,
    width: 775,
    height: 735,
  },
  message: {
    flex: 1,
    position: "relative",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
