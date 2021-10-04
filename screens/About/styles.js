import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
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
    fontSize: 16,
    letterSpacing: 1,
  },
  orgName: {
    textTransform: "uppercase",
    color: COLORS.tint,
    textAlign: "center",
    fontSize: 17,
    marginVertical: 5,
  },
  descriptionText: {
    color: "#a6a5a2",
    fontSize: 14,
    lineHeight: 25,
  },
  readmore: {
    marginTop: "auto",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 90,
  },
  readmoreText: {
    backgroundColor: "#ffffff",
    color: COLORS.tint,
    fontSize: 14,
  },
});
