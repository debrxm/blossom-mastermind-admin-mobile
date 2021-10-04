import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { COLORS } from "../../constants/Colors";
import { Height } from "../../constants/Layout";
// import { cxlxrs } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 30,
  },
  contentContainer: {},
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 10,
    minHeight: 80,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  routeTitle: {
    color: "#111111",
    fontSize: responsiveFontSize(1.5),
    letterSpacing: 1,
    marginRight: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: "transparent",
  },

  payMethodBtn: {
    height: Height * 0.05,
    width: "60%",
    borderRadius: 30,
    backgroundColor: COLORS.success,
  },
});
