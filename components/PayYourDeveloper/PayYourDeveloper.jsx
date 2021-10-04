import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppButton from "../AppButton/AppButton";
import me from "../../assets/images/me.png";

import { styles } from "./styles";

const PayYourDeveloper = ({ isModelOpen, setModelOpen }) => {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isModelOpen}
      statusBarTranslucent={true}
      style={styles.modal}
      onRequestClose={() => setModelOpen(false)}
    >
      <View style={styles.header}></View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <Image source={me} style={styles.me} />

        <View style={styles.btnWrapper}>
          <AppButton
            onPress={() => {}}
            title={"Pay Up"}
            customStyle={styles.btn}
            textStyle={styles.btnTxt}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default PayYourDeveloper;
