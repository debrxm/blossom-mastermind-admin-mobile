import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Paystack } from "react-native-paystack-webview";
import { View } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { paystackTestKeys } from "../../configs/apiKeys";
import AppButton from "../AppButton/AppButton";
import { COLORS } from "../../constants/Colors";
import { OnPaymentSuccessful } from "../../firebase/firestore";

import { styles } from "./styles";

const PayWithPaystack = ({
  amount,
  label,
  setSuccess,
  setFailure,
  setModalVisible,
  investmentPackage,
}) => {
  const user = useSelector(({ user }) => user.currentUser);
  useEffect(() => {});
  const cleanUp = () => {
    setSuccess(true);
  };
  const paystackWebViewRef = useRef();
  const onSuccess = async (data) => {
    const trxref = data.transactionRef.trxref;
    const trxData = {
      trxref,
      amount,
    };
    setModalVisible(true);
    try {
      OnPaymentSuccessful(user, trxData, investmentPackage, cleanUp);
    } catch (err) {
      setFailure(true);
      // "Ooops an error occured wallet no funded" + " " + err,
    }
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: COLORS.white,
        bottom: 80,
      }}
    >
      <Paystack
        showPayButton={false}
        paystackKey={paystackTestKeys.public}
        amount={amount || 500000}
        billingEmail="payment@blossommatermind.com"
        billingMobile="09787377462"
        billingName="Blossom Mastermind International"
        ActivityIndicatorColor="green"
        SafeAreaViewContainer={{ marginTop: 5 }}
        SafeAreaViewContainerModal={{ marginTop: 5 }}
        ref={paystackWebViewRef}
        onCancel={(e) => {
          console.log("oooops transaction cancelled!");
        }}
        onSuccess={onSuccess}
        autoStart={false}
      />

      <AppButton
        onPress={() => {
          paystackWebViewRef.current.startTransaction();
        }}
        title={label}
        customStyle={styles.payMethodBtn}
        textStyle={{
          textTransform: "capitalize",
          fontWeight: "400",
          fontSize: responsiveFontSize(1.8),
          color: COLORS.white,
        }}
      />
    </View>
  );
};

export default PayWithPaystack;
