import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
import { Height } from "../../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "flex-end",
    position: "absolute",
    bottom: Height * 0.1,
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    backgroundColor: COLORS.tint,
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
