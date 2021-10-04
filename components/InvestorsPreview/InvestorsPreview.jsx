import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../constants/Colors";
import { styles } from "./styles";

const InvestorsPreview = ({
  data: { first_name, last_name, joined, isAccountReady, total_invested },
  data,
  setInvestorData,
  setInvestorViewerVisible,
}) => {
  const navigation = useNavigation();
  const date = new Date(joined.seconds * 1000).toLocaleDateString();
  return (
    <TouchableOpacity
      onPress={() => {
        setInvestorData(data);
        setInvestorViewerVisible(true);
      }}
    >
      <View style={styles.tagContainer}>
        <View style={styles.lefContainer}>
          <View style={{ position: "relative" }}>
            <View style={styles.avatar}>
              <FontAwesome name="user" size={20} color="white" />
            </View>
          </View>
          <View style={styles.midContainer}>
            <Text style={styles.tagname}>
              {first_name} {last_name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={styles.highlight}
            >
              {/* {moment(joined.seconds).fromNow()} */}
              {date}
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                style={[styles.highlight, { fontWeight: "500" }]}
              ></Text>
            </Text>
          </View>
          <View style={styles.rightContainer}>
            {isAccountReady && (
              <MaterialIcons
                name="verified-user"
                size={24}
                color={COLORS.success}
              />
            )}
            <View style={{ height: 10 }}></View>
            {total_invested > 0 && (
              <FontAwesome5
                name="coins"
                size={15}
                color={COLORS.lightTextColor}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InvestorsPreview;
