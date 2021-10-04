import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
    minHeight: 80,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  routeTitle: {
    color: "#111111",
    fontSize: 20,
    letterSpacing: 1,
  },
  container: {
    paddingTop: 80,
    flex: 1,
    height: "100%",
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    // justifyContent: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    color: COLORS.darkTextColor,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 15,
    color: COLORS.lightTextColor,
  },
});
