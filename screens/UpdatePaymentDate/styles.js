import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { COLORS } from "../../constants/Colors";
import { Height, Width } from "../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
    flex: 1,
    alignItems: "center",
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
    backgroundColor: COLORS.tint,
    justifyContent: "space-between",
  },
  routeTitle: {
    color: COLORS.cloudyWhite,
    fontSize: responsiveFontSize(2),
    letterSpacing: 1,
  },
  name_roi: {
    flexDirection: "row",
    width: Width,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.tint,
    paddingBottom: Height * 0.06,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  productName: {
    color: COLORS.cloudyWhite,
    fontSize: responsiveFontSize(3),
    paddingVertical: Height * 0.02,
  },
  productRoi: {
    color: COLORS.cloudyWhite,
    fontSize: responsiveFontSize(1.6),
    // paddingVertical: 20,
  },
  planBox: {
    width: Width / 4,
    height: Height * 0.09,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 5,
    elevation: 5,
    shadowRadius: 1,
    shadowOpacity: 0.5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  planBoxBoldText: {
    fontSize: responsiveFontSize(1.5),
    textTransform: "uppercase",
  },
  planBoxLightText: {
    fontSize: responsiveFontSize(2),
  },
  breakdown: {
    marginTop: 30,
  },
  breakdownTitle: {
    color: COLORS.lightTextColor,
    marginTop: 10,
    fontSize: responsiveFontSize(1.5),
    letterSpacing: 2,
    fontWeight: "600",
    textAlign: "center",
  },

  tableHeadText: {
    fontSize: 16,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  tableText: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: responsiveFontSize(1.3),
    color: COLORS.black,
    width: (Width - 20) / 3,
    textAlign: "right",
  },
  tableTextLong: {
    textAlign: "left",
    width: (Width - 20) / 2,
  },
  tableFooter: {
    marginTop: responsiveFontSize(2.8),
  },
  tableSubFooter: {
    marginTop: 0,
  },
  productCardImageContainer: {
    borderRadius: 10,
    backgroundColor: "transparent",
    position: "absolute",
    // bottom: 60,
    right: 0,
    top: -18,
  },
  productCardImage: {
    height: 70,
    width: 70,
    borderRadius: 12,
    resizeMode: "contain",
    borderRadius: 100,
  },
  selectPlanText: {
    fontSize: 15,
    paddingVertical: 20,
    textAlign: "center",
  },
  descriptionText: {
    textAlign: "center",
    color: "#a6a5a2",
    marginVertical: 10,
    fontSize: 13,
    letterSpacing: 0.05,
    lineHeight: 28,
    paddingVertical: 10,
  },
  modalTextButton: {
    marginVertical: 3,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  modalText: {
    color: "#111111",
    fontSize: 14,
  },
  submitBtn: {
    height: Height * 0.05,
    width: "60%",
    borderRadius: 30,
    backgroundColor: COLORS.success,
  },
});
