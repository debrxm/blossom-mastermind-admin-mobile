import { StyleSheet } from "react-native";

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
  codeContainer: {
    // flex: 1,
    // height: "100%",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    elevation: 4,
    margin: 10,
    padding: 20,
  },
  input: {
    height: 50,
    paddingTop: 10,
    // paddingRight: 10,
    paddingBottom: 10,
    // paddingLeft: 0,
    backgroundColor: "#fff",
    textAlign: "center",
    color: "#424242",
    borderRadius: 25,
  },
});
