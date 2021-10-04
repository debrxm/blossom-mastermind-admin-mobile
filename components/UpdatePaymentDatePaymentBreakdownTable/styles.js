import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { COLORS } from "../../constants/Colors";
import { Height, Width } from "../../constants/Layout";
const boxHeight = Height * 0.27;
const boxWidth = Width * 0.9;

export const styles = StyleSheet.create({
  tableHeadText: {
    fontSize: responsiveFontSize(2),
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  tableText: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: responsiveFontSize(1.5),
    color: COLORS.black,
    width: (Width - 20) / 3,
    textAlign: "right",
  },
  tableTextLong: {
    textAlign: "left",
    width: (Width - 20) / 2,
  },
  tableBodyText: {},
  tableFooter: {
    marginTop: 10,
  },
  tableSubFooter: {
    marginTop: 0,
  },
  tableFooterText: {
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: responsiveFontSize(2),
  },
  productCardFooterBtn: {
    height: boxHeight * 0.1,
    paddingVertical: 10,
    borderRadius: 30,
    width: boxWidth * 0.2,
  },
});
