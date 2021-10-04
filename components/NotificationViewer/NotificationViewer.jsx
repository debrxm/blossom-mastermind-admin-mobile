import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Dimensions, Modal, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../../firebase/config";
import { toggleHasNoty } from "../../redux/user/actions";
import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import AppButton from "../AppButton/AppButton";
import { Height } from "../../constants/Layout";
import { useNavigation } from "@react-navigation/native";
const NotificationViewer = ({
  notyVisible,
  setNotyVisible,
  data,
  data: { id, title, adminMessage, created_at, viewed, trxData },
}) => {
  const user = useSelector((state) => state.user.currentUser);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {}, [""]);
  async function onView() {
    await firestore
      .collection("notifications")
      .doc(user.id)
      .collection("notifications")
      .doc(id)
      .update({ viewed: true });
  }
  const OnSendPaymentDatePressed = async () => {
    const investmentRef = await firestore
      .collection("investments")
      .doc(data.userId)
      .collection("investments")
      .doc(data.trxData.trxref);
    const snapshot = await investmentRef.get();
    setNotyVisible(false);
    navigation.navigate("UpdatePaymentDate", {
      data: snapshot.data(),
      investorId: data.userId,
      trxData: data.trxData,
    });
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      statusBarTranslucent={false}
      visible={notyVisible}
      onRequestClose={() => {}}
      onShow={!viewed && onView}
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
            <Text style={styles.boldText}>{title}</Text>
            <Text style={styles.lightText}>{adminMessage}</Text>
            <Text style={styles.time}>{moment(created_at).fromNow()}</Text>
          </View>
          <View
            style={{
              width: "100%",
              // flexDirection: "row",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <AppButton
              onPress={() => OnSendPaymentDatePressed()}
              title={"Send Payment Date"}
              customStyle={styles.okBtn}
              textStyle={styles.okBtnText}
            />
            <AppButton
              onPress={() => setNotyVisible(false)}
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

export default NotificationViewer;
