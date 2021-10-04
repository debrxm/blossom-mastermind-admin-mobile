import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
  },
  icon: {
    backgroundColor: COLORS.tint,
    height: 50,
    width: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  boldText: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 20,
  },
  lightText: {
    fontSize: 20,
    color: COLORS.black,
    marginVertical: 5,
    textAlign: "center",
  },
  time: {
    marginTop: "auto",
    fontSize: 10,
    color: COLORS.black,
  },
  okBtn: {
    backgroundColor: COLORS.tint,
    borderRadius: 30,
    height: 40,
    width: "94%",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  okBtnText: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: 12,
    color: COLORS.white,
  },
});
