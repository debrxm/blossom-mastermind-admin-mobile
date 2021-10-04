import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import { auth } from "../../firebase/config";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";

import { styles } from "./styles";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await auth.sendPasswordResetEmail(email);
      navigation.navigate("Login");
      setLoading(FA5Styletrue);
    } catch (error) {
      error.code === "auth/invalid-email"
        ? setErrorMessage("The email address is badly formatted.")
        : error.code === "auth/user-not-found"
        ? setErrorMessage(
            "There is no user record corresponding to this identifier. The user may have been deleted."
          )
        : setErrorMessage("Internal server error");
    }
    // this.setState({ email: '', password: '' });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/auth-bg.png")}
      style={styles.bgStyle}
    >
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>Reset Password</Text>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
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
        </View>
        <View style={styles.inputGroup}>
          <EvilIcons
            name="envelope"
            style={styles.inputGroupIcon}
            size={24}
            color="#97989A"
          />

          <TextInput
            style={styles.input}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              setEmail(e);
            }}
            value={email}
          />
        </View>

        <View style={styles.btns}>
          <AppButton
            onPress={handleSubmit}
            title="RESET PASSWORD"
            customStyle={styles.btn}
            loading={loading}
            textStyle={{
              textTransform: "capitalize",
              fontWeight: "400",
              marginTop: -3,
              letterSpacing: 1.2,
            }}
          />
        </View>
        <View style={{ position: "absolute", bottom: 20, width: "100%" }}>
          <Text style={{ textAlign: "center" }}>
            Return to
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#743c79" }}> Login</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ForgotPassword;
