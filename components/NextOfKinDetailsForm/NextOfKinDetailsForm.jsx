import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { Height } from "../../constants/Layout";
import {
  setFirstName,
  setLastName,
  setMiddleName,
  setPhone,
} from "../../redux/SetupForm/actions";
import CustomSelect from "../CustomSelect/CustomSelect";

import { styles } from "./styles";

const NextOfKinDetailsForm = ({}) => {
  const firstName = useSelector(({ setUp }) => setUp.first_name);
  const middleName = useSelector(({ setUp }) => setUp.middle_name);
  const lastName = useSelector(({ setUp }) => setUp.last_name);
  const phone = useSelector(({ setUp }) => setUp.phone);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      {errorMessage !== "" ? (
        <CustomPopUp
          message={`${errorMessage}`}
          type={"error"}
          customStyles={{
            backgroundColor: "red",
            borderRadius: 30,
            justifyContent: "center",
          }}
          customTextStyles={{ color: "#ffffff" }}
        />
      ) : null}
      <View style={styles.header}>
        <Text style={styles.routeTitle}>Next of Kin Details</Text>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          height: Height * 0.7,
          justifyContent: "flex-start",
        }}
      >
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="First name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setFirstName(e));
            }}
            value={firstName}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Middle name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setMiddleName(e));
            }}
            value={middleName}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Last name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setLastName(e));
            }}
            value={lastName}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            autoCompleteType="tel"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            placeholder="Phone"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setPhone(e));
            }}
            value={phone}
          />
        </View>
      </View>
    </>
  );
};

export default NextOfKinDetailsForm;
