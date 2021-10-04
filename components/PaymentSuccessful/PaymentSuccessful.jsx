import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Text, Modal, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import { Height, Width } from "../../constants/Layout";

const PaymentSuccessful = ({ modalVisible, setModalVisible }) => {
  return (
    <>
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
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.white,
            // height: Height,
            flex: 1,
          }}
        >
          <Image
            source={require("../../assets/images/payment_success.png")}
            style={{
              height: "60%",
              width: Width,
              resizeMode: "contain",
              marginTop: 100,
            }}
            resizeMode="contain"
          />
          <View style={{ width: Width, alignItems: "center" }}>
            <Text style={styles.title}>Payment Successful!</Text>
            <Text style={styles.subtitle}>
              You can access payment details in Transaction Page
            </Text>
          </View>
          <View
            style={{
              marginTop: "auto",
              paddingBottom: 50,
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
    </>
  );
};

export default PaymentSuccessful;
