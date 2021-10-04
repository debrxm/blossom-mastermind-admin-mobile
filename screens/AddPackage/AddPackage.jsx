import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
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
import AddPackagePaymentDateTable from "../../components/AddPackagePaymentDateTable/AddPackagePaymentDateTable";
import { OnAddPackage } from "../../firebase/firestore";
import AppButton from "../../components/AppButton/AppButton";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
const AddPackage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const data = route.params.data;
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [duration, setDuration] = useState();
  const [freebies, setFreebies] = useState([]);
  const [returns, setReturns] = useState([
    {
      month: "1st",
      amount: 0,
    },
    {
      month: "2nd",
      amount: 0,
    },
    {
      month: "3rd",
      amount: 0,
    },
    {
      month: "4th",
      amount: 0,
    },
    {
      month: "5th",
      amount: 0,
    },
    {
      month: "6th",
      amount: 0,
    },
    {
      month: "7th",
      amount: 0,
    },
    {
      month: "8th",
      amount: 0,
    },
    {
      month: "9th",
      amount: 0,
    },
    {
      month: "10th",
      amount: 0,
    },
    {
      month: "11th",
      amount: 0,
    },
    {
      month: "12nd",
      amount: 0,
    },
  ]);
  const [current, setCurrent] = useState("");
  const [roi, setRoi] = useState("");
  const [cost, setCost] = useState(0);
  const [monthly_return, setMonthlyReturn] = useState();
  const [total_return, setTotalReturn] = useState();
  const user = useSelector(({ user }) => user.currentUser);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const refactorCode = useCallback(() => {
    setErrorMessage("");
    setCode(name.trim() && name.toLowerCase());
  }, [name]);

  const onSubmitPress = () => {
    const data = {
      code,
      name: name.toUpperCase(),
      duration,
      roi,
      cost,
      monthly_return,
      total_return,
      returns,
      hasFreebies: freebies.length > 0 ? true : false,
      investors: {},
      created_at: Date.now(),
    };
    console.log(data);
    if (
      code.trim() === "" ||
      name.trim() === "" ||
      duration.trim() === "" ||
      roi.trim() === "" ||
      cost.trim() === "" ||
      total_return.trim() === ""
    ) {
      setErrorMessage("All fields required");
      return;
    }
    OnAddPackage(data, () => {
      navigation.goBack();
    });
  };
  useEffect(() => {
    refactorCode();
  }, [name, cost, current, returns, refactorCode]);

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
        <Text style={styles.routeTitle}>#{code || "bmi1m"}</Text>
      </View>
      <HelperDialog
        visible={dialogVisible}
        setDialogVisible={setDialogVisible}
        noTitle
      >
        {current === "name" && (
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=""
            placeholderTextColor="#000000"
            keyboardType={"default"}
            autoFocus={true}
            autoCapitalize={current === "detail" ? true : "none"}
            onChangeText={(e) => {
              setErrorMessage("");
              setName(e);
            }}
            value={name}
          />
        )}
        {current === "duration" && (
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=""
            placeholderTextColor="#000000"
            keyboardType={"phone-pad"}
            autoFocus={true}
            autoCapitalize={current === "detail" ? true : "none"}
            onChangeText={(e) => {
              setErrorMessage("");
              setDuration(e);
            }}
            value={duration}
          />
        )}
        {current === "roi" && (
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=""
            placeholderTextColor="#000000"
            keyboardType={"phone-pad"}
            autoFocus={true}
            autoCapitalize={current === "detail" ? true : "none"}
            onChangeText={(e) => {
              setErrorMessage("");
              setRoi(e);
            }}
            value={roi}
          />
        )}
        {current === "cost" && (
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=""
            placeholderTextColor="#000000"
            keyboardType={"phone-pad"}
            autoFocus={true}
            autoCapitalize={current === "detail" ? true : "none"}
            onChangeText={(e) => {
              setErrorMessage("");
              const mReturn = e * 0.05;
              setMonthlyReturn(mReturn);
              setReturns([
                {
                  month: "1st",
                  amount: mReturn,
                },
                {
                  month: "2nd",
                  amount: mReturn,
                },
                {
                  month: "3rd",
                  amount: mReturn,
                },
                {
                  month: "4th",
                  amount: mReturn,
                },
                {
                  month: "5th",
                  amount: mReturn,
                },
                {
                  month: "6th",
                  amount: mReturn,
                },
                {
                  month: "7th",
                  amount: mReturn,
                },
                {
                  month: "8th",
                  amount: mReturn,
                },
                {
                  month: "9th",
                  amount: mReturn,
                },
                {
                  month: "10th",
                  amount: mReturn,
                },
                {
                  month: "11th",
                  amount: 0,
                },
                {
                  month: "12nd",
                  amount: e,
                },
              ]);
              setCost(e);
            }}
            value={cost}
          />
        )}
        {current === "total" && (
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=""
            placeholderTextColor="#000000"
            keyboardType={"phone-pad"}
            autoFocus={true}
            autoCapitalize={current === "detail" ? true : "none"}
            onChangeText={(e) => {
              setErrorMessage("");
              setTotalReturn(e);
            }}
            value={total_return}
          />
        )}
      </HelperDialog>
      <View style={styles.container}>
        <View style={styles.name_roi}>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrent("name");
              setDialogVisible(true);
            }}
          >
            <Text style={styles.productName}>
              {name.toUpperCase() || "BMI1M"}
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrent("roi");
              setDialogVisible(true);
            }}
          >
            <Text style={styles.productRoi}>ROI: {roi || 0}%</Text>
          </TouchableWithoutFeedback>
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
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrent("cost");
              setDialogVisible(true);
            }}
          >
            <View
              style={[
                styles.planBox,
                {
                  borderBottomLeftRadius: 30,
                  backgroundColor: COLORS.lightTint,
                },
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
                ₦{cost}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setCurrent("duration");
              setDialogVisible(true);
            }}
          >
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
                {`${duration || 12} Months`}
              </Text>
            </View>
          </TouchableWithoutFeedback>
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
              ₦{total_return - cost || 0}
            </Text>
          </View>
        </View>
        <View style={styles.breakdown}>
          <Text style={styles.breakdownTitle}>Payment Breakdown</Text>
          <AddPackagePaymentDateTable
            returns={returns}
            total_return={total_return}
            setCurrent={setCurrent}
            setDialogVisible={setDialogVisible}
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
          onPress={onSubmitPress}
          title={"Submit"}
          customStyle={styles.submitBtn}
          textStyle={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: responsiveFontSize(1.8),
            color: COLORS.white,
          }}
        />
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
      </View>
    </>
  );
};
export default AddPackage;

