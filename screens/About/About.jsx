import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useLinking } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/Colors";
import logo from "../../assets/images/logo.png";
import { styles } from "./styles";

const About = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  useEffect(() => {}, []);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Abouts</Text>
      </View>

      <View
        // contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <Text style={styles.orgName}>Blossom Mastermind</Text>
        <Text style={[styles.orgName, { marginBottom: 20 }]}>
          International Nigeria ltd
        </Text>
        <Text style={styles.descriptionText}>
          Blossom Mastermind International is an invesment & wellness company
          that is into health products and food supplements
        </Text>
        <Text style={styles.descriptionText}>
          BMI limited is here to help you generate passive income that could
          last you a lifetime while you thrive in your chosen business and
          career.
        </Text>
        <Text style={styles.descriptionText}>
          We are gift financial wellness, and financial freedom plan is achieved
          effortlessly with us as your partner
        </Text>
        <Image
          source={logo}
          style={{
            marginTop: "auto",
            flex: 0.7,
            width: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.blossommastermind.com/")}
        style={styles.readmore}
      >
        <Text style={styles.readmoreText}>READ MORE</Text>
        <Ionicons name="chevron-forward-outline" size={16} color={colors[0]} />
      </TouchableOpacity>
    </>
  );
};

export default About;
