import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  setting: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    position: "relative",
    minHeight: 40,
  },
  settingIcon: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  settingText: {
    letterSpacing: 0.05,
    fontSize: 14,
  },
});

export default styles;
