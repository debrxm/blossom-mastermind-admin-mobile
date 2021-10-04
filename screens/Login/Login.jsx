import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { auth } from "../../firebase/config";

import { styles } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [toggleShowPassword, setToggleShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async () => {
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("All fields are required");
      return;
    }
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      error.code === "auth/wrong-password"
        ? setErrorMessage(
            "The password is invalid or the user does not have a password."
          )
        : error.code === "auth/user-not-found"
        ? setErrorMessage(
            "There is no user record corresponding to this identifier."
          )
        : setErrorMessage("Shit just got real");
      setLoading(false);
    }
  };
  return (
    <ImageBackground
      source={require("../../assets/images/auth-bg.png")}
      style={styles.bgStyle}
    >
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>Welcome Back -- Admin</Text>
          <Text style={styles.headSubText}>Login to access your account</Text>
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
          <FontAwesome
            name="envelope-o"
            style={styles.inputGroupIcon}
            size={19}
            color="#97989A"
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="email-address"
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
        <View style={styles.inputGroup}>
          <AntDesign
            style={styles.inputGroupIcon}
            name="lock"
            size={22}
            color="#97989A"
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            secureTextEntry={!toggleShowPassword ? true : false}
            placeholder="Password"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              setPassword(e);
            }}
            value={password}
          />
          <TouchableWithoutFeedback
            onPress={() => setToggleShowPassword(!toggleShowPassword)}
          >
            <Feather
              name={toggleShowPassword ? "eye-off" : "eye"}
              size={20}
              color="#97989A"
              style={{ marginRight: 10 }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ marginVertical: 15 }}></View>
        <View style={styles.btns}>
          <AppButton
            onPress={handleSubmit}
            title="Login"
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
      </View>
    </ImageBackground>
  );
};

export default Login;
// export default Login;
