import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { COLORS } from "../../constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/core";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { useSelector } from "react-redux";
import HelperDialog from "../../components/HelperDialog/HelperDialog";
import { Width } from "../../constants/Layout";
import UpdatePaymentDatePaymentBreakdownTable from "../../components/UpdatePaymentDatePaymentBreakdownTable/UpdatePaymentDatePaymentBreakdownTable";
import { firestore } from "../../firebase/config";
import AppButton from "../../components/AppButton/AppButton";

import { styles } from "./styles";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { UpdateNotification } from "../../firebase/firestore";

const UpdatePaymentDate = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;
  const investorId = route.params.investorId;
  const trxData = route.params.trxData;
  const user = useSelector(({ user }) => user.currentUser);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [returns, setReturns] = useState(data.returns);
  const [active, setActive] = useState("plans");
  const [payLoading, setPayLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const onUpdatePress = async () => {
    const investmentRef = firestore
      .collection("investments")
      .doc(investorId)
      .collection("investments")
      .doc(trxData.trxref);
    const all_investmentRef = firestore
      .collection("all_investments")
      .doc(trxData.trxref);
    const investData = {
      returns,
      confirmed: true,
    };
    if (returns.length < 12) {
      setErrorMessage("Add Payment dates");
      return;
    }
    const investorMessage = `Your deposited amount of ₦${data.cost} has been confirmed and payment dates has been updated`;

    const investorRef = firestore.collection(`users`).doc(investorId);
    const investorSnap = await investorRef.get();
    investorSnap.exists &&
      UpdateNotification(
        investorSnap.data().id,
        {
          title: "Payment Date Confirmation!!!",
          investorMessage,
        },
        {
          token: investorSnap.data().notificationToken,
          channelId: "paymentDateAlert",
          title: "Payment Date Confirmation!!!",
          body: investorMessage,
        }
      );
    try {
      await investmentRef.update(investData);
      await all_investmentRef.update(investData);
      navigation.goBack();
    } catch (error) {}
  };

  useEffect(() => {
    setErrorMessage("");
  }, [returns]);
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={COLORS.cloudyWhite}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>#{data.code}</Text>
      </View>
      <HelperDialog
        visible={dialogVisible}
        setDialogVisible={setDialogVisible}
        noTitle
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Freebies</Text>
        </View>
      </HelperDialog>
      <View style={styles.container}>
        <View style={styles.name_roi}>
          <Text style={styles.productName}>{data.name}</Text>
          <Text style={styles.productRoi}>ROI: {data.roi}%</Text>
        </View>
        <View
          style={{
            // height: 60,
            backgroundColor: "transparent",
            width: Width - 50,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: -40,
          }}
        >
          <View
            style={[
              styles.planBox,
              { borderBottomLeftRadius: 30, backgroundColor: COLORS.lightTint },
            ]}
          >
            <Text
              style={[styles.planBoxBoldText, { color: COLORS.cloudyWhite }]}
            >
              Cost
            </Text>
            <Text
              style={[styles.planBoxLightText, { color: COLORS.cloudyWhite }]}
            >
              ₦{data.cost}
            </Text>
          </View>
          <View
            style={[
              styles.planBox,
              {
                backgroundColor: COLORS.lightTint,
              },
            ]}
          >
            <Text
              style={[styles.planBoxBoldText, { color: COLORS.cloudyWhite }]}
            >
              Duration
            </Text>
            <Text
              style={[styles.planBoxLightText, { color: COLORS.cloudyWhite }]}
            >
              {data.duration}
            </Text>
          </View>
          <View
            style={[
              styles.planBox,
              {
                backgroundColor: COLORS.lightTint,
                borderBottomRightRadius: 30,
              },
            ]}
          >
            <Text
              style={[styles.planBoxBoldText, { color: COLORS.cloudyWhite }]}
            >
              Profit
            </Text>
            <Text
              style={[styles.planBoxLightText, { color: COLORS.cloudyWhite }]}
            >
              ₦{data.total_return - data.cost}
            </Text>
          </View>
        </View>
        <View style={styles.breakdown}>
          <Text style={styles.breakdownTitle}>Payment Breakdown</Text>
          <UpdatePaymentDatePaymentBreakdownTable
            data={data}
            returns={returns}
            setReturns={setReturns}
          />
        </View>
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
        <AppButton
          onPress={onUpdatePress}
          title={"Update"}
          customStyle={styles.submitBtn}
          textStyle={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: responsiveFontSize(1.8),
            color: COLORS.white,
          }}
        />
        {data.hasFreebies && (
          <View style={styles.productCardImageContainer}>
            <TouchableWithoutFeedback onPress={() => setDialogVisible(true)}>
              <Image
                style={styles.productCardImage}
                source={require("../../assets/gifs/gift-box.gif")}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: responsiveFontSize(1.3),
                textAlign: "center",
                color: COLORS.lightTextColor,
                marginTop: -15,
              }}
            >
              Freebies
            </Text>
          </View>
        )}
      </View>
    </>
  );
};
export default UpdatePaymentDate;
