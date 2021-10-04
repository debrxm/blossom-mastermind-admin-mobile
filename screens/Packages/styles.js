import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/Colors";
import { Height, Width } from "../../constants/Layout";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
    height: Height - Height * 0.25,
    paddingBottom: Height * 0.1,
    width: Width,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  routeTitle: {
    color: "#111111",
    fontSize: 16,
    letterSpacing: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    right: 20,
    backgroundColor: "transparent",
  },
  button: {
    flexDirection: "row",
    backgroundColor: COLORS.tint,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: Height * 0.03,
    width: Width * 0.15,
    borderRadius: 30,
  },
});
