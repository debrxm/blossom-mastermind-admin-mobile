import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CreditCardInput } from "react-native-input-credit-card";
import AppButton from "../AppButton/AppButton";
import { styles } from "./styles";

const AddCard = ({ isModelOpen, setModelOpen }) => {
  const [isChecked, setChecked] = useState(false);
  const [creditCardInput, setCreditCardInput] = useState({});

  const onChange = (formData) =>
    setCreditCardInput(JSON.stringify(formData, null, " "));
  // const onFocus = (field) => console.log("focusing", field);
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isModelOpen}
      statusBarTranslucent={true}
      style={styles.modal}
      onRequestClose={() => setModelOpen(false)}
    >
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setModelOpen(false)}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>New Card</Text>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: 60,
          }}
        ></View> */}
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <CreditCardInput
          // autoFocus
          requiresName
          requiresCVC
          // requiresPostalCode
          cardScale={1.0}
          labelStyle={styles.label}
          inputStyle={styles.input}
          validColor={"black"}
          invalidColor={"red"}
          placeholderColor={"darkgray"}
          cardImageFront={require("../../assets/images/front-card.png")}
          cardImageBack={require("../../assets/images/back-card.png")}
          // onFocus={onFocus}
          onChange={onChange}
          contentContainerStyle={{ alignItems: "flex-start" }}
        />
        <View style={styles.checkboxWrapper}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#cd9931" : "#11111189"}
          />
          <Text
            style={[styles.checkboxText, isChecked && { color: "#cd9931" }]}
          >
            Set as default
          </Text>
        </View>
        <View style={styles.btnWrapper}>
          <AppButton
            onPress={() => {}}
            title={"Add"}
            customStyle={styles.btn}
            textStyle={styles.btnTxt}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default AddCard;
