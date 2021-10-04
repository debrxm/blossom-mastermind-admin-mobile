import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    zIndex: 1,
    minHeight: 80,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
  },
  title: {
    color: "#111111",
    fontSize: 18,
    marginBottom: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
  },
  textInput: {
    borderRadius: 20,
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 15,
  },
  trendingIssues: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  trendingIssuesHead: {
    width: "100%",
    borderBottomColor: "#55555555",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 10,
  },
  trendingIssuesHeadText: {
    color: "#55555599",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: 1,
  },
  issues: {},
  issuePreview: {
    marginVertical: 2,
    paddingVertical: 15,
    elevation: 1,
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 6,
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#ff4747",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "30%",
    marginBottom: 80,
    height: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
