import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/core";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import PayWithPaystack from "../../components/PayWithPaystack/PayWithPaystack";
import { useSelector } from "react-redux";
import HelperDialog from "../../components/HelperDialog/HelperDialog";
import { Width } from "../../constants/Layout";
import PaymentSuccessful from "../../components/PaymentSuccessful/PaymentSuccessful";
import PaymentBreakdownTable from "../../components/PaymentBreakdownTable/PaymentBreakdownTable";
const PackageView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;
  const user = useSelector(({ user }) => user.currentUser);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState("plans");
  const [payLoading, setPayLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  useEffect(() => {
    setErrorMessage("");
  }, []);

  const onInvestPress = () => {};
  const handleCreateInvoice = async () => {
    setDialogVisible(false);

    try {
    } catch (err) {}
  };
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
          <PaymentBreakdownTable data={data} />
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
      <PayWithPaystack
        amount={data.cost}
        setModalVisible={setModalVisible}
        setSuccess={setSuccess}
        setFailure={setFailure}
        label={`Invest ₦${data.cost} Now`}
        handleCreateInvoice={() => handleCreateInvoice()}
        loading={payLoading}
        investmentPackage={data}
      />
      <PaymentSuccessful
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
export default PackageView;
