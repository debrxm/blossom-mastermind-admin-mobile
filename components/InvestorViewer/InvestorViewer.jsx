import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../../firebase/config";
import { toggleHasNoty } from "../../redux/user/actions";
import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import AppButton from "../AppButton/AppButton";
import { Height } from "../../constants/Layout";
import { useNavigation } from "@react-navigation/native";
const InvestorViewer = ({
  investorViewerVisible,
  setInvestorViewerVisible,
  data,
  data: { first_name, last_name, total_invested },
}) => {
  const user = useSelector((state) => state.user.currentUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {}, [""]);

  function getChannelId(userId) {
    const currentUserId = user.id;
    const channelUrl =
      userId < currentUserId
        ? `${userId}/${currentUserId}`
        : `${currentUserId}/${userId}`;
    return channelUrl;
  }
  const navigateToChatRoom = () => {
    const channelUrl = getChannelId(data.id);
    setInvestorViewerVisible(false);
    channelUrl &&
      navigation.navigate("ChatRoom", {
        data: data,
        currentChannel: channelUrl,
      });
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      statusBarTranslucent={false}
      visible={investorViewerVisible}
      onRequestClose={() => {}}
    >
      <View
        style={{
          width: "100%",
          height: Height,
          backgroundColor: COLORS.white,
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={[
            {
              position: "absolute",
              top: 20,
              right: 10,
              backgroundColor: COLORS.white,
              zIndex: 10,
              height: 40,
              width: 40,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
          onPress={() => setNotyVisible(false)}
        >
          <Ionicons name="close" size={20} color={COLORS.danger} />
        </TouchableOpacity>
        <View
          style={{
            ...styles.container,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={styles.icon}>
              <Feather name="bell" size={24} color={COLORS.white} />
            </View>
            <Text style={styles.boldText}>{first_name + " " + last_name}</Text>
            <Text style={styles.lightText}>{total_invested}</Text>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <AppButton
              onPress={() => navigateToChatRoom()}
              title={"Send Message"}
              customStyle={styles.okBtn}
              textStyle={styles.okBtnText}
            />
            <AppButton
              onPress={() => setInvestorViewerVisible(false)}
              title={" Okay, Got it"}
              customStyle={styles.okBtn}
              textStyle={styles.okBtnText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InvestorViewer;