function textInputContainer(
  current,
  name,
  setName,
  cost,
  setCost,
  duration,
  setDuration,
  roi,
  setRoi,
  monthly_return,
  setMontlyReturn,
  total_return,
  setTotalReturn,
  setErrorMessage
) {
  return (
    <ScrollView
      contentContainerStyle={{
        height: Dimensions.get("screen").height,
        justifyContent: "center",
        alignItems: "center",
      }}
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        zIndex: 2,
        backgroundColor: "#00000099",
      }}
    >
      <View
        style={{
          width: "90%",
          backgroundColor: "#ffffff",
          elevation: 4,
          borderRadius: 20,
          minHeight: 200,
          padding: 20,
          marginBottom: 30,
        }}
      >
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=""
          placeholderTextColor="#000000"
          keyboardType={
            current === "cost"
              ? "number-pad"
              : current === "duration"
              ? "number-pad"
              : current === "roi"
              ? "number-pad"
              : current === "montly_return"
              ? "number-pad"
              : current === "total_return"
              ? "number-pad"
              : "default"
          }
          autoFocus={true}
          autoCapitalize={current === "detail" ? true : "none"}
          onChangeText={(e) => {
            setErrorMessage("");
            current === "name"
              ? setName(e)
              : current === "cost"
              ? setCost(e)
              : current === "duration"
              ? setDuration(e)
              : current === "roi"
              ? setRoi(e)
              : current === "monthly_return"
              ? setMontlyReturn(e)
              : current === "total_return"
              ? setTotalReturn(e)
              : setDetailsText(e);
          }}
          value={
            current === "name"
              ? name
              : current === "cost"
              ? cost
              : current === "duration"
              ? duration
              : current === "quantity"
              ? quantity
              : current === "roi"
              ? roi
              : current === "monthly_return"
              ? monthly_return
              : current === "total_return"
              ? total_return
              : detailsText
          }
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 35,
              height: 35,
              borderRadius: 20,
              elevation: 2,
              backgroundColor: "#ff4747",
            }}
            onPress={() => {
              setTextInputContainerVisible(!textInputContainerVisible);
            }}
          >
            <AntDesign name="close" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 35,
              height: 35,
              borderRadius: 20,
              elevation: 2,
              backgroundColor: "green",
            }}
            onPress={() => {
              current === "name"
                ? setName(name)
                : current === "cost"
                ? setCost(cost)
                : current === "duration"
                ? setDuration(duration)
                : current === "montly_return"
                ? setMontlyReturn(monthly_return)
                : current === "total_return"
                ? setTotalReturn(total_return)
                : "";
              setTextInputContainerVisible(!textInputContainerVisible);
            }}
          >
            <AntDesign name="check" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
