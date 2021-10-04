import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
export const styles = StyleSheet.create({
  productCard: {
    width: "95%",
    height: 200,
    position: "relative",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#e1e8f3",
    elevation: 3,
    borderRadius: 12,
    padding: 10,
    position: "relative",
  },
  plan: {
    position: "absolute",
    top: 20,
    right: 20,
    // width: 40,
    paddingHorizontal: 10,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tint,
    borderRadius: 25,
    elevation: 3,
  },
  planText: { color: "#ffffff", fontSize: 15 },
  productCardImageContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 10,
  },
  productCardImage: {
    borderRadius: 12,
  },
  cardInfo: {
    paddingHorizontal: 10,
  },
  cardInfoName: {
    color: "#97989A",
    fontSize: 16,
    marginVertical: 10,
  },
  cardInfoLightText: {
    color: "#97989A",
    fontSize: 10,
  },
  productCardFooter: {
    width: "100%",
    position: "absolute",
    bottom: 12,
    left: 9,
  },
  productCardFooterButtons: {
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  productCardFooterBtn: {
    height: 35,
    paddingVertical: 10,
    borderRadius: 30,
    width: "40%",
  },
});
