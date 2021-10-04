import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.tint,
    elevation: 3,
  },
  boldText: {
    fontSize: 13,
    color: "#ffffff",
  },
  lightText: {
    fontSize: 14,
    // color: COLORS.white,
    marginVertical: 5,
  },
  time: {
    fontSize: 8,
    color: COLORS.white,
  },
});
