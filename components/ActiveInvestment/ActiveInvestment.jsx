import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../constants/Colors";
import AppButton from "../AppButton/AppButton";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { useSelector } from "react-redux";

const ActiveInvestment = () => {
  const user = useSelector(({ user }) => user.currentUser);
  const navigation = useNavigation();
  const [hasInvestment] = useState(false);

  useEffect(() => {}, []);
  return (
    !hasInvestment && (
      <View style={styles.noInvestment}>
        <Text style={[styles.noDataText, styles.noInvestmentText]}>
          You currently have no invetsment.
        </Text>
        <AppButton
          onPress={() => navigation.navigate("Packages")}
          title="Start Investing"
          customStyle={{
            backgroundColor: "#ffffff",
          }}
          textStyle={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: 12,
            color: COLORS.tint,
          }}
        />
      </View>
    )
  );
};
export default ActiveInvestment;
