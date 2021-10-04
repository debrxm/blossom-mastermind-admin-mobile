import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import React from "react";
import { View, Image, Text } from "react-native";
import { COLORS } from "../../constants/Colors";
import { MoneyFormat } from "../../utils/helper";
import AppButton from "../AppButton/AppButton";

import { styles } from "./styles";

export default function RecommendedInvestmentPreview({ customStyles, data }) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("PackageView", { data });
  };
  return (
    <>
      <View style={[styles.recommenedCard, { ...customStyles }]}>
        <View style={styles.pattern}>
          <Image
            style={styles.recommenedCardImage}
            source={require("../../assets/images/vector.png")}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={{ height: 5 }}></View>
          <Text style={styles.duration}>{data.duration}</Text>
          <View style={{ height: 5 }}></View>
          <Text style={styles.cost}>₦{MoneyFormat(data.cost)}</Text>
          <View style={{ height: 15 }}></View>
          <View style={styles.roiContainer}>
            <Text style={styles.roi}>ROI: {data.roi}%</Text>
          </View>
        </View>
        <View style={{ height: 15 }}></View>
        <View style={styles.productCardFooterButtons}>
          <AppButton
            onPress={onPress}
            title="View Details"
            customStyle={styles.productCardFooterBtn}
            textStyle={{
              textTransform: "capitalize",
              fontWeight: "400",
              fontSize: responsiveFontSize(1.5),
            }}
          />
        </View>
      </View>
    </>
  );
}
