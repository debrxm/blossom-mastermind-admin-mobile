import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 80,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  routeTitle: {
    color: "#111111",
    fontSize: 14,
    letterSpacing: 1,
  },
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
});
