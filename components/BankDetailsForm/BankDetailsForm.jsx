import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import CustomPopUp from "../CustomPopUp/CustomPopUp";
import { COLORS } from "../../constants/Colors";
import { styles } from "./styles";
import AppButton from "../AppButton/AppButton";
import { Height } from "../../constants/Layout";
import {
  setAccountNumber,
  setBankBranch,
  setBankName,
  setNameOnBVN,
} from "../../redux/SetupForm/actions";
import { useDispatch, useSelector } from "react-redux";
import { onSubmitSetupForm } from "../../firebase/auth";

const BankDetailsForm = ({}) => {
  const user = useSelector(({ user }) => user.currentUser);
  const nameOnBVN = useSelector(({ setUp }) => setUp.name_on_BVN);
  const accountNumber = useSelector(({ setUp }) => setUp.account_number);
  const bankName = useSelector(({ setUp }) => setUp.bank_name);
  const bankBranch = useSelector(({ setUp }) => setUp.bank_branch);
  const age = useSelector(({ setUp }) => setUp.age);
  const gender = useSelector(({ setUp }) => setUp.gender);
  const marital_status = useSelector(({ setUp }) => setUp.marital_status);
  const first_name = useSelector(({ setUp }) => setUp.first_name);
  const middle_name = useSelector(({ setUp }) => setUp.middle_name);
  const last_name = useSelector(({ setUp }) => setUp.last_name);
  const phone = useSelector(({ setUp }) => setUp.phone);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (
      age.trim() === "" ||
      gender.trim() === "" ||
      marital_status.trim() === "" ||
      first_name.trim() === "" ||
      middle_name.trim() === "" ||
      last_name.trim() === "" ||
      phone.trim() === "" ||
      nameOnBVN.trim() === "" ||
      accountNumber.trim() === "" ||
      bankName.trim() === "" ||
      bankBranch.trim() === ""
    ) {
      setErrorMessage("All fields are required");
      return;
    }
    onSubmitSetupForm(
      user.id,
      {
        age,
        gender,
        marital_status,
        nok_first_name: first_name,
        nok_middle_name: middle_name,
        nok_last_name: last_name,
        nok_phone: phone,
        name_on_BVN: nameOnBVN,
        account_number: accountNumber,
        bank_name: bankName,
        bank_branch: bankBranch,
        isAccountReady: true,
      },
      setLoading
    );
  };
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
        <Text style={styles.routeTitle}>Bank Details</Text>
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
            placeholder="Name as written on BVN"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setNameOnBVN(e));
            }}
            value={nameOnBVN}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            autoCompleteType="tel"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            placeholder="Account number"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setAccountNumber(e));
            }}
            value={accountNumber}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Bank name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setBankName(e));
            }}
            value={bankName}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Bank branch"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              dispatch(setBankBranch(e));
            }}
            value={bankBranch}
          />
        </View>
      </View>
      <View style={styles.submitBtnContainer}>
        <AppButton
          onPress={onSubmit}
          title="Submit"
          customStyle={styles.submitBtn}
          loading={loading}
          textStyle={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: 15,
            color: COLORS.white,
            textAlign: "center",
          }}
        />
      </View>
    </>
  );
};

export default BankDetailsForm;
