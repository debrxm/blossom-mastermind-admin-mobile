import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  Image,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Width } from "../../constants/Layout";
const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#ffffff", white: "#010101" };

import { styles } from "./styles";

const slides = [
  {
    id: "1",
    image: require("../../assets/images/illustration_1.png"),
    title: "Your No.1 Investment Partner",
    subtitle:
      "Blossom Mastermind International is an invesment & wellness company that is into health products and food supplements",
  },
  {
    id: "2",
    image: require("../../assets/images/illustration_2.png"),
    title: "Increase Your Value",
    subtitle:
      "BMI limited is here to help you generate passive income that could last you a lifetime while you thrive in your chosen business and career.",
  },
  {
    id: "3",
    image: require("../../assets/images/illustration_3.png"),
    title: "Achieve Your Goals",
    subtitle:
      "We are gift financial wellness, and financial freedom plan is achieved effortlessly with us as your partner",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
      <Image
        source={item?.image}
        style={{ height: "55%", width, resizeMode: "contain" }}
      />
      <View style={{ width: Width, alignItems: "center" }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 20,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View
              style={{
                height: 50,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={[styles.btn, { flex: 1 }]}
                onPress={() => navigation.navigate("Register")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 13,
                    letterSpacing: 1.2,
                    color: "white",
                  }}
                >
                  REGISTER
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    flex: 1,
                    borderColor: "#743c79",
                    borderWidth: 2,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 13,
                    letterSpacing: 1.2,
                    color: "#743c79",
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: "#743c79",
                    borderWidth: 2,
                    backgroundColor: "transparent",
                    flex: 0.6,
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#743c79",
                  }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={[styles.btn, { width: 50 }]}
              >
                <Ionicons name="ios-arrow-forward" size={24} color="white" />
                {/* <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "white",
                  }}
                >
                  NEXT
                </Text> */}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;
