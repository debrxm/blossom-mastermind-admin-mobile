import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "transparent",
  },
  label: {
    color: COLORS.darkTextColor,
    fontSize: 12,
    marginLeft: 5,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  inputGroupIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    borderRadius: 25,
    paddingLeft: 10,
    fontSize: 12,
  },
});
