import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { Height } from "../../constants/Layout";
import {
  setAge,
  setGender,
  setMaritalStatus,
} from "../../redux/SetupForm/actions";
import CustomSelect from "../CustomSelect/CustomSelect";

import { styles } from "./styles";

const PersonalDetailsForm = ({}) => {
  const age = useSelector(({ setUp }) => setUp.age);
  const gender = useSelector(({ setUp }) => setUp.gender);
  const marital_status = useSelector(({ setUp }) => setUp.marital_status);
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
        <Text style={styles.routeTitle}>Personal Details</Text>
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
            autoCompleteType="tel"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            placeholder="Age"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setAge(e));
            }}
            value={age}
          />
        </View>
        <CustomSelect
          label="Gender"
          labelStyle={styles.select}
          options={[
            { label: `Female`, value: `female` },
            { label: `Male`, value: `male` },
          ]}
          value={gender}
          onValueChange={(e) => {
            dispatch(setGender(e));
          }}
        />
        <CustomSelect
          label="Marital Status"
          labelStyle={styles.select}
          options={[
            { label: `Single`, value: `single` },
            { label: `Married`, value: `married` },
            { label: `Divorced`, value: `divorced` },
          ]}
          value={marital_status}
          onValueChange={(e) => {
            dispatch(setMaritalStatus(e));
          }}
        />
      </View>
    </>
  );
};

export default PersonalDetailsForm;
