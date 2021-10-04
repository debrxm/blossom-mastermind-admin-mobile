import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.darkTextColor,
    fontSize: 13,
    marginTop: 10,
    maxWidth: "90%",
    textAlign: "center",
    lineHeight: 23,
    flexWrap: "wrap",
    flexShrink: 1,
  },
  title: {
    color: COLORS.darkTextColor,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.tint,
    justifyContent: "center",
    alignItems: "center",
  },
});
