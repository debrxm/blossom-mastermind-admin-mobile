import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BankDetailsForm from "../../components/BankDetailsForm/BankDetailsForm";
import NextOfKinDetailsForm from "../../components/NextOfKinDetailsForm/NextOfKinDetailsForm";
import PersonalDetailsForm from "../../components/PersonalDetailsForm/PersonalDetailsForm";
import { COLORS } from "../../constants/Colors";
import { Width } from "../../constants/Layout";
const { width } = Dimensions.get("window");

import { styles } from "./styles";
const slides = [
  {
    id: "1",
    data: () => <PersonalDetailsForm />,
  },
  {
    id: "2",
    data: () => <NextOfKinDetailsForm />,
  },
  {
    id: "3",
    data: () => <BankDetailsForm />,
  },
];
const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: Width, alignItems: "center" }}>{item.data()}</View>
    </View>
  );
};
const CompleteAccountCreation = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const onPrevPressed = () => {
    const prevScreen = currentSlideIndex - 1;
    if (currentSlideIndex > 0) {
      const offset = prevScreen * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  const onNextPressed = () => {
    const nextScreen = currentSlideIndex + 1;
    if (currentSlideIndex < 2) {
      const offset = nextScreen * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.routeTitle}>Setup Account</Text>
        <View style={styles.path}>
          <View style={currentSlideIndex >= 0 && styles.icon}>
            <Entypo name="user" size={15} color="white" />
          </View>
          <View
            style={[
              styles.line,
              currentSlideIndex > 0 && { backgroundColor: COLORS.cloudyWhite },
            ]}
          ></View>
          <View style={currentSlideIndex >= 1 && styles.icon}>
            <Entypo name="users" size={15} color="white" />
          </View>
          <View
            style={[
              styles.line,
              currentSlideIndex > 1 && { backgroundColor: COLORS.cloudyWhite },
            ]}
          ></View>
          <View style={currentSlideIndex >= 2 && styles.icon}>
            <Octicons name="credit-card" size={15} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.navigator}>
        <View style={styles.navigatorButtons}>
          {currentSlideIndex > 0 && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onPrevPressed}
              style={{
                ...styles.navigatorBtn,
              }}
            >
              <Ionicons name="ios-arrow-back" size={24} color={COLORS.tint} />
            </TouchableOpacity>
          )}
          <View></View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onNextPressed}
            style={{
              ...styles.navigatorBtn,
            }}
          >
            <Ionicons name="ios-arrow-forward" size={24} color={COLORS.tint} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          // contentContainerStyle={{ height: height * 0.25 }}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} />}
        />
      </View>
    </>
  );
};

export default CompleteAccountCreation;
