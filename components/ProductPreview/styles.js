import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { COLORS } from "../../constants/Colors";
import { Height, Width } from "../../constants/Layout";
const boxHeight = Height * 0.27;
const boxWidth = Width * 0.9;
export const styles = StyleSheet.create({
  productCard: {
    width: boxWidth,
    height: boxHeight,
    position: "relative",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    elevation: 3,
    borderRadius: 12,
    padding: 20,
    paddingBottom: 10,
    position: "relative",
  },
  plan: {
    paddingHorizontal: 10,
    height: 20,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightTint,
    borderRadius: 25,
    elevation: 3,
  },
  planText: { color: "#ffffff", fontSize: responsiveFontSize(1.3) },
  productCardImageContainer: {
    borderRadius: 10,
    height: boxHeight * 0.3,
    width: boxWidth * 0.3,
  },
  productCardImage: {
    height: boxHeight * 0.3,
    width: boxWidth * 0.3,
    borderRadius: 12,
    resizeMode: "contain",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingTop: 5,
  },
  cardInfoName: {
    color: COLORS.darkTextColor,
    fontSize: responsiveFontSize(2.5),
    marginVertical: 10,
  },
  cardInfoLightText: {
    color: "#97989A",
    fontSize: responsiveFontSize(1.3),
  },
  cardInfoDuration: {
    paddingTop: 0,
  },
  cardInfoDurationLightText: {
    fontSize: responsiveFontSize(1.8),
    color: COLORS.lightTextColor,
  },
  cardInfoDurationBoldText: {
    fontSize: responsiveFontSize(1.9),
    color: COLORS.tint,
  },
  cardInfoCost: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardInfoCostLightText: {
    fontSize: responsiveFontSize(1.8),
    color: COLORS.lightTextColor,
  },
  cardInfoCostBoldText: {
    fontSize: responsiveFontSize(2.2),
    color: COLORS.tint,
  },
  productCardFooter: {
    width: "100%",
  },
  productCardFooterButtons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  productCardFooterBtn: {
    height: boxHeight * 0.16,
    paddingVertical: 10,
    borderRadius: 30,
    width: "90%",
  },
});
