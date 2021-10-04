import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const styles = StyleSheet.create({
  productCard: {
    width: "95%",
    position: "relative",
    marginRight: 8,
    backgroundColor: "#ffffff",
    elevation: 3,
    borderRadius: 12,
    padding: 10,
    position: "relative",
    borderWidth: 1,
    borderColor: "#ffffff",
    marginVertical: 5,
  },
  plan: {
    position: "absolute",
    top: -5,
    right: -5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tint,
    borderRadius: 15,
    elevation: 3,
  },
  planReturnText: { color: "#ffffff" },
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
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsLightText: {
    fontSize: 10,
    color: "#97989A",
  },
  detailsBoldText: {
    fontSize: 14,
    color: "#353535",
  },
  amount: {
    justifyContent: "center",
    alignItems: "center",
  },
  duration: {
    justifyContent: "center",
    alignItems: "center",
  },
});
