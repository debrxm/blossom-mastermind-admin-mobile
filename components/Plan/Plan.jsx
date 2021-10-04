import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { colors } from "../../constants/Colors";
import AppButton from "../AppButton/AppButton";
import { styles } from "./styles";

export default function Plan({ index, selected, setSelected, customStyles }) {
  const navigation = useNavigation();

  const onPress = () => {
    setSelected(index);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.productCard,
            { ...customStyles },
            index === selected ? { borderColor: colors[0] } : {},
          ]}
        >
          <View style={styles.plan}>
            <Text style={styles.planReturnText}>40% return</Text>
          </View>
          <View style={styles.productCardImageContainer}>
            <Image
              style={styles.productCardImage}
              source={require("../../assets/images/logo.png")}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardInfoName}>Boundless Diamond Executive</Text>
            <View style={styles.details}>
              <View style={styles.amount}>
                <Text style={styles.detailsLightText}>Amount</Text>
                <Text style={styles.detailsBoldText}>{`₦ ${"00.00"}`}</Text>
              </View>
              <View style={styles.duration}>
                <Text style={styles.detailsLightText}>Duration</Text>
                <Text style={styles.detailsBoldText}>{"Monthly"}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
