import { AntDesign, Entypo } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";
import { Dimensions, Text, Modal, View, TouchableOpacity } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import { Height, Width } from "../../constants/Layout";
import { auth } from "../../firebase/config";

const OtpModal = ({ modalVisible, setModalVisible, OnVerifyPhone }) => {
  const user = useSelector((state) => state.user.currentUser);
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("");
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  return (
    <>
      <View style={{ position: "absolute", top: 0 }}>
        <Modal
          animationType="fade"
          transparent={true}
          statusBarTranslucent={true}
          visible={modalVisible}
          onRequestClose={() => {}}
          style={{
            width: "100%",
            height: Height,
            alignItems: "center",
          }}
        >
          <View style={styles.header}>
            <Text style={styles.routeTitle}>Verify OTP</Text>
          </View>
          <View style={styles.container}>
            <OTPTextInput
              inputCount={6}
              tintColor={COLORS.tint}
              textInputStyle={{ width: 30, borderWidth: 1 }}
              containerStyle={{
                width: Width,
                justifyContent: "space-evenly",
                alignItems: "flex-start",
              }}
              ref={otpInput}
              handleTextChange={(e) => {
                if (e.length === 6) {
                  OnVerifyPhone(e);
                }
              }}
            />
            <View
              style={{
                marginTop: "auto",
                paddingBottom: 80,
                width: Width,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <AntDesign name="close" size={35} color={COLORS.danger} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default OtpModal;
