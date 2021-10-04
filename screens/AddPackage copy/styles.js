import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 10,
    minHeight: 80,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
  },
  centerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 100,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  successtext: {
    color: COLORS.success,
    fontSize: 14,
    letterSpacing: 1,
  },
  routeTitle: {
    color: COLORS.black,
    fontSize: 14,
    letterSpacing: 1,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
    backgroundColor: COLORS.black,
    borderWidth: 0,
    borderRadius: 5,
  },
  flexGrouping: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectContainer: {
    backgroundColor: "transparent",
    width: "63%",
  },
  label: {
    color: COLORS.darkTextColor,
    fontSize: 12,
    marginLeft: 5,
  },
  dateSelectorContainer: {
    backgroundColor: "transparent",
  },
  dateSelectorLabel: {
    color: COLORS.darkTextColor,
    fontSize: 12,
    marginLeft: 5,
  },
  dateSelector: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    elevation: 0,
    height: 40,
    width: "60%",
    justifyContent: "flex-start",
  },
  dateSelectorText: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: 12,
    color: COLORS.black,
  },
  addBtn: {
    backgroundColor: COLORS.black,
    borderRadius: 30,
    height: 40,
    width: "90%",
  },
  addBtnText: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: 12,
    color: COLORS.white,
  },
});
