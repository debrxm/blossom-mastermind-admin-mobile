import { StyleSheet } from "react-native";
import { COLORS, colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  // },
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors[0],
    justifyContent: "center",
  },
  routeTitle: {
    color: "#ffffff",
    fontSize: 16,
    letterSpacing: 1,
  },
  path: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 50,
  },
  icon: {
    borderColor: COLORS.cloudyWhite,
    borderWidth: 3,
    borderRadius: 20,
    padding: 5,
  },
  line: {
    width: 60,
    height: 1,
    backgroundColor: "#11111189",
  },
  navigator: {
    // backgroundColor: colors[0],
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingTop: 20,
  },

  navigatorButtons: {
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  navigatorBtn: {
    height: 40,
    paddingVertical: 10,
    borderRadius: 30,
    width: 40,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
